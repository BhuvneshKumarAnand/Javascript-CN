//Q1 // What is the output of following code?

var a = 10;

function test() {
    a = 20;
}

test();
console.log(a);

// O2 Consider the code given below - 
// What is the observation made?


var arr = [1, , 3, 4]; // The omitted value takes “undefined”

// Q3 What will the following function return?

function sqSum(a, b) {

    function square(x) {
        return x * x;
    }

    return square(a) + square(b);

}
console.log(sqSum(1, 2));


// Q4 What will the function 'test' return upon execution of these statements?

function test(a, b) {
    console.log(a + b);
}

test(2);

// Q5 What will be the output of following code snippet?

var a = 1;

function b() {
    a = 10;
    return;

    function a() {}
}

b();
console.log(a);

// Q6 What is the output of the following code?

array = [60, 70, 20, 10, 40, 90];

// const test = function(x) {
//     return x > 5;
// }

// if (!array.every(test)) {
//     console.log("statement 1");
// } else {
//     console.log("statement 2");
// }

// Q7 What will be the output of the following code:

function a() {
    function b() {
        return 3;
    }

    return b();

    function b() {
        return 8;
    }
}

// console.log(a());

// Q8 Consider the following code snippet:
//What should be the value of x so that the output is 5?


function f(a, b = 1) {
    console.log(a * b)
}
var x = // some hidden  value
    f(5, x)