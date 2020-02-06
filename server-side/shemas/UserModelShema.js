const mongoose = require('../database').mongoose

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    name: String,
    a_date: Date
  });
  
var userModel = mongoose.model('SomeModel', UserModelSchema );

module.exports = {
    userModel: userModel
};