var mongoose = require('mongoose');
var db;

module.exports = function(){
  if(!db){
    // use username:password@port.mlab.com:15446/databasename for atlas(cloud mongodb) collec
    db = mongoose.connect('mongodb://localhost:27017/crud');
  }
  return db;
}
