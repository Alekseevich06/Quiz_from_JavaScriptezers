const router = require('express').Router();
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

router.post('/registration', async(req,res) => {
    try {
        const {name, password, email} = req.body
        if(name.trim() === '' || password.trim() === '' || email.trim() === '') {
            res.status(400).json({ message: 'повнимательнее, заполните все поля' })
      return
        }
        const getEmail = await User.findOne({where: {email}})
        if (getEmail) {
            res.status(400).json({ message: 'Такой пользователь уже зарегестрирован' });
            return;
          }
          const hashPassword = await bcrypt.hash(password, 10);
          
          const user = await User.create({ name, email, password: hashPassword })
          
          if (user) {
            res.status(201).json({ message: 'success', user });
            return;
          }

          res.status(400).json({ message: 'Что-то пошло не так, попробуй еще разок' });
    } catch ({message}) {
        res.status(500).console.log({message});
    }
})

router.post('/authorization', async (req,res) => {
    try {
        const {email, password} = req.body
    if(password.trim() === '' || email.trim() === '') {
        res.status(400).json({ message: 'повнимательнее, заполните все поля' })
    }

    const user = await User.findOne({ where: { email } });
    if(user) {
        const isCompare = await bcrypt.compare(password, user.password);
        if (isCompare) {
            res.status(200).json({ meesage: 'success' });
            return;
          }
          res.status(400).json({ message: 'email или пароль не совпадают' });
          return;
        }
        res.status(400).json({ message: 'email или пароль не совпадают' });

    } catch ({message}) {
        res.status(500).console.log({message});
    }
})

module.exports = router;
