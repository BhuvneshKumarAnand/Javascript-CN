// Objects are stored in Heap Memory
// so if you change the value of object then it will reflect in whole it is referering]

//example

var obj1 = {
    p1: "abc"
};

var obj2 = obj1;

console.log(obj1); //now the both objects have the same reference
console.log(obj2); //now the both objects have the same reference

obj2.p2 = 9;


console.log(obj1); //After the change in object2
console.log(obj2); //After the change in object2

console.log(obj1 == obj2);
console.log(obj1 === obj2);

obj2 = { p1: "abc", p2: 9 };


console.log(obj1 == obj2);
console.log(obj1 === obj2);