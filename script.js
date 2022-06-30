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
function calcAge (birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
            function add (a, b) { // only in strict mode
                return a + b;
            }

            console.log(add(1, 1));
        }
        console.log(millenial);
        // console.log(add(1, 1)); // referenceError
        // console.log(str); // referenceError
    }

    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // referenceError
// printAge(); // referenceError
