var Circle = /** @class */ (function () {
    function Circle(obj) {
        this.circleColor = obj.color;
        this.circleRadius = obj.radius;
    }
    Circle.prototype.getRadius = function (radius) {
        console.log(radius);
    };
    Circle.prototype.setRadius = function (radius) {
        console.log(radius);
    };
    Circle.prototype.getColor = function (color) {
        console.log(color);
    };
    Circle.prototype.setColor = function () {
        console.log(this.circleColor);
    };
    Circle.prototype.getArea = function (radius) {
        var area = Math.PI * radius;
        console.log(area);
    };
    Circle.prototype.getCircumference = function (radius) {
        var circum = 2 * Math.PI * radius;
        console.log(circum);
    };
    return Circle;
}());
var obj = {
    "color": 'red',
    "radius": 1.0
};
var circle = new Circle(obj);
circle.getRadius(2);
circle.getCircumference(3);
circle.getArea(4);
circle.getColor('green');
circle.setColor();
