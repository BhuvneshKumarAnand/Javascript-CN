// Filter Function

const arr = [1, -2, -4, 5, -6, 7, -88, 9];

// Filter poostive elements from the array

const noNegative = arr.filter((num) => {
    return num > 0;
})

const negative = arr.filter((num) => {
    return num < 0;
})
console.log(`only positive elements are ${noNegative}`);
console.log(`only negative elements are ${negative}`);