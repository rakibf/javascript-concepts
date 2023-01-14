// parent doesn't have access of its children's scope
// var x = 23; // variable in global scope
// console.log(x); // 23
// console.log(window.x); // 23 => x variable is in window object


// function myFunc() {
    // var y = 10; // variable in function scope can't be accessed by parent scope



    // x = 10; // reassignment of a global variable. but using var before this will make it a function scoped and will not change the global variable


    // var x = 23;
    // child has access to the parent scopes
    // console.log(`${x} from myFunc`); // 23
// }

// myFunc();

// console.log(x); // 10;