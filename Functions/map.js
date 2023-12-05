//  Map in JS

const arr = [21, 32, 2, 14, 3, 5, 24, 25, 7, 8, 9];

// Syntax
// arr.map(function(currentElement, currentIndex, Array){//function body}) 

/*const squareArray = arr.map(function(currentElement) {
    return currentElement * currentElement
});*/

// Arrow Function in map

const squareArray = arr.map(
    (num) => num * num // Arrow Function
);

console.log(squareArray);