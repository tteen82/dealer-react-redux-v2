const router = require('express').Router();

router.use('/movies', require('./movies'));
router.use('/heros', require('./heros'));
router.use('/casting', require('./casting'));

module.exports = router;
