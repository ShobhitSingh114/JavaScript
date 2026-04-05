/*
Objects : Data will be stored in key-value pair
    * Inko declare kr ne k 2 ways hai 
        1. literals : isse singleton nhi banta hai 
            const myObj = {...}

        2. constructors : when we make an object using cons. then it will become a singleton
            ex: Object.create
*/

const mySym = Symbol("key1");

// Object literals
const JsUser = {
    name : "Shobhit",
    "full name" : "Shobhit Singh",
    age : 19,
    location : "Pune",
    email : "shobhit@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    // take a symbol and use it as a key in object 
    mySym2 : "string",  // this is not a symbol as key of object, it is just a key of string
    [mySym] : "real symbol"
}

// we have two ways to access arrays
// console.log(JsUser.email);

// why this another way ?
// bcz we cannot access full name with using '.' like above
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(typeof JsUser["mySym2"]); // string
// console.log(JsUser["mySym2"]);  // string

// console.log(typeof JsUser[mySym]);  // string : bcz here i am checking the type of value of key mySym
// console.log(JsUser[mySym]);


// Object.freeze(JsUser) // now our object won't change futher 
JsUser.email = "shobhit@apple.com";
// console.log(JsUser);


JsUser.greetings = function() {
    console.log("Hellow JS User");
}

JsUser.greetings2 = function() {
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greetings);  // by this we got function reference, here func. is not executed => [Function (anonymous)]
console.log(JsUser.greetings2()); // actually executes func
