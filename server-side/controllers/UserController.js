const UserModel = require('../shemas/UserModelShema').userModel

function handleError(err) {
    console.log(err);
}

var user = {
    saveUser : ((userData, callback = null) => {

        // Create an instance of user model
        var userInstance = new UserModel(userData);

        console.log(userData)

        // Save the new model instance, passing a callback
        userInstance.save(function (err) {

            if (callback) {
                if (err) callback(err);
                else callback();
            } else {
                handleError(err);
            }

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
    }),

    removeUser : ((user, callback = null) => {
        UserModel.deleteOne(user, function(err) {
            if (err) return handleError(err);
            if (callback) callback();
        });
    })
}

module.exports = {
    saveUser : user.saveUser,
    getUserByEmail : user.getUserByEmail,
    getUserById : user.getUserById, 
    getAllUsers : user.getAllUsers,
    removeUser : user.removeUser
};


