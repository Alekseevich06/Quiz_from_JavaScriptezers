const jwt = require('jsonwebtoken')
const { User } = require('../db/models')
const { where } = require('sequelize')
require('dotenv').config()

async function verifyRefreshToken(req, res, next) {
	try {
		const { refreshToken } = req.cookies
		let { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
		user = await User.findOne({ where: { id: user.id } })
		res.locals.user = user

		next()
	} catch (error) {
		console.log('Invalid refresh token')
		res.clearCookie('refreshToken').sendStatus(401)
	}
}

module.exports = verifyRefreshToken
