// console.log('Hello');
// var helloButton = document.getElementById('btn');
// console.log(helloButton); //null
// helloButton.addEventListener('click', function() {
//     alert('Hello JavaScript!!!')
// });

function sayHello() {
    alert('Hello JavaScript!!!')
}

console.log('Hello');
var helloButton1 = document.getElementById('btn1');
console.log(helloButton1); //null
helloButton1.addEventListener('click', sayHello);