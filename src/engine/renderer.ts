import * as cfg from "../config/GameConfig.js";

export class Renderer {
  private context: CanvasRenderingContext2D;

  constructor(private canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Could not get canvas context");
    this.context = context;
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {

  }

  drawGridlines() {
    const c = this.context;
    c.strokeStyle = "#FFF";

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

  drawImage(image: HTMLImageElement, x: number, y: number) {
    this.context.drawImage(image, x, y);
  }

  drawText(text: string, x: number, y: number) {
    const c = this.context;
    c.font = "24px Arial";
    c.fillStyle = "#FFF";
    c.fillText(text, x, y);
  }
}

