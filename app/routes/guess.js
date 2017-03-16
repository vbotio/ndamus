var
	router = require('express').Router(),
	Guess     = require('../../app/models/guess');


router.route('/').post(function(req, res) {
        
    var guess = new Guess();    
    guess.title = req.body.title;  
    guess.img = 'http://lorempixel.com/g/100/100/';
    guess.authorPhoto = 'http://lorempixel.com/g/100/100/people/';
    guess.author = 'Fidel Castro';
    guess.datePosted = Date.now();
    guess.thumbsUp = 0;
    guess.thumbsDown = 0;
    guess.comments = 0;
    guess.fbToken = 'token';

    guess.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Guess created!' });
    });
        
});

router.route('/all').get(function(req, res) {
        Guess.find({}).sort([['datePosted', -1]]).exec(function(err, guesses) {

            console.log(guesses);

            if (err)
                res.send(err);

            res.json(guesses);
        });
    });

router.route('/:guess_id/thumbup').put(function(req, res){
    Guess.findById(req.params.guess_id, function(err, guess){
        if(err)
            res.send(err);

        guess.thumbsUp += 1;

        guess.save(function(err){
            if(err)
                res.send(err);
            res.json({ message: 'Successfully thumbed up!' });
        });
    });
});

router.route('/:guess_id/thumbdown').put(function(req, res){
    Guess.findById(req.params.guess_id, function(err, guess){
        if(err)
            res.send(err);

        guess.thumbsUp -= 1;

        guess.save(function(err){
            if(err)
                res.send(err);
            res.json({ message: 'Successfully thumbed down!' });
        });
    });
});

router.route('/:guess_id')

    .get(function(req, res) {
        Guess.findById(req.params.guess_id, function(err, guess) {
            if (err)
                res.send(err);
            res.json(guess);
        });
    })

    .delete(function(req, res) {
        Guess.remove({
            _id: req.params.guess_id
        }, function(err, guess) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;