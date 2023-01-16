// A closure is a function with remembered values from the outer scopes

/* function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(2, 3)); */

/* var num1 = 3;

var sum = function() {
    var num2 = 2;
    return function() {
        return num1 + num2;
    }
}

const myFunc = sum();
console.dir(myFunc); */


// Make a varaiable protective
function bankAccount(initialBalance) {
    var balance = initialBalance;

    return function () {
        return balance;
    }
}

const account = bankAccount();
// console.log(account()); // accessing balance in a protective way



// stop polluting global object using function expression
/* (function () {
    var num1 = 5;
    var sum = function () {
        var num2 = 5;
        return num1 + num2;
    }
    console.log(sum());
})(); */

// closure doesn't remembers the exact value but it keeps the reference of that value
/* (function() {
    var num1 = 3;
    var num2 = 2;

    var sum = function() {
        return num1 + num2;
    }

    console.log(sum());
    console.dir(sum);

    num1 = 5;
    num2 = 6;

    console.log(sum());
    console.dir(sum);
})(); */

// Variable declared using let doesn't become a property of the winodw object.
// It belongs to the script
/* let num1 = 5;
let num2 = 7;

let sum = function() {
    return num1 + num2;
}

console.dir(sum); */

function stopWatch() {
    let startTime = Date.now();

    function getDelay() {
        // startTime will be remembered by getDelay function
        console.log(Date.now() - startTime);
    }
    return getDelay;
}

let timer = stopWatch(); // starts the stopWatch

for (let i = 0; i < 10000000; i++) {
    Math.random() * 10000;
}

// timer();
// console.dir(timer);
// optimization technique
// Now dev decides not to use it so he makes timer function reference null
timer = null;

// timer(); // will give error

var a; // global variable
function asyncFunc() {
    a = 20;

    let callback = () => {
        console.log(a);
    };

    setTimeout(callback, 3000);

    console.dir(callback);
}

// asyncFunc(); // 30, because asynchronous operation executes when the call stack is empty every operation done a = 30 also done. so closure has the reference of a and it gets the updated value

a = 30;

/* 
function apiCall(url) {
    fetch(url)
        .then((res) => res.json())
        .then(data => console.log(data));
}

apiCall('https://jsonplaceholder.typicode.com/todos/1'); */


/* for (let i = 0; i < 3; i++) {
    
    const f = () => {
        console.log(i);
    }

    f(); // 0, 1, 2
}
 */


/* var i;
for (i = 0; i < 3; i++) {
    const f= () => {
        console.log(i);
    }

    f(); // 0, 1, 2
} */



for (let i = 0; i < 3; i++) {
    // the callback function inside setTimeout is a closure
    // because it is referencing the i variable
    /* setTimeout(() => {
        // 0, 1, 2 when using let & 3, 3, 3 when using var
        console.log(i);
    }, 3000); */

    /* const myFunc = () => {
        console.log(i);
    }
    console.dir(myFunc);
    setTimeout(myFunc, 3000); */
}

/* (() => {
  var i=0;
  while (i<3) {
    setTimeout(() => console.log(i), 0);
    i++;
  }
})(); */

// 1. var is hoisted to the top and is only function scope
// 2. let is block scope and every loop iteration creates different let variable in the memory 





