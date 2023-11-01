// setTimeout
// setInterval

let sec = 1;

function sayHello() {
    console.log('Hello');
}

function sayAfter() {
    console.log("after ", sec);
    sec++;
}


console.log(setTimeout(sayHello, 1000)); //sayHello will call after the timeout of 1 sec(Here, 1000=1 sec) //It will delay for 1 second

// console.log(setInterval(sayAfter, 10)); //it will call the fuction infinitely, very bad way of doing things

var id = setInterval(sayBefore, 10);

function sayBefore() {
    console.log("Before ", sec);
    sec++;
    if (sec == 10) {
        //stop
        clearInterval(id);
    }
}