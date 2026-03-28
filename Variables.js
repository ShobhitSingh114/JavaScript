/*
Varibales are used to store data in memory
*/

const accId = 1234567
let accEmail = "shobhit@gamil.com"
var accPass = "1234567890"
accCity = "Delhi" // hum aise bhi variable assign kr sakte hai but preffered nhi hai.
let accState; // variable initialized with undefined
// is case mai variable is there in memory but it is undefined  


// accId = 22345 // Erro : Assignment to constant variable.
console.log(accId);

accEmail = "mymail@gamil.com"
accPass = "0987654321"
accCity = "Pune"

// another way to print multiple variables with a single line
// gives output in a tabular structure 
console.table([accId, accEmail, accPass, accCity, accState])


/*
Story time : 

-> Initially JS k saath ek problem hua kr ta tha, (var)
    is ko ye nhi pta tha ki scope kya hai (scope == {...}), ye scope k base per kaam he nhi kr ti thi
    so if ek program mai "name" variable 10 baar use hua hai then wo same name variable 10 baar change ho jaega or uski 
    early values change ho jaegi. 

-> so us k baad "let" introduce hua and isse ye scope related issue resolve kr diya.
    {let name = ...}
    {let name = ...}
    to ye dono name block scoped hai so name ka initial value override nhi hoga
*/

/*
NOTE: 
Prefer not to use var 
bcz of issue in block scope and functional scope
*/
