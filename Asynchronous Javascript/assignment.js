// Q1 What will be the result of the following code?

/*
const promise1 = new Promise((resolve, reject) => { setTimeout(() => { resolve('a') }) })

const promise2 = new Promise((resolve, reject) => { resolve('b') })

const promise3 = new Promise((resolve, reject) => { setTimeout(() => { resolve('c') }, 10) })

Promise.all([promise1, promise2, promise3]).then((msg) => { console.log(msg) })
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q2 What will be logged in the output?
/*
setTimeout(() => {
    console.log('a')
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('b')
    })
})
*/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Q3 What will happen when the following code runs?
/*
async function x() {
    try {
        await Promise.reject("Rejected!!")
    } catch (e) {
        console.log(e)
    }
}

x()
    .catch((msg) => {
        console.log(msg)
    })
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// What will be the output of the following code?
/*
x((a, b, c) => {
    return a + b + c
}, 2, 3, 6)

function x(callback, a, b, c) {
    let str = ""
    setTimeout(() => {
        str += "x"
    });

    str += callback(a, b, c)
    console.log(str)
}*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// What will happen if the following code runs?
/*
function x() {
    Promise.reject('x')
    return Promise.resolve('y')
}

async function log() {
    const val = await x()
    console.log(val)
}

log()*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// What will get logged in the console?
/*
const promise = new Promise((resolve, reject) => {
    resolve('a')
})

setTimeout(() => {
    console.log('b')
})

promise.then((msg) => {
    console.log(msg)
})
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write the output of the following code.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a')
    })
})

const promise2 = new Promise((resolve, reject) => {
    resolve('b')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('c')
    }, 10)
})

Promise.race([promise1, promise2, promise3])
    .then((msg) => {
        console.log(msg)
    })