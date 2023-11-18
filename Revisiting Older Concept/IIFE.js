// IIFE --> Immediately Invoked Function Expression

/*IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern that involves creating a function expression and immediately invoking it. The primary purpose of using an IIFE is to create a new scope for variables, preventing them from polluting the global scope.

The basic syntax of an IIFE looks like this:

javascript


Syntax:
(function() {
    // code inside the IIFE
})();*/


//example

(function() {
    var localVar = "I am a local variable.";
    console.log(localVar);
})();

/*In this example, localVar is scoped only within the IIFE, and it doesn't interfere with variables in the global scope. It's a useful technique for encapsulating code and avoiding variable name clashes.

IIFE is commonly used in scenarios where you want to create a private scope for variables, especially when dealing with multiple scripts to avoid accidental global variable conflicts.*/