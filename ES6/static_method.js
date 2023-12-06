// static method and static properties - can only be invoke through the class 
// Here is an example
// Static methods can only use static properties and methods.
// Subclass can access both static and non-static properties of the class.

class Vehicle {
    // static property
    static vName = 'static name';
    //properties
    name;
    color;
    wheels;
    //constructor
    constructor(name, color, wheels) {
            this.name = name;
            this.color = color;
            this.wheels = wheels;
        }
        //methods
    getDetails() {
        console.log(`The ${this.name} is ${this.color} in color.\nIt has ${this.wheels} wheels.`);
    }

    // static method
    static showMsg() {
        console.log(`This is the static method`);
    }
};

var car = new Vehicle("Audi", "black", 4);
car.getDetails();
// car.showMsg(); // cannot be invoked
Vehicle.showMsg(); // can be invoked only through a class
console.log(Vehicle.vName);

console.log(car);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// example

class MyClass {
    static myStaticProperty = 'example';

    static myStaticMethod() {
        console.log(this.myStaticProperty);
    }
}

MyClass.myStaticMethod();