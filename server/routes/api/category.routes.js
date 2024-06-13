const router = require('express').Router();
const { Category } = require('../../db/models');

router.get('/', async (req, res) => {
    try {
      const {name} = req.query;
      const categor = await Category.findAll();
      res.status(200).json({ message: 'success', categor });
    } catch ({ message }) {
      res.json({ message });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const {id} = req.params;
      const categorOne = await Category.findOne({ where: id });
      res.status(200).json({ message: 'success', categorOne });
    } catch ({ message }) {
      res.json({ message });
    }
  });


module.exports = router;