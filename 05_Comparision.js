// string to int comparision in JS 
// which is sort of confusing, so in typescript some rules are added and so things like this will not bt possible

console.log("2" > 1);   // true
console.log("02" > 1);  // true

console.log("-----------------------------------------");

// equality checking and comparision in in JS are two different things 

console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true

/*
Bcz equality check (==) and comparisons (> < >= <=) work differently
comparisons convert 'null' to a number, treating it as 0.
That is why 'null' >= 0 true while 'null' > 0 false
*/

console.log("-----------------------------------------");

// avoid these types of conversions
console.log(undefined == 0);    // false
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false

console.log("-----------------------------------------");
console.log("Strict Check (===)");

console.log("2" == 2);      // true
console.log("2" === 2);     // false

/* 
in strict checking data types are also checked weather data type are same or not 
*/




