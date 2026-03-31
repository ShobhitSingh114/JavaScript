/* 
Primitive : Call by value 
    meaning jab bhi hum inko kahi copy kr te hai tab original data k memory ka reference nhi diya jata instead 
    original data ko copy kr k diya jata hai so that original data change nhi hota 


7 Types : String, Number, Boolean, Symbol(to make unique), null(empty : ek dum khali), undefined, BigInt

JS is a dynamically typed language : we don't need to specifically define data type of variable
ex: let x = 10; ok
let y: number = 10 no

*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(typeof id);


console.log(id === anotherId);

const bigNumber = 987654321123456721345678n //with n this become bigInt
console.log(typeof bigNumber);



/*
Reference Type (Non Primitive)

***Master Objects and Browser Web events to Master JS***

Arrays, Objects, Functions

Return type of arrays, object are function and for function is Object function
*/

const heros = ["Peter", "Tony", "Steve", "Thor", "Banner", "Clint", "Natasha"];

console.log(heros);


let myObj = {
    name : "Shobhit",
    age : 19
}

/*
function funNAme(param) {} => usually
*/ 

let myFun = function(params) {
    console.log("My Function");
}


