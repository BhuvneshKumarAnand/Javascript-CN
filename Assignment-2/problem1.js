//What will be the output of the following code ?

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var myArr = array.filter(v => v % 3 === 0);
console.log(myArr);

//Output
//[3, 6, 9, 12, 15]

// problem-2

function change1(obj) {
    obj.name = "ninjas"
}

function change2(obj) {
    obj = { name: "changed" }
}

var obj = { name: "coding" }

change1(obj)
change2(obj)
console.log(obj.name)