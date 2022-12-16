const router = require('express').Router();
const { Movies, Heros, Casting } = require('../db');

router.get('/:id', async (req, res, next) => {
  try {
    const casting = await Casting.findAll({
      include: [{ model: Movies }, { model: Heros }],
      where: { movieId: req.params.id },
    });
    res.send(casting);
  } catch (ex) {
    next(ex);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newHero = await Heros.create(req.body);
    const newCasting = await Casting.create({
      heroId: newHero.id,
      movieId: req.body.movieId,
    });
    const casting = await Casting.findAll({
      include: [{ model: Movies }, { model: Heros }],
      where: { movieId: req.body.movieId },
    });
    res.send(casting);
  } catch (ex) {
    next(ex);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const castingToRemove = await Casting.findByPk(req.params.id);
    const movieId = castingToRemove.movieId;
    await castingToRemove.destroy();
    // res.send({ movieId });
    const casting = await Casting.findAll({
      include: [{ model: Movies }, { model: Heros }],
      where: { movieId },
    });
    res.send(casting);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
