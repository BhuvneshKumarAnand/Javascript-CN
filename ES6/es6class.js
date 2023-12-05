// ES6 class - major update in JS in 2015

// constructor function

function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    this.getDetails = function() {
        console.log(`the ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels`);
    };
};

const car = new Vehicle('car', 'blue', 4);
car.getDetails();


// Classes in JS

class VehicleCl {
    //properties
    name;
    color;
    wheels;
    //constructor(Optional)
    constructor(name, color, wheels) {
            this.name = name;
            this.color = color;
            this.wheels = wheels;
        }
        //methods
    getDetails() {
        console.log(`the ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels`);
    }
};

const bike = new VehicleCl('bike', 'black', 2);
console.log(bike);

bike.getDetails();

// class expression

// const Vehicle=class{

// }

// - classes are always in strict mode
// - classes are not hoisted