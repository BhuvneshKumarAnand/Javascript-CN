// Create a deep copy of an array

var arr1 = [1, 2, 4, 5, 6];

//method - 1

// var arr2 = {...arr1 }; //arr2 is an object not the array
var arr2 = [...arr1] //now arr2 is an Array

arr2.pop();
arr2.push(20);
console.log(arr2);
console.log(arr1);

// Method - 2

var arr3 = arr1.map(el => el);

console.log(typeof arr3);

console.log(arr3);