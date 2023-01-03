const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/categories', require('./categories'));
router.use('/cart', require('./cart'));

module.exports = router;
