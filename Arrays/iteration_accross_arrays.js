var array = [2, 3, 4, 5, 6, 7, 8];

function print(element) {
    console.log(element);
}

// basic method

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// forEach method in JS

array.forEach(print);


// example-1

var sum = 0;
var arr = [1, 2, 3];
arr.forEach(getSum);
console.log(sum);

function getSum(ele) {
    sum += ele;
}


// example-2

/* 
Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.
(where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).
If the number is less than 1 or greater than 7, the function should return null.
Note: Store the days of the week in the array.
*/

var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function returnDay(x) {
    return (x < 1) || (x > 7) ? null : weekDay[x];
}

console.log(returnDay(3));