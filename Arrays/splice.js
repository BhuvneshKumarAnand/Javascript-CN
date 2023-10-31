// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Splice in Javascript --> slices a given part of an array and returns that sliced part as a new array.
/*
1. Start Index
2. Deletion Count
3. Elements to be inserted
*/

function print(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

var arr = [2, 3, 4, 5, 6];

arr.splice(1); //delete all the elements after index 0

print(arr);

arr = [2, 3, 4, 5, 6];

arr.splice(1, 0, 10); // add 10 at index-1

print(arr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// example-1

var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];

fruits.splice(4, 1, 'Banana');

console.log(fruits); // ["Apple", "Orange", "Kiwi", "Strawberry", "Banana"]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// example-2

var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];

fruits.splice(1, 0, 'Banana');

console.log(fruits); // ["Apple", "Banana", "Orange", "Kiwi", "Strawberry"]