interface Configuration {
    radius?: number;
    color?: string;
}

class Circle {
    circleColor: string;
    circleRadius: number;

    constructor(obj: Configuration) {
        this.circleColor = obj.color;
        this.circleRadius = obj.radius;
    }
    getRadius(radius: number) {
        console.log(radius)
    }
    setRadius(radius: number) {
        console.log(radius);
    }
    getColor(color: String) {
        console.log(color)
    }
    setColor() {
        console.log(this.circleColor);
    }
    getArea(radius: number) {
        let area = Math.PI * radius;
        console.log(area);
    }
    getCircumference(radius: number) {
        let circum = 2 * Math.PI * radius;
        console.log(circum);
    }



}
let obj = {
    "color": 'red',
    "radius": 1.0
}

let circle = new Circle(obj);

circle.getRadius(2);
circle.getCircumference(3);
circle.getArea(4);
circle.getColor('green');
circle.setColor();