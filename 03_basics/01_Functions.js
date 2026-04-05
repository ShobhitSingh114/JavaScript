function sayMyName() {
    console.log("S");
    console.log("h");
    console.log("o");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("t");    
}

// function reference
// sayMyName

// function execute
// sayMyName()


function addTwoNumbers(num1, num2) {
    return num1 + num2;
    // unreachable code
    console.log("This code is unreachable bcz of return");
}

const res = addTwoNumbers(3, 5)
// console.log("Result", res);


function loginUserMessage(username = "Sam") { // default parameter
    if(username === undefined) { // or if (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("shobhit"));
console.log(loginUserMessage());    // undefined just logged in 


// when you don't know how many parameters are required ex: shopping kart we don't know how many items 
// user is gonna select => by using "rest operator" -> ... 

// rest operator and spread operator are same but their naming changes as where they are used 

// rest operator bundles all the parameters 

function calculateCartPrice(val1, val2, ...num1) {
    // so val1 = 200, val2 = 300, num1 = all the remaining
    return num1;
}

// console.log(calculateCartPrice(200, 300, 500, 700));


const user = {
    username : "shobhit",
    price : 199
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);    
}

// handleObject(user);
handleObject({
    username : "sam",
    price : 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
