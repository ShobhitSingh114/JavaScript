// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Zammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gamil.com",
    fullname : {
        userfullname : {
            firstname : "shobhit",
            lastname : "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// obj3 will have 2 objects obj1 and obj2 as key and their body as value
// const obj3 = {obj1, obj2}

// Object.assign(target, source,...source_n) => combine all source and put it in target object
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// spread operator 
    // analogy => take a glass and drop it us k baad glass tut jaega fir mummy maregi ahem...
        // likewise take obj1, obj2 and break them so we get all their values and pick them up and put in another object i.e. obj3
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gamil.com"
    },
    {
        id: 2,
        email: "h@gamil.com"
    },
    {
        id: 3,
        email: "h@gamil.com"
    }
]

users[1].email

console.log("Tinder User");
console.log(tinderUser);

console.log(Object.keys(tinderUser));   // gives array of the keys of tinderUser object
console.log(Object.values(tinderUser));   // gives array of the values of tinderUser object
console.log(Object.entries(tinderUser));    // gives an array of arrays consisting keys and value 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true

