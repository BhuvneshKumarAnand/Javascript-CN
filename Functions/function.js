// function multiply(a, b) {
//     return a * b;
// };


// console.log(multiply(a, b));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var a = 10;

function test() {
    var a = 20;
}

test();
console.log(a);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Function Declaration 

function Multiply(a, b) {
    return a * b;
}

let c = Multiply(5, 6);
console.log(c);


function fact(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}

console.log(fact(5));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Function Expression 
// it is most commonly used in javascript

// syntax var v=function func_name(){//function body };

var factorial = function fact(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
};

console.log(factorial);
console.log(factorial(6));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Hoisting in function 

console.log(sum); //undefined due to Hoisting 
console.log(sum(4, 5)); //sum is not a function here

var sum = function(a, b) {
    return a + b;
};