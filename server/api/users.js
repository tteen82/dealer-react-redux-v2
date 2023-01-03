const router = require('express').Router();
const { Users } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.send(users);
  } catch (ex) {
    next(ex);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await Users.create(req.body);
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
