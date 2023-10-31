// Arrays Declaration

// Arrays in javascript can be heterogenous means they can have different types of elements

// this will not give the index out of bound error

var arr = [1, 2, 3, 4];
var arr1 = new Array(1, 2, 3, 4, 5);
var arr2 = new Array(6);

console.log(arr[2]);
console.log(arr[4]); //undefined

arr[8] = 8;
console.log(arr[8]);
console.log(arr[7]); //undefined

console.log(arr.length); //9
console.log(arr1.length); //5
console.log(arr2.length); //6


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Arrays in javascript can be heterogenous means they can have different types of elements

// example

var arr3 = ["bharat", 17, true, 23.0];

function print() {
    for (let index = 0; index < arr3.length; index++) {
        console.log(arr3[index]);
    }
}

arr3.push(10); //push function --> push at the last+1 index

print();

arr3.pop(10); //pop function -->remove from last index

print();