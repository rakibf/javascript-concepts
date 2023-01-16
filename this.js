const helperObject = {
    doSomething: function(message, callback) {
        callback(message);
    }
}

const callback = (message) => {
    console.log(message);
    console.log(this); // this = window
}

const myObject = {
    myMethod: function() {
        helperObject.doSomething('Hello boss!', callback);
    }
}

myObject.myMethod();