// Classes in JS

class Vehicle {
    //properties
    name;
    color;
    wheels;
    // private property
    // #regNumber;
    //constructor(Optional)
    constructor(name, color, wheels) {
            this.name = name;
            this.color = color;
            this.wheels = wheels;
            // this.#regNumber = number;
        }
        //methods
    getDetails() {
        console.log(`the ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.`);
    }
};



/*
class car {
    constructor(name, color, wheels, brand, purpose) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.brand = brand;
        this.purpose = purpose;
    }
    getDetails() {
        console.log(`the ${this.name} is ${this.color} in color.
  It has ${this.wheels} wheels.
  Brand is ${this.brand}.
  Purpose is ${this.purpose}`);
    }
}
*/

class Car extends Vehicle {
    constructor(color, brand, purpose) {
        super('car', color, 4);
        this.brand = brand;
        this.purpose = purpose;
    }
};

const car1 = new Car('red', 'audi', 'Luxury');
console.log(car1);
car1.getDetails();
console.log(car1.__proto__);