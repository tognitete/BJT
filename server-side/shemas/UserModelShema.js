const mongoose = require('../database').mongoose

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  });
  
var userModel = mongoose.model('User', UserModelSchema );

module.exports = {
    userModel: userModel
};