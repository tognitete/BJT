var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const saveUser = require('./controllers/UserController').saveUser

// GET method route
app.get('/', function(req, res) {
  res.send("Hello from get method route");
});

app.get('/users', function(req, res) {
  res.send("get all users");
});

app.get('/users/:userID', function(req, res) {
  res.send("get users with ID "+req.params.userID);
});


// POST method route
app.post('/', function (req, res) {
  res.send("Hello from post method route");
});


app.post('/user', function (req, res) {
  console.log('Got body:', req.body);
  res.send(saveUser({ name: req.body.name}));
});


app.listen(3001, () => console.log(`Started server at http://localhost:3001!`));