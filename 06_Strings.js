const name = "Shobhit" // ye string bhi internally String obj ko he call kr rhi hai 
const repoCount = 50

// console.log(name + repoCount + " Value"); // not a good way to concatinate strings

// Better way is to use Backticks (``) we can use string interpolation (is mai hum banate hai placeholders and in k ander ho bhi 
// variables hai unko hum directly inject kr sakte hai)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const inGameName = new String("Killer-Strike") 
// String is an object not an array, 
// ex: 0: K, 1: S 
// here '0' is 'key' and 'K' is 'value'


console.log(inGameName[0]); // we can access an 'object' key like this

console.log(inGameName.__proto__); // {} => it contains all methods which strings have : check in browser

console.log(inGameName.length);

console.log(inGameName.charAt(1));

console.log(inGameName.indexOf("S"));

// starts from 0 and goes for next 6 characters 
console.log(inGameName.substring(0, 6)); // Killer
// -ve value cannot be used here

// start : length - 13 , end : 6 not included so 13-13=0 so Killer
console.log(inGameName.slice(-13, 6)); // Killer    
// -ve value can be used here 


const newString = "   Shobhit   ";
console.log(newString);
console.log(newString.trim()); // removes spaces from both sides of string


const url = "https://shobhit.com/shobhit%37singh"

console.log("Replace : "+url.replace("37", "3")); // replace 37 with 3
console.log(url.replace("377", "3")); // 377 is not present in string so result will be original string

console.log("Include : " + url.includes("shobhit")); // gives true or false


// Split the string based on the separator
console.log(inGameName.split("-")); // gives array of string => ['Killer', 'Strike']
console.log("Split : " + inGameName.split("-")); // gives String values => Split : Killer,Strike


