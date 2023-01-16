function Person(name, age) {
    // this = Object.create(Person.prototype);
    
    this.name = name;
    this.age = age;
    // return this;
}

Person.prototype.eat = function() {
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
Cricketer.prototype.play = function() {
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
}

const shakib3 = new Person3('Shakib', 35);
shakib3.setName = "Tamim";
console.log(shakib3);