// Function returning functions

// example

function greet(message) {
    return function(wishes) {
        console.log(`${wishes}, ${message}`);
    }
};

// const greetings = greet();
// console.log(greetings);// [Function (anonymous)]

//method 1 of calling the returning function 
const greetings = greet('I hope you are doing well');
greetings('Hello');

// method 2 of calling the returning function 
greet('Welcome to the session.')('Hi');