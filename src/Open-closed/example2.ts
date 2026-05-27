class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(5, 10);

// console.log(circle.area());
// console.log(rectangle.area());
