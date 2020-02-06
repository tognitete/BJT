var express = require('express');
var app = express();


const saveUser = require('./controllers/UserController').saveUser

// GET method route
app.get('/', function(req, res) {

  res.send(saveUser({ name: "GLaDOS", game: "Portal" }));
});

// POST method route
app.post('/', function (req, res) {
  res.send(say_hello('hello world from post request'));
});


app.listen(3001)
console.log("server is listenning on localhost:3001")