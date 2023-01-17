function Person(name, age) {
    // this = Object.create(Person.prototype);

    this.name = name;
    this.age = age;
    // return this;
}

Person.prototype.eat = function () {
    console.log(`${this.name} is eating...`);
}

function Cricketer(name, age, type, country) {
    // call the parent constructor in the derived/child constructor
    Person.call(this, name, age);

    this.type = type;
    this.country = country;
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.play = function () {
    console.log(`${this.name} is playing`);
}

// console.dir(Cricketer);

const shakib = new Cricketer('Shakib', 34, 'all-rounder', 'Bangladesh');

// console.log(shakib); // eat function is in the shakib object which is not memory efficient

// shakib.play();


// class implementation
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Cricketer2 extends Person2 {
    constructor(name, age, type, country) {
        super(name, age);
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing.`);
    }
}

const shakib2 = new Cricketer2('Shakib', 35, 'all-rounder', 'Bangladesh');

// console.log(shakib2);

// shakib2.eat();


// getter & setter

class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    // getter
    get setName() {
        return this.name;
    }
    // setter
    set setName(name) {
        this.name = name;
    }

    // static method
    static isEqualAge(cricketer1, cricketer2) {
        return cricketer1.age === cricketer2.age;
    }
}

const shakib3 = new Person3('Shakib', 35);
const tamim3 = new Person3('Tamim', 37);
// shakib3.setName = "Tamim";
// console.log(shakib3);

// console.log(Person3.isEqualAge(shakib3, tamim3)); // static methods are called by constructors

//            Polymorphism         //
//********************************//

class Person4 {
    constructor() {
        this.name = 'Shakib'
    }

    play() {
        console.log('Shakib is playing');
    }
}

class Cricketer4 extends Person4 {
    // the child class overriding the play method of the parent class
    play() {
        // super.play(); // we can call the super classes play method
        console.log('Shakib is playing cricket')
    }
}

const shakib4 = new Cricketer4();

shakib4.play();


// When derived or child class modifies or updates the methods of parent class, it is called polymorphism



