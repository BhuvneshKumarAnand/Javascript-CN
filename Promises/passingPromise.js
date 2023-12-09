// create a promise function to verify whether user has logged in or not

var userLoggedIn = false;

function promiseLoggedIn() {
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
    return user;
}

promiseLoggedIn()
    .then(() => {
        console.log("Logged In");
    })
    .catch(() => {
        console.log("Not Logged In");
    })