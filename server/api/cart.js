const router = require('express').Router();
const { Cart, Items, Users } = require('../db');

router.get('/:id', async (req, res, next) => {
  try {
    const list = await Cart.findAll({
      include: [Items, Users],
      where: { userId: req.params.id },
    });
    const user = await Users.findByPk(req.params.id);
    res.send({ list, user });
  } catch (ex) {
    next(ex);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const entry = await Cart.create(req.body);
    const newEntry = await Cart.findByPk(entry.id, {
      include: [Items, Users],
    });
    res.send(newEntry);
  } catch (ex) {
    next(ex);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const itemToRemove = await Cart.findByPk(req.params.id);
    const userId = itemToRemove.userId;
    await itemToRemove.destroy();
    const newList = await Cart.findAll({
      include: [Items, Users],
      where: { userId },
    });
    res.send(newList);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
