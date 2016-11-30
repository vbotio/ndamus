var router = require('express').Router();


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.use('/bear', require('./bear.js'));


module.exports = router;