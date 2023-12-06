// Inheritence in constructor function

function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
}
Vehicle.prototype.getVehDetails = function() {
    console.log(`
  Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`);
};

/*function Car(name, color, wheels, brand, seats) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.brand = brand;
    this.seats = seats;
}*/

function Car(color, brand, seats) {
    Vehicle.call(this, 'car', 'Blue', 4);
    this.brand = brand;
    this.seats = seats;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.getDetails = function() {
    console.log(`
  \nName: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}\nBrands: ${this.brand}\nSeats: ${this.seats}`);
};

const car1 = new Car('red', 'Audi', 5);
car1.getDetails();

console.log(car1.__proto__);
car1.getVehDetails();