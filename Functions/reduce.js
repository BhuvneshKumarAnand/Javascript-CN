// reduce

// reduce(redFn, Initial Value);

// function redFn(accumulator, currentValue, currentIndex, array)

const arr = [21, 32, 2, 14, 3, 5, 24, 25, 7, 8, 9];
/*
const sum = arr.reduce((total, num, index) => {
    console.log(total, index);
    return total + num;
}, 0);// if you give some initial value the index will start from 0
*/

const sum = arr.reduce((total, num, index) => {
    console.log(total, index);
    return total + num;
}); // if you give no initial value then the index will start from 1
console.log(sum);