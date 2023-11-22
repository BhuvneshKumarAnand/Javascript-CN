// Promises are a way to handle asynchronous operations in JavaScript. They provide a cleaner and more structured way to work with asynchronous code compared to traditional callback functions. A promise represents the eventual completion or failure of an asynchronous operation and its resulting value.

// 3 stages of promises

/* 
1. Pending
2. fullfilled
3. Rejected
*/

// example


// 1. Pending State

/*
var promise = new Promise(() => {});

console.log(promise);
*/

// 2. Fullfilled state

/*
var promise = new Promise((resolve, reject) => {
    resolve("Hurray! Promise fullfilled");
});

console.log(promise);
*/


// 3. Rejected State

/*
var promise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
});

console.log(promise)
*/

// How to use promises


// .then example

/*
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ message: "Fullfilled state" })
    }, 3000);
});

promise.then((data) => { console.log(data); });
*/

// .catch

/*
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ message: 'Error' })
    }, 3000);
});

promise.catch((data) => { console.log(data); });
*/

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ message: 'Error' })
    }, 3000);

});

promise
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); })

// Another examples of accessing simultaneous 2 states

/*
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          reject({ message: 'Error' })
      }, 3000);
      setTimeout(() => {
          resolve({ message: 'Fullfilled' })
      }, 1000);
  });
  
  promise
      .then((data) => { console.log(data); })
      .catch((error) => { console.log(error); })

      */