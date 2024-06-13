const router = require('express').Router();
пше const { User } = require('../../db/models');
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