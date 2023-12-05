// Higher Order Function - accepts the function as an argument or function returning a function

const arr = [1, 2, 2, 3, 4, 54, 65, 76, 8, 79, 8, 99, 57, 64];
/*
function square(arr) {
    const temp = [];
    for (let num of arr) {
        temp.push(num * num);
    }
    return temp;
}

function cubic(arr) {
    const temp = [];
    for (let num of arr) {
        temp.push(num * num * num);
    }
    return temp;
}
var newSquareArr = square(arr);
console.log(newSquareArr);
console.log(cubic(arr));*/


// Below is the Higher Order Function

function operations(arr, fn) {
    const temp = [];
    for (let num of arr) {
        temp.push(fn(num));
    }
    return temp;
};

function square(num) {
    return num * num;
};

function cubic(num) {
    return num * num * num;
};

console.log(operations(arr, square));
console.log(operations(arr, cubic));