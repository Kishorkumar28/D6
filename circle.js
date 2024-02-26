
class circle{
    constructor(radius=1.0,color="red")
        {
            this.radius=radius;
            this.color=color;
        }

get radius()
        {
            return this._radius
        }
set radius(value)
        {
            this._radius=value
        }
get color()
        {
            return this._color
        }
set color(value)
        {
            this._color=value
        }
toString()
        {
            return `Circle [radius={${this._radius}},Color={${this._color}}]`
        }
getArea()
        {
            return Math.PI*(Math.pow(this._radius,2))
        }
getcircumference()
        {
            return 2*Math.PI*this._radius
        }

}

const circle1=new circle(2.0,"Green")
console.log(circle1)
console.log(circle1.toString()); // Output: Circle[radius=5, color=blue]
console.log(circle1.getArea()); // Output: 78.53981633974483
console.log(circle1.getcircumference());