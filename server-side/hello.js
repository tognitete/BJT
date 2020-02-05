var server = {
    // this is a normal function - its runs asynchronously
    say_hello : ((data) => {
    
        /*if (data.length = 0) {
          return callback(new Error("An error has occurred"));
        }*/
        return data
      })

    }

module.exports = {
    say_hello: server.say_hello
};

