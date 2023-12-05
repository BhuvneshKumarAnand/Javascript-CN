// Classes in JS

class Vehicle {
    //properties
    name;
    color;
    wheels;
    // private property
    #
    regNumber;
    //constructor(Optional)
    constructor(name, color, wheels, number) {
            this.name = name;
            this.color = color;
            this.wheels = wheels;
            this.#regNumber = number;
        }
        //methods
    getDetails() {
        console.log(`the ${this.name} is ${this.color} in color.
      It has ${this.wheels} wheels.
      Registration number is ${this.#regNumber}`);
    }
};


const car = new Vehicle('car', 'black', 4, 12345);
car.getDetails();