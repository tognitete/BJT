const UserModel = require('../shemas/UserModelShema').userModel


var user = {
    saveUser : ((userData) => {

         // Create an instance of user model
         var userInstance = new UserModel(userData);

         console.log(userData)

         // Save the new model instance, passing a callback
         userInstance.save(function (err) {

         if (err) return handleError(err);
         
        });

          return userData ;
        }),

     getUserById : ((userID,callback) => {

          var query = UserModel.find({ 'name': 'me' });

          query.select('name');
          
          query.exec(function (err,user) {
          if (err) return handleError(err);
            callback(user)
          });

        
     }),

     getUserByEmail : ((userEmail) => {

      return new Promise((resolve, reject) => {

        var query = UserModel.find({ 'email': userEmail });
         
        query.exec(function (err,user) {

        if (err) {reject("Échec")}
        else  {
          resolve(user);
        }
         
        });

      }

      )
    }),

      
     
    getAllUsers : ((callback) => {
 
      var query = UserModel.find();

      query.select('name');
      
      query.exec(function (err,users) {
      if (err) return handleError(err);
        callback(users)
      });
    }) 
   }

module.exports = {
    saveUser : user.saveUser,
    getUserByEmail : user.getUserByEmail,
    getUserById : user.getUserById, 
    getAllUsers : user.getAllUsers
};


