// Async Await function

// Using Promise function

// Method 1

let promise = new Promise(function(resolve, reject) {
    resolve('Resolved');
});

promise.then((data) => { console.log(data); });

// Method 2

Promise.resolve('Resolved').then(data => { console.log(data); });

async function asyncTask() {
    return "Resolved";
};

asyncTask().then((data) => { console.log(data); });