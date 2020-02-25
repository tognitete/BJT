var assert = require('assert');
var userController = require('../controllers/UserController');
var bcrypt = require('bcrypt');
const saltRounds = 10;


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

                        userController.getUserByEmail(userToCreate.email)
                            .then((res) => {
                                assert.notEqual(res.length, 0);
                                assert.equal(res[0].email, userToCreate.email);
                                assert.equal(res[0].password, userToCreate.password);
                                done();
                            })
                            .catch((err) => {
                                done(err);
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

