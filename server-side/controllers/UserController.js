const UserModel = require('../shemas/UserModelShema').userModel


var user = {
    saveUser : ((userData) => {

// Create an instance of model SomeModel
var userInstance = new UserModel(userData);

// Save the new model instance, passing a callback
userInstance.save(function (err) {
  if (err) return handleError(err);
});

   return userData ;
    })

    

    }

module.exports = {
    saveUser: user.saveUser
};


