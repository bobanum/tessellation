import Triangle from "./Triangle.js";

export default class App {
    static main() {
        var app = document.getElementById("app");
        var svg = app.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
        svg.setAttribute("viewBox", "0 0 1000 1000");
        var shape = new Triangle();
        var width = shape.w;
        var height = shape.h;
        for (let j = 0; j < 10; j += 1) {
            for (let w = 0; w < 2; w += 1) {
                for (let i = 0; i < 10; i += 1) {
                    for (let v = 0; v < 3; v += 1) {
                        var use = svg.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "use"));
                        use.setAttribute("href", "#shape");
                        use.setAttribute("fill", "cyan");
                        use.setAttribute("transform", `translate(${width * (i * 3 + v - w * 1.5)},${height * (j * 2 + w)}) rotate(${120 * v}) translate(0, ${-shape.center.y})`);
                    }
                }
            }
        }
        var g = svg.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "g"));
        g.setAttribute("transform", "scale(3) translate(100,100)");
        g.appendChild(shape.svg());
    }
    static init() {
        window.addEventListener("load", e => {
            this.main();
        });
    }
}
App.init();