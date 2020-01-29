 
 var say_hello = {
    helloWorld: (callback) => {
     console.log("hello world")
        callback
    }
};

module.exports = {
    helloWorld: say_hello.helloWorld
};