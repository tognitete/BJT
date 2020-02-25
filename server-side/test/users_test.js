var assert = require('assert');
var userController = require('../controllers/UserController');
var bcrypt = require('bcrypt');
const saltRounds = 10;


describe('Users', function() {
    var user = {email: "johndoe@mail.com", password: "password"};

    afterEach(function(done) { 
        userController.removeUser({email: user.email}, function() {
            done();
        });
    });
        
    describe('create', function() {
        it('should be able to create a new user', function(done) {
            bcrypt.hash(user.password, saltRounds,
                function(err, hashedPassword) {
                    if (err) {
                        done(err);
                    }

                    const userToCreate = {email: user.email, password: hashedPassword};

                    userController.saveUser(userToCreate, function() {
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
    });
});

