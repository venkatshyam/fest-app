var mongoose = require('mongoose');

//defining Schema for userCollection 
var Feed = mongoose.model('feedback', {
  
  feedback:String
});


module.exports.Feed=Feed;