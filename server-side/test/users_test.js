var assert = require('assert');
var userController = require('../controllers/UserController');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const UserModel = require('../shemas/UserModelShema').userModel

describe('Users', function() {
    var user = {email: "johndoe@mail.com", password: "password"};

    describe('create', function() {
        afterEach(function(done) { 
            userController.removeUser({email: user.email}, function() {
                done();
            });
        });

        it('should be able to create a new user', function(done) {
            bcrypt.hash(user.password, saltRounds,
                function(err, hashedPassword) {
                    if (err) {
                        done(err);
                    }

                    const userToCreate = {email: user.email, password: hashedPassword};

                    userController.saveUser(userToCreate, function(err) {
                        if (err) done(err);

                        var query = UserModel.findOne({ 'email': userToCreate.email });
                        query.exec(function (err,user) {
                            if (err) { done(err); }
                            else {
                                assert.equal(user.email, userToCreate.email);
                                assert.equal(user.password, userToCreate.password);
                                done();
                            }
                        });

                    });
                });
        });

        it('should not be able to create an existing user', function(done) {
            bcrypt.hash(user.password, saltRounds,
                function(err, hashedPassword) {
                    if (err) {
                        done(err);
                    }

                    const userToCreate = {email: user.email, password: hashedPassword};

                    userController.saveUser(userToCreate, function(err) {
                        if (err) done(err);

                        const hey = userController.saveUser(userToCreate, function(err) {
                            if (err) {
                                done();
                            }
                            else {
                                done("Should terminate with an error.");
                            }
                        });
                    });

                });
        });
    });
});

