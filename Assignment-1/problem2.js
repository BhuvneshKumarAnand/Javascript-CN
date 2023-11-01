// function duplicate(arr) {
//     // Write Logic here
//     var temp = new Array(2 * arr.length);
//     for (let i = 0; i < 2 * arr.length; i++) {
//         if (arr[i] == undefined) {

//         }
//         temp[i] = arr[i];
//     }
//     return temp;
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// concat function

function duplicate(arr) {
    // Write Logic here
    return arr.concat(arr);
}

function print(element) {
    console.log(element);
}

var arr = [1, 2, 3, 4, 5];

var temp = duplicate(arr);

temp.forEach(print);