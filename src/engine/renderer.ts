import * as cfg from "../config/GameConfig.js";
export class Renderer {

    private context: CanvasRenderingContext2D;

    private frames = 0;

    constructor(
        private canvas: HTMLCanvasElement
    ) {

        const context = canvas.getContext("2d");

        if (!context) {
            throw new Error("Could not get canvas context");
        }

        this.context = context;

    }


    clear() {
      const c = this.context;
      c.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.context.font = "15px GameFont";
      c.textAlign = "left";
      c.textBaseline = "top";
    }


    draw() {
      const c = this.context;

      c.fillStyle = "rgb(119, 119, 17)";
      c.fillRect(0, 0, this.canvas.width, this.canvas.height);

      c.fillStyle = "#028";
      c.fillRect(cfg.SCREEN.uiWidth, 0, this.canvas.width - cfg.SCREEN.uiWidth, this.canvas.height);

      c.fillStyle = "rgb(110, 74, 96)";
      c.fillRect(cfg.SCREEN.uiWidth + cfg.BATTLE.borderSize, cfg.BATTLE.borderSize,
        cfg.SCREEN.mapWidth - cfg.BATTLE.borderSize * 2, this.canvas.height - cfg.BATTLE.borderSize * 2);

      c.fillStyle = "white";
      c.fillText("UI width:" + cfg.SCREEN.uiWidth, 5, 5);

      this.frames += 1;
      c.fillText("Frames drawn: " + this.frames, 5, 25);

      this.drawGridlines();
    }

    drawGridlines() {
      const c = this.context;
      c.strokeStyle = "#000";

      const xOffset = cfg.SCREEN.uiWidth + cfg.BATTLE.borderSize;
      const yOffset = cfg.BATTLE.borderSize;
      
      for (let x = 0; x <= cfg.SCREEN.mapWidth; x += 46) {
        c.moveTo(x + xOffset, yOffset);
        c.lineTo(x + xOffset, cfg.SCREEN.height - yOffset);
        c.stroke();
      }
      for (let y = 0; y <= cfg.SCREEN.height; y += 46) {
        c.moveTo(xOffset, y + yOffset);
        c.lineTo(cfg.SCREEN.width - 8, y + yOffset);
        c.stroke();
      }
    }
}