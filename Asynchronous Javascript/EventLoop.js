// Event loop - It checks for the call stack and pushes callbacks from the callback queue


//The event loop constantly checks the call stack and the callback queue. If the call stack is empty, and there are callbacks in the queue, the event loop takes a callback from the queue and pushes it onto the call stack for execution.



// Example- Find the output

/*
console.log(1);
setTimeout(() => { console.log(2); }, 0);
console.log(3);
*/

// promises and event loops 

// promises were given priority over event loop as seen in below example

// settimeout callback will go to task queue or callback queue

// Micro task queue will go to micro task queue (This will be given priority)

// Example

setTimeout(() => { console.log(1); }, 0);

let promise = new Promise(function(resolve, reject) {
    resolve(2);
});

promise.then(function(data) {
    console.log(data);
});

console.log(3);