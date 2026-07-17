export class Renderer {
    canvas;
    ctx;
    constructor(canvas) {
        this.canvas = canvas;
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Could not get canvas context");
        }
        this.ctx = context;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = "15px GameFont";
    }
    draw() {
        const c = this.ctx;
        c.fillStyle = "black";
        c.fillRect(0, 0, this.canvas.width, this.canvas.height);
        c.fillStyle = "#028";
        c.fillRect(200, 0, this.canvas.width - 200, this.canvas.height);
        c.fillStyle = "rgb(110, 74, 96)";
        c.fillRect(220, 20, this.canvas.width - 240, this.canvas.height - 40);
        c.fillStyle = "white";
        c.textAlign = "left";
        c.textBaseline = "top";
        c.fillText("UI", 5, 5);
        c.fillText("Border", 205, 5);
        c.fillText("Map", 225, 25);
    }
}
//# sourceMappingURL=Renderer.js.map