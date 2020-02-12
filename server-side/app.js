var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const userController = require('./controllers/UserController')
const pluginController = require('./controllers/PluginController')


// GET method route
app.get('/', function(req, res) {
  res.send("Hello from get method route");
});

app.get('/users', function(req, res) {

  userController.getAllUsers(function(data) {
    
    res.send(data);  
})
});

app.get('/users/:userID', function(req, res) {
 
  userController.getUserById(req.params.userID,function(data) {
    
    res.send(data);
})
});


// POST method route
app.post('/', function (req, res) {
  res.send("Hello from post method route");
});


app.post('/user', function (req, res) {
  console.log('Got body:', req.body);
  res.send(userController.saveUser({ name: req.body.name}));
});


app.post('/plugin', function (req, res) {
  console.log('Got body:', req.body);
  res.send(pluginController.savePlugin(req.body));
});


app.listen(3001, () => console.log(`Started server at http://localhost:3001!`));