// Currying in JS

// Simple Function

function add1(a, b, c) {
    return a + b + c;
};
console.log(add1(1, 2, 4));

// Currying Function

function add2(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
};
console.log(add2(1)(2)(3));