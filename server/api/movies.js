const router = require('express').Router();
const { Movies } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movies.findAll();
    res.send(movies);
  } catch (ex) {
    next(ex);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movies.findByPk(req.params.id);
    res.send(movie);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
