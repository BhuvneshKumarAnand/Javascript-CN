// Promise in JS


// Resolve state
var promise = new Promise((resolve, reject) => {
    // Wait for 1 sec
    setTimeout(() => {
        // promise is resolved
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log("Resolved");
});

// Rejected
var promise2 = new Promise((resolve, reject) => {
    // Wait for 1 sec
    setTimeout(() => {
        // promise is rejected
        reject();
    }, 1000);
});

promise2.catch(() => {
    console.log("Rejected");
});


// create a promise to verify whether user has logged in or not

var userLoggedIn = false;

var user = new Promise((resolve, reject) => {
    // Wait for a minute
    setTimeout(() => {
        if (userLoggedIn) {
            resolve();
        } else {
            reject();
        }
    }, 1000)
});

user
    .then(() => {
        console.log("User has logged In");
    })
    .catch(() => {
        console.log("User hasn't Logged In yet");
    })