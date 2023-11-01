// Object inside an object is possible in JS

//Example

var student = {
    Name: "Bharat",
    RollNo: 17,
    marks: 90,
    2: "two",
    address: {
        city: "delhi",
        pincode: 110093
    }
};

console.log(student);

console.log(student.address.city);
console.log(student.address["pincode"]);