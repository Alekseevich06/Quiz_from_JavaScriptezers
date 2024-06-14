const router = require('express').Router()
const { User } = require('../../db/models')
const bcrypt = require('bcrypt')
const generateTokens = require('../../utils/generateTokens')
const cookiesConfig = require('../../configs/cookiesConfig')

router.post('/registration', async (req, res) => {
	const { name, email, password, score = 0 } = req.body
	console.log(req.body)
	const user = await User.findAll({
		where: { email },
	})
	if (!user.length) {
		try {
			const hash = await bcrypt.hash(password, 10)
			const user = await User.create({
				name,
				email,
				password: hash,
				score,
			})
			const { accessToken, refreshToken } = generateTokens({ user })
			res
				.cookie('refreshToken', refreshToken, cookiesConfig)
				.json({ accessToken, user })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	} else {
		res.send({ message: 'Данный email уже зарегистрирован' })
	}
})

router.post('/authorization', async (req, res) => {
	try {
		const { email, password } = req.body
		const targetUser = await User.findOne({ where: { email } })
		if (!targetUser)
			return res.status(401).json({ message: 'Неверный email или пароль' })

		const isValid = await bcrypt.compare(password, targetUser.password)
		if (!isValid)
			return res.status(401).json({ message: 'Неверный email или пароль' })

		const user = targetUser.get()
		delete user.password

		const { accessToken, refreshToken } = generateTokens({ user })

		res
			.cookie('refreshToken', refreshToken, cookiesConfig)
			.json({ accessToken, user })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

router.get('/logout', async (req, res) => {
	res.clearCookie('refreshToken').json({ message: 'OK' })
})

router.patch('/:userId', async (req, res) => {
	try {
		const { score } = req.body
		const { userId } = req.params
		const result = await User.update({ score }, { where: { id: userId } })
		if (result[0] > 0) {
			const user = await User.findOne({ where: { id: userId } })
			// завершаем ответ
			res.status(200).json({ message: 'success', user })
			return
		}
		res.status(400).json({ message: 'Не твоя, вот и бесишься' })
	} catch ({ message }) {
		console.log(message)
	}
})

module.exports = router
