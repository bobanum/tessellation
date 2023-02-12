// import Point from "./Point.js";
export default class Segment {
    pts = [];
    constructor(pts = []) {
        this.pts = pts;
    }
    get start() {
        return this.pts[0];
    }
    get end() {
        return this.pts[this.pts.length - 1];
    }
    clone() {
        var result = new this.constructor(this.pts.map(pt=>pt.clone()));
        return result;
    }
    reverse() {
        this.pts.reverse();
        return this;
    }
    rotated(angle, pivot = this.pts[0]) {
        var result = this.clone().rotate(angle, pivot);
        return result;
    }
    rotate(angle, pivot = this.pts[0]) {
        this.pts.forEach(pt=>{
            pt.rotate(angle, pivot);
        });
        return this;
    }
    translate(point) {
        this.pts.forEach(pt=>{
            pt.add(point);
        });
        return this;        
    }
    mirror_h() {
        this.pts.forEach(pt=>{
            pt.mirror_h();
        });
        return this;
    }
    mirror_v() {
        this.pts.forEach(pt=>{
            pt.mirror_v();
        });
        return this;
    }
    svg(end = true) {
        var result = this.pts.slice(0,(end?undefined:-1)).map(pt => pt.svg()).join(" ");
        return result;
    }
}