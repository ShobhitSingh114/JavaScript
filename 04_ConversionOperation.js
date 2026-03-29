let score = "Shobhit"

console.log(typeof score);      // string
console.log(typeof (score));    // string

let valueInNumber = Number(score)   
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);         // NaN => Not A Number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

console.log("-----------------------------------------------------------------");


let isLoggedIn = "shobhit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "shobhit" = true

console.log("-----------------------------------------------------------------");

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

console.log("-----------------------------------------------------------------");

// ***************************** Operations *****************************
console.log("Operations");

console.log("-----------------------------------------------------------------");

let val = 3
let negativeVal = -val

//console.log(negativeVal); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2^3 => 8
// console.log(2/2); // gives quotient => 1
// console.log(2%2); // gives rem => 0

let str1 = "Show"
let str2 = " me"
let str3 = str1 + str2
// console.log(str3); // Show me

// console.log("1" + 2);       // 12 => string + number = string
// console.log(1 + "2");       // 12 => number + string = string
// console.log("1" + 2 + 2);   // 122 => {string + number} + number => string + number => string
// console.log(1 + 2 + "2");   // 32 => {number + number} + string => number + string => string

// console.log(+true);     // 1    => number + boolean => number
// console.log(+"");       // 0    => number + string
// console.log(+"asdf");   // NaN  

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // can be done like this but not recommended bcz it reduces readability 
