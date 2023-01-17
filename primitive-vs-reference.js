// primitive values are stored in stack memory
/* var a = 5;
var b = a; // 5

a = 6;

console.log(a, b); */


// reference values are stored in heap memory
// reference values are pointed by variables
// so a & b both referencing the same value
// any change to reference value happen by "a" will also change the value that "b" is pointing
/* const a = {
    name:'Shakib',
}

const b = a;

a.name = 'Tamim';

console.log(a, b); */


const a = ['Shakib', 'Tamim'];

const b = a; // the array is a reference value. so, a & b both pointing the same value

b[1] = "Mahmudullah";
a.push("Mushfiq");

// console.log(a, b);

// person1 creates a pointer on stack memory that points to the object in the heap memory
const person1 = {
    name: 'Shakib',
    age: 35
}
// person2 creates a pointer on stack memory that also points the same object in the heap memory
let person2 = person1;

person2.name = 'Rakib'; // changing the object by the person2 variable

person2 = {}; // assignment is different from mutating, when we assign it creates a new value in the heap memory
// console.log(person1, person2);


let players = ['Shakib', 'Tamim']; // players variable creates a players pointer that points to the array

let persons = players; // now the persons variable creates a persons pointer that points to the same array

persons.push('Mahmudullah'); // mutaion through push method


players = ['Afif', 'Miraz']; // assignment is different when we do assign a different object it stores a differnt object in the heap memory.
// console.log(players, persons);


// copy immutably

const language = {
    name: 'JavaScript',
    estd: 1995,
    // nested reference type
    libraries: ['React', 'jQuery']
}

const language2 = {...language}; // copy immutably

language.name = 'Java'; // this mutation will not effect the language2 object as we copied immutably
language.libraries.push('Angular'); // this will effect language2 because spread operator doesn't copy deeply. libraries is also another reference type.

console.log(language, language2);

// wrapper type

const str = "Shakib";

// object representation of str

const str2 = new String("Shakib");

// why does wrapper type exists?

// Wrapper type exists so that we can use methods and properties from String.prototype. such as:

str.toLowerCase(); // here wrapper type plays a role

// primitive types are immutable

let str3 = 'Shakib';

str3.test = 'Rakib'; // will not affect str3

// console.log(str3);


// pass by value or pass by reference

const d = 5;

function changeValue(value) {   
    value = 10;
}

// primitive values are copied when sending to functions
changeValue(d); // passed by value 

console.log(d); // 5

