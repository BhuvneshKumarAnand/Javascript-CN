// Execution Context 

// 1. Global
// 2. Local - for functions

// Call stack - LIFO

// Scopes in JS 

// 1 Global
// 2 Functional (Local)
// 3 Block 

// example 

// var x = 10;

// function foo() {
//     console.log(x);
//     var x = 20;
// }
// foo();

// example 2

var x = 10;

function foo() {
    var x = 20;
    console.log(x);
}
foo();

// lexical environment - JavaScript lexical environment is a data structure with an identifier-variable mapping. Where identifier refers to the name of variables/functions, and variable is the reference to the actual object. It also holds a reference to a parent lexical environment.

// Execution Context is created for every JS program, which stays in the call stack. The lexical environment includes the identifier-value mapping for every function which is created inside the execution context.

var a = 10;
let a = 20;
console.log(a);