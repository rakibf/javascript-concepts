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

