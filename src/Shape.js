import Point from "./Point.js";

export default class Shape {
    segments = [];
    constructor (segments = []) {
        this.segments = segments;
    }
    svg() {
        var result = document.createElementNS("http://www.w3.org/2000/svg", "path");
        result.id="shape";
        var d = this.segments.map(segment => segment.svg(true));
        console.log(d);

        var s = this.segments[1].clone().reverse().rotate(Math.PI);
        d.push(s.svg());
        var s2= this.segments[0].clone().reverse().translate(new Point(100,0)).rotate(-Math.PI/3, s.end);
        d.push(s2.svg());
        result.setAttribute("d", `M${d.join(" ")}`);
        result.classList.add("shape");
        return result;
    }
}