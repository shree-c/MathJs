class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle { }

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

// console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
// console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon
console.log(Object.getPrototypeOf(newInstance))