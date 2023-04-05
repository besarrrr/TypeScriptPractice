let id: number = 5;
let firstname: string = 'danny';
let hasDog: boolean = true;

let unit: number; // Declare variable without assigning a value
unit = 5;

// it is better not to explicitly state type like below:


// let id = 5; // TS knows it's a number
// let firstname = 'danny'; // TS knows it's a string
// let hasDog = true; // TS knows it's a boolean

// hasDog = 'yes'; // ERROR

//  A union type is a variable that can be assigned more than one type:

let age: string | number;
age = 26;
age = '26';

// A tuple is an array with fixed size and known datatypes

let person: [string, number, boolean] = ['Danny', 1, true];
// person[0] = 100; // Error - Value at index 0 can only be a string

// Objects in TypeScript must have all the correct properties and value types
// When defining the signature of an object, you will usually use an interface.

interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}
  
let person1: Person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
  
let person2: Person = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
};

// Typescript can infer when something is a functon and infers the return as well 

// Using explicit typing 
const circle: Function = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
  // Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
  const circle2 = (diam: number) => {
    return 'The circumference is ' + Math.PI * diam;
  };

// Interfaces are very similar to type aliases, and in many cases you can use either. 
// The key distinction is that type aliases cannot be reopened to add new properties, vs an interface which is always extendable.

type Person4 = {
    name: string;
    age: number;
};

interface Person6 {
    name: string;
    age: number;
}

// Extending an interface:

interface Animal {
    name: string
}
  
interface Bear extends Animal {
    honey: boolean
}
  
const bear: Bear = {
    name: "Winnie",
    honey: true,
}