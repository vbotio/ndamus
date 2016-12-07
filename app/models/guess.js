var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GuessSchema   = new Schema({
    title: String,
    img: String,
    authorPhoto: String,
    author: String,
    datePosted: Date,
    thumbsUp: Number,
    thumbsDown: Number,
    comments: Number,
    fbToken: String
});

module.exports = mongoose.model('Guess', GuessSchema);