const router = require("express").Router();
const { Category, Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    console.log(categories);
    res.status(200).json({ message: "success", categories });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:catId/questions", async (req, res) => {
  try {
    const { catId } = req.params;
    const category = await Category.findOne({
      where: { id: catId },
      include: Question,
    });
    res.status(200).json({ message: "success", category });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
