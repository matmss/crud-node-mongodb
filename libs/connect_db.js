<<<<<<< HEAD
var mongoose = require(mongoose);
var db;

module.exports = function(){
  if(!db){
    db = mongoose.connect('mongodb://localhost/crud');
  }
  return db;
}
=======
var mongoose = require(mongoose);
var db;

module.exports = function(){
  if(!db){
    db = mongoose.connect('mongodb://localhost/crud');
  }
  return db;
}
>>>>>>> origin/master
