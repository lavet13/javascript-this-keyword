'use strict';

// Example 1

// const myName = "Jonas";

// function first() {
//     const age = 30;

//     if(age >= 30) {
//         const decade = 3;
//         var millenial = true;
//     }

//     function second() {
//         const job = "teacher";
//         console.log(`${myName} is a ${age}-old ${job}`);
//     }

//     second();
// }

// first();

// Example 2
// function calcAge (birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // Creating NEW variable with the same name as outer scope's variable
//             const firstName = () => 'Steven';

//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT!';

//             const str = `Oh, and you're a millenial, ${firstName()}`;
//             console.log(str);

//             function add (a, b) { // only in strict mode
//                 return a + b;
//             }

//             console.log(add(1, 1));
//         }
//         console.log(millenial);
//         console.log(output);
//         // console.log(add(1, 1)); // referenceError
//         // console.log(str); // referenceError
//     }

//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(age); // referenceError
// printAge(); // referenceError

// Example 3

// using var or let or const either with the function expression or arrow function

// const myName = 'Jonas';

// if(myName === 'Jonas') {
//     // beginning of the scope
//     // therefore it's a TDZ(Temporal Dead Zone)
//     console.log(`Jonas is a ${job}`);
//     const age = 2037 - 1989;
//     console.log(age);
//     // the end of a TDZ(Temporal Dead Zone)
//     // before initialization
//     const job = 'teacher';
//     console.log(x);
// }

// Example 4
/*

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = 'teacher';
const year = 1991;

// Functions 
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl (a, b) {
    return a + b;
}

var addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

*/

/*

// Example 5

console.log(numProducts);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}


var x = 1; // window object creates property for x variable
let y = 2;
const z = 3;

// let's see if it's
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

// Example 6

/*

// Method 👉 this = <Object that is calling the method>

// Simple function call 👉 this = undefined (in strict mode! Otherwise: point to the global object which in case of the browser is the window object)

// Arrow functions 👉 this = <this of surrounding function (lexical this), it will simply gets picked up from the outer lexical scope of the arrow function>

// Event listener 👉 this = <DOM element that the handler is attached to>

// this does NOT point to the function itself, and also NOT the its variable environment!


console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);

    // const test = () => {
    //     console.log(this);
    // };

    // test();
};

calcAge(1991);


const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrow(1980);


const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    }
};

jonas.calcAge();


const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

*/

// Pitfalls in both regular functions and arrow functions

// var firstName = 'Matilda'; // creates a property in the window object which is equals to undefined

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    try {
      /*
            // regular function inside of a method didn't get the this keyword from the parent scope
            // const isMillenial = function() {
            //     console.log(this);
            //     console.log(this.year >= 1981 && this.year <= 1996);
            // };
            
            */

      /*

            // regular function inside of a method didn't get the this keyword from the parent scope
            // Solution 1 to the this keyword
            const self = this; // the way we can preserve the this keyword, this can also be called "that", so that I might also see.
            function isMillenial() {
                console.log(self);
                console.log(self.year >= 1981 && self.year <= 1996);
            }

            */

      // Solution 2, which doesn't need this extra variable
      const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
      };

      isMillenial();
    } catch (e) {
      if (e instanceof TypeError) {
        console.log(`${e.message}`);
      }
    }
  },

  greet: () => {
    // pitfall, because it's getting the global object which is the window object
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

// jonas.greet();

jonas.calcAge();

/*
// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 8, 12);

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(2, 3);


/*
// you wouldn't get access to a function outside of the block scope if it's working in strict mode
if(1) {
    let test1 = "test1";
    const test2 = "test2";

    function test() {
        console.log('test');
    }
}

test();

console.log(test1, test2);
*/
/*

// subtle distinction between primitive types and reference types

let age = 30;
let oldAge = age;
age = 31;

console.log(age, oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Me:', me);
console.log('Friend:', friend);
*/
