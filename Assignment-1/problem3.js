/*
Implement a function that returns an updated array with 1 left rotation on an array of integers
rotateLeft([1,2,3,4]) // returns [2,3,4,1]
*/

function rotateLeft(arr) {
    var temp = new Array(arr.length);
    temp[arr.length - 1] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        temp[i - 1] = arr[i];
    }
    return temp;
}

function print(element) {
    console.log(element);
}

var arr = [1, 2, 3, 4, 5];

var temp = rotateLeft(arr);

temp.forEach(print);