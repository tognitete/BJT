//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/progWeb';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    mongoose : mongoose
};

