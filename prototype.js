/* const person = {};

person.name = 'Jasim';
person.age = 35;

person.eat = function () {
    console.log('Person is eating...');
}
person.sleep = function () {
    console.log('Person is sleeping...');
} */

// don't need to maintain a different object
/* const personMethods = {
    eat() {
        console.log('Person is eating...');
    },
    sleep() {
        console.log('Person is sleeping...');
    },
    // but when adding new method we have add it in two places
    // here
    play() {
        console.log('Person is playing');
    }
} */

/* Person.prototype = {
    eat() {
        console.log('Person is eating...');
    },
    sleep() {
        console.log('Person is sleeping...');
    },
} */

// function Person(name, age) {
    // let person = {};

    // Object.create() creates an object by setting its prototype to another object
    // let person = Object.create(personMethods);

    // not needed when we call the constructor using new keyword
    // let person = Object.create(Person.prototype);

    // person.name = name;
    // person.age = age;

    // use this
    // this.name = name;
    // this.age = age;

    // creating eat and sleep method to every object is not memory efficient
    // so, we must find a way so that all instances share the same methods
    // the way is moving these methods to a different object from here we can refer them

    /* person.eat = function() {
        console.log(`Person is eating...`);
    }
    person.sleep = function() {
        console.log(`Person is sleeping...`);
    } */

    // referencing eat and sleep method from different object
    /* person.eat = personMethods.eat;
    person.sleep = personMethods.sleep;
    // here
    person.play = personMethods.play; */

    // returns this when using new
    // return person;
// }

/* const person1 = Person('Shakib', 33);
const person2 = Person('Tamim', 35); */

// new keyword sets this to the newly created object whose prototype is the ConstructorFunction.prototype
// const person1 = new Person('Shakib', 33);

// person1.eat();

// console.dir(person1);

// prototype is a property of any JavaScript function
/* let test = function() {};
console.dir(test); */


// Class
/* 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating...`);
    }

    sleep() {
        console.log(`${this.name} is sleeping...`);
    }
}

const shakib = new Person('Shakib', 35);
console.log(shakib);
shakib.eat(); */



// const persons = [];
const persons = new Array();
persons.push('Shakib');
console.log(persons);