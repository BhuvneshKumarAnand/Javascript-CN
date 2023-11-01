// Arrays in JS also comes with the key value pairs like an object
// In case of an Array, keys are index value

var arr = [1, 23, 4, 5, 43, 6];

console.log(arr[0]);
console.log(arr);

var obj = {
    "0": 1,
    "1": 23,
    "2": 4,
    "3": 5,
    "4": 43,
    "5": 6
};

console.log(obj);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Add property to an Array

arr.prop = "abc";

console.log(arr);
console.log(arr.length); // It is still 6 (as maximum index number+1)

arr[10] = 10;

//Treaversing accross an Array

for (var i in arr) {
    console.log(arr[i]);
}

console.log(arr);
console.log(arr.length);