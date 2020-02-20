const mongoose = require('../database').mongoose

//Define a schema
var Schema = mongoose.Schema;

var PluginModelSchema = new Schema({
    nom: String,
    version : String,
    description : String,
    pictures : String,
    opensource : String ,
    topic : String,
    tag : String,
    tutoriel : String
  });
  
var pluginModel = mongoose.model('Plugin', PluginModelSchema );

module.exports = {
    pluginModel: pluginModel
};