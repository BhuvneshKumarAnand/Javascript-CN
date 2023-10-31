// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Splice in Javascript
/*
1. Start Index
2. Deletion Count
3. Elements to be inserted
*/

function print(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

var arr = [2, 3, 4, 5, 6];

arr.splice(1); //delete all the elements after index 0

print(arr);