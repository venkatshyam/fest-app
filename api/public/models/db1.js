var mongoose = require('mongoose');
var Event = mongoose.model('events',{
    _id : String,
    events : Array
  });

  
  module.exports.Event=Event;