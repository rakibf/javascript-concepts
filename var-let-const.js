if (true) {
    var varVariable = "This is var";

    // var variable can be redeclared in the same scope
    var varVariable = "This is var again";
}

// variables declared using var don't have block scope
console.log(varVariable); // This is var again

// redeclare let in different scope will not cause error
let letVariable = "This is let again";

if (true) {
    // block scoped
    let letVariable = "This is let";
    // let letVariable = "This is let again again"; // you can't redeclare let in the same scope
    letVariable = "This is let again";
    console.log(letVariable); // This is let agin
}

console.log(letVariable); // This is let again

// let is block scoped
// console.log(letVariable); // Reference error

if (true) {
    const constVariable = "This is const";
    // constVariable = "This is const again"; // TypeError
}