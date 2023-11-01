/*
Shallow Copy: Affect the original

A shallow copy of an object or array creates a new object or array, but it only copies the references to the original values. In other words, if the original object contains references to other objects or arrays, a shallow copy will still point to those same referenced objects. Shallow copies are typically created using methods like the spread operator (...), Object.assign(), or Array.from() for arrays.

//Example

const originalArray = [1, 2, 3];
const shallowCopyArray = [...originalArray];

shallowCopyArray[0] = 4; // Modify the shallow copy

console.log(originalArray); // [1, 2, 3]
console.log(shallowCopyArray); // [4, 2, 3]
*/

/*
Deep Copy: Do not affect the original

A deep copy, on the other hand, creates an entirely new object or array with its own copies of all nested objects and arrays. Any changes made to the deep copy will not affect the original object or its nested elements. Deep copies can be created using recursion or external libraries like Lodash.

// Example

const originalObject = { a: 1, b: { c: 2 } };
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));

deepCopyObject.b.c = 3; // Modify the deep copy

console.log(originalObject); // { a: 1, b: { c: 2 } }
console.log(deepCopyObject); // { a: 1, b: { c: 3 } }
*/


// Create a Deep Copy 
//1st method
var Bharat = {
    name: "Bhuvnesh",
    age: 23,
    rollNo: 17
};

var Jatin = {...Bharat }; //Deep Copy of Bharat

Jatin.name = "Jaggu";

console.log(Bharat);
console.log(Jatin);

//2nd method

// using Object.assign({},Object_Name)

var Mohit = Object.assign({}, Jatin);
Mohit.name = "Monu";

console.log(Mohit);
console.log(Jatin);