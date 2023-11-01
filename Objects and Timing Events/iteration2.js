var student = {
    Name: "Bharat",
    RollNo: 17,
    marks: 90,
    2: "two"
};

// using for loop for iteration. It gives the name of keys

for (var prop in student) {
    console.log(prop);
}

// using for loop for iteration. It gives of name and value of keys

for (var prop in student) {
    console.log(prop, student[prop]);
}

//using Object.keys function. It gives the name of keys

console.log(Object.keys(student));

//using Object.getOwnPropertyNames function. It gives the name of keys


console.log(Object.getOwnPropertyNames(student));