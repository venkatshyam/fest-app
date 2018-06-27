var mongoose = require('mongoose');

//defining Schema for userCollection 
var User = mongoose.model('mobile_collection', {
  
  name: String,
  email: String,
  password: String,
  collegename:String,
  year:String,
  branch:String,
  phone: String,
  event:String
});


module.exports.User=User;
