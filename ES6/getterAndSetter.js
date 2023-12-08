class Circle {
    constructor(radius) {
            this.radius = radius;
        }
        // setters
    set Diameter(newDiameter) {
            if (newDiameter >= 0) {
                this.radius = newDiameter / 2;
            } else {
                console.log('Invalid Input');
            }
        }
        // getters
    get Diameter() {
        return 2 * this.radius;
    }

    // getDiameter() {
    //     console.log(2 * this.radius);
    // }
}

const circle = new Circle(5);
console.log(circle.radius);
// circle.getDiameter();
console.log(circle.Diameter);
circle.Diameter = 16;
console.log(circle.Diameter);
circle.Diameter = -1;
console.log(circle.Diameter);