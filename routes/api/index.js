const router = require('express').Router();
const routes = require('./routes');

router.use('/blogs', routes);

module.exports = router;