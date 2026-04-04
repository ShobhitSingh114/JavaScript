// puri file mai code new standards k according he treat kiya jaega wngine k through
// abhi automatically sara code strict mode mai chalta hai 
"use strict"; // treat all JS code as newer version

//alert(3+7) // we are using nodejs not browser



let name = "Shobhit"    // string
let age = 19            // number
let isLoggedIn = false  // boolean

let id = Symbol('123');
let anotherId = Symbol('123');
console.log("Comparing two symbols");
console.log(id === anotherId); // false



// number => upto 2^53
// bigint => value which is greater than 2^53 e.g. stock trading, stock market, reddit, fackbook
// string => '' or "" (preferred)
// boolean => true/false 

// null => standalone value or a representation of emtpy value 
// undefined => a varible is declared only but its value is not defined yet

// symbol => for uniqueness, used in react a lot, e.g. in figma tools to find individual components

// object => store value in key-value pair


console.log(typeof "");         //string
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
