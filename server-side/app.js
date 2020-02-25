var express = require('express');
var app = express();
const multer = require('multer');
const jwt = require('jsonwebtoken');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const secret = 'audioPluginSecret';

app.use(cookieParser());

const withAuth = require('./middleware');

const saltRounds = 10;


const userController = require('./controllers/UserController')
const pluginController = require('./controllers/PluginController')


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// GET method route
app.get('/',function(req, res) {
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

app.get('/plugin/:pluginName', function(req, res) {
 
  pluginController.getPluginByName(req.params.pluginName,function(data) {
    
    res.send(data);
})
});

app.get('/plugins', function(req, res) {
 
  pluginController.getAllPlugins(function(data) {
    
    res.send(data);  
})
});

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});


// POST method route
app.post('/', withAuth,function (req, res) {
  res.send("Hello from post method route");
});



app.post('/user', function (req, res) {
  console.log('Got body:', req.body);


  bcrypt.hash(req.body.password, saltRounds,
    function(err, hashedPassword) {
    if (err) {
      next(err);
    }
    else {
      req.body.password = hashedPassword;
    }

    console.log(req.body.password)
  res.send(userController.saveUser({ email: req.body.email , password: req.body.password}));

    
      
});

});

app.post('/auth', function (req, res) {

   

  userController.getUserByEmail(req.body.email).then(function(data) {


       console.log("data",data)
      
      if(data.length == 0){

        res.send(false)

      }else {

       bcrypt.compare(req.body.password,data[0].password, function(err, same) {
       if (err) {
         res.send(err)
       } else {
        const email = req.body.email
        const payload = {email} ;
        const token = jwt.sign(payload, secret, {
          expiresIn: '1h'
        });
        console.log('token',token)
        res.cookie('token', token, { httpOnly: true })
          .sendStatus(200);
       }
     });
   }
    })


   
 
});


app.post('/plugin', upload.single('pictures'), function (req, res) {
  console.log('Got body:', req);

  let pluginInformation = {

    nom: req.body.nom,
    version : req.body.version,
    description : req.body.description,
    pictures : req.file.filename ,
    opensource : req.body.opensource ,
    topic : req.body.topic,
    tag : req.body.tag,
    tutoriel : req.body.tutoriel

  }
  res.send(pluginController.savePlugin(pluginInformation));
});

/* plugin try & test */

pluginServer = express(),
server = require('http').createServer(pluginServer);

pluginServer.use('/audio-plugin', express.static(__dirname + '/audio-plugin/'));

server.listen(8080);

/* */

/* display plugin image */
imageServer = express(),
server = require('http').createServer(imageServer);

imageServer.use('/uploads', express.static(__dirname + '/uploads/'));

server.listen(8081);

/* */


app.listen(3001, () => console.log(`Started server at http://localhost:3001!`));