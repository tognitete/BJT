var express = require('express');
var app = express();

const say_hello = require('./hello').say_hello

app.get('/', function(req, res) {
  //say_hello('hello world from post request')
  let hello = say_hello('hello world from post request')
  res.send(hello);
});

// POST method route
app.post('/', function (req, res) {
  res.send(say_hello('hello world from post request'));
});


app.listen(3001)
console.log("server is listenning on localhost:3001")