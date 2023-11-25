// Callback is a function which can be passed as an argument to the another function

// Here is an example

function greet(name, callback) {
    console.log(`Hi ${name}`);
    callback();
};

function askQuestion() {
    console.log('How are you?');
};

greet('Bharat', askQuestion);


// Why do we require callbacks in JS?

//Callbacks in JavaScript are a mechanism to handle asynchronous operations. Asynchronous operations are tasks that may take some time to complete, such as reading a file, making a network request, or handling user input. In a synchronous program, tasks are executed one after the other, and the program waits for each task to finish before moving on to the next one. However, in an asynchronous environment like JavaScript, tasks can overlap, and the program doesn't wait for one task to finish before starting the next one.