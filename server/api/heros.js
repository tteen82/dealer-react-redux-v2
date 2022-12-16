const router = require('express').Router();
const { Movies, Heros, Casting } = require('../db');

router.get('/:id', async (req, res, next) => {
  try {
    const heros = await Heros.findByPk(req.params.id);
    res.send(heros);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
