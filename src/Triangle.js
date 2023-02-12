import Shape from "./Shape.js";
import Point from "./Point.js";
import Segment from "./Segment.js";
export default class Triangle extends Shape {
    w = 100;
    constructor(w = 100) {
        var h = w * Math.sin(Math.PI / 3);
        var p1 = new Point(0, 0);
        var p1_5 = new Point(-w / 4, w / 8);
        var p2 = new Point(-w / 2, h);
        var p2_5 = new Point(-w / 4, .9 * h);
        var p3 = new Point(0, h);
        var segments = [
            new Segment([p1, p1_5, p2]),
            new Segment([p2, p2_5, p3]),
        ];
        super(segments);
        this.h = h;
        this.w = w;
        this.center = new Point(0, w * Math.sqrt(3) / 3);
        console.log(this.center);
    }
    svg() {
        var result = super.svg();
        result.classList.add("triangle");
        return result;
    }
}