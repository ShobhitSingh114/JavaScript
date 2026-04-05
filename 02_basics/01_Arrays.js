/* Arrays

- Arrays in JS are 
    - Resizable
    - can contain mix of different Data types
    - create shallow copies 
        - shallow copy : points to the same reference points / points to the original reference points
    - they have length and prototype inside prototype in browser
*/

const tempArr = [1, 2, 3, 4, 5, "Hellow", true] // still a valid array
console.log(tempArr);

const myArr = [1, 2, 3, 4, 5] 
console.log(myArr);

// Another way to declare array
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]);


// Array Methods

// Add elements in array
console.log("Orginal Array");
console.log(myArr);

myArr.push(6);
myArr.push(7);
console.log("Elemet 6 and 7 are added in array");
console.log(myArr);

myArr.pop(7);
console.log("Last Elemet is popped from array");
console.log(myArr);

// unshift : add element @ first index and shift all the elements to one index to right

// shift : remove first element 

console.log("Unshift 73");
myArr.unshift(73);
console.log(myArr);

console.log("Shift");
myArr.shift();
console.log(myArr);


console.log(myArr.includes(9)); // true or false
console.log(myArr.indexOf(19)); // gives index or -1


// join : adds all elements of an array but in string 

const newArr = myArr.join() 
console.log(myArr); 
console.log(newArr);
console.log(typeof newArr);



/* 
slice and splice

slice : 
    * doesn't change original array
    * second value excluded
    * ex: takes a slice of pizza but original whole pizze is there 

splice :
    * change original array 
    * second value included
    * ex: once a slice is taken from pizza then that slice is gone 
*/

console.log("A ", myArr);

const myNewArr1 = myArr.slice(1,3);

console.log("Sliced Array : ", myNewArr1);
console.log("B ", myArr);

const myNewArr2 = myArr.splice(1,3);
console.log("Spliced Array", myNewArr2);
console.log("C ", myArr);



