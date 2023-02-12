export default class Point {
    x = 0;
    y = 0;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    clone() {
        return new this.constructor(this.x, this.y);
    }
    rotated(angle, pivot = new Point(0, 0)) {
        var result = this.clone().rotate(angle, pivot);
    }
    rotate(angle, pivot = undefined) {
        if (pivot === this) return this;
        if (pivot) this.subtract(pivot);
        [this.x, this.y] = [this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle)];
        if (pivot) this.add(pivot);
        return this;
    }
    mirror_h() {
        this.x = -this.x;
        return this;
    }
    mirror_v() {
        this.y = -this.y;
        return this;
    }
    reverse() {
        return this.clone().reverse();
    }
    reversed() {
        [this.x, this.y] = [-this.x, -this.y];
        return this;
    }
    subtract(pt) {
        this.x -= pt.x;
        this.y -= pt.y;
        if (arguments.length > 1) return this.subtract(...[...arguments].slice(1));
        return this;
    }
    difference(pt) {
        return this.clone().subtract(pt);
    }
    add(pt) {
        this.x += pt.x;
        this.y += pt.y;
        if (arguments.length > 1) return this.add(...[...arguments].slice(1));
        return this;
    }
    sum(pt) {
        return this.clone().add(pt);
    }
    svg() {
        return `${this.x.toFixed(2)},${this.y.toFixed(2)}`;
    }
}