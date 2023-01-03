const router = require('express').Router();
const { Categories, Items } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const categories = await Categories.findAll({
      include: Items,
    });
    res.send(categories);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
