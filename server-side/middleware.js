const jwt = require('jsonwebtoken');
const secret = 'audioPluginSecret';


const withAuth = function(req, res, next) {

  console.log("middleware",req.body.token)
  var token = req.body.token;
    if(Array.isArray(token)) {

        if(req.body.token[1] != undefined) token = req.body.token[1]
    } 
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}
module.exports = withAuth;