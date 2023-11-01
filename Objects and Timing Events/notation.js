// Square bracket notation in JS

var student = {
    Name: "Bharat",
    RollNo: 17,
    marks: 90,
    2: "two"
};

console.log(student["Name"]);
console.log(student["2"]); //can be accessed due to square bracket notation
// console.log(student .2); //error


// Delete property

delete student.marks;

console.log(student);

delete student["2"];
console.log(student);