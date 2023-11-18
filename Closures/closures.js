// Closures

/*
Closures are a fundamental and powerful concept in JavaScript. A closure is created when a function is defined within another function, allowing the inner function to access the outer function's variables and parameters even after the outer function has finished executing. This creates a sort of "enclosed" environment, hence the term closure.*/

function outerFunction() {
    var outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var closure = outerFunction();
closure(); // This will log: "I am from the outer function"

/*In this example, innerFunction is defined inside outerFunction. When outerFunction is called, it returns innerFunction. The important part is that innerFunction maintains access to the outerVariable, even though outerFunction has already finished executing. This is a closure.

Key points about closures in JavaScript:

Access to Outer Scope:

The inner function has access to the variables and parameters of the outer function.
Preservation of Scope Chain:

Closures "remember" the scope chain in which they were created, even if they are executed outside that scope.
Data Encapsulation:

Closures can be used to create private variables and methods, as the inner function has access to the outer function's variables but is not directly accessible from the outside.
Memory Management:

Closures may lead to the retention of memory, especially if the inner function is a callback that persists longer than the outer function's execution.*/