export class Renderer {

    private ctx: CanvasRenderingContext2D;


    constructor(
        private canvas: HTMLCanvasElement
    ) {

        const context = canvas.getContext("2d");

        if (!context) {
            throw new Error("Could not get canvas context");
        }

        this.ctx = context;

    }


    clear() {
      const c = this.ctx;
      c.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.font = "15px GameFont";
      c.textAlign = "left";
      c.textBaseline = "top";
    }


    draw() {
      const c = this.ctx;

      c.fillStyle = "rgb(119, 119, 17)";
      c.fillRect(0, 0, this.canvas.width, this.canvas.height);

      c.fillStyle = "#028";
      c.fillRect(200, 0 , this.canvas.width - 200, this.canvas.height);

      c.fillStyle = "rgb(110, 74, 96)";
      c.fillRect(204, 4, this.canvas.width - 208, this.canvas.height - 8);

      c.fillStyle = "white";
      c.fillText("UI", 5, 5);
      c.fillText("Border", 205, 5);
      c.fillText("Map", 225, 25);
    }

}