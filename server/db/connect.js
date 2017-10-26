var mongoose = require('mongoose');
var config = require('../config');

module.exports = function() {  
  mongoose.Promise = require('bluebird');
  
  //mongoose.createConnection('mongodb://' + config.db.host + '/' + config.db.name);
  mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);
  /*mongoose.connection.on('all', function(message) {
    console.log('MongoDB event: %s', message);
  });*/
  mongoose.connection.on('error', function() {
    console.error('mongoose connection error');
  });
  mongoose.connection.once('open', function() {
      console.log("Mongoose connected");
  });
}