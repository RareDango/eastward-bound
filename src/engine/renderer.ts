import * as cfg from "../config/GameConfig.js";

export class Renderer {
  private context: CanvasRenderingContext2D;
  private font: HTMLImageElement;

  constructor(private canvas: HTMLCanvasElement, font: HTMLImageElement) {
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Could not get canvas context");
    this.context = context;
    this.context.imageSmoothingEnabled = false;

    this.font = font;
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {

  }

  drawGridlines() {
    const c = this.context;
    c.strokeStyle = "#FFF";
    c.lineWidth = 2;

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

  drawRect(x: number, y: number, width: number, height: number, color: string = "#FFF") {
    const c = this.context;
    c.fillStyle = color;
    c.fillRect(x, y, width, height)
  }

  strokeRect(x: number, y: number, width: number, height: number, lineWidth: number = 1, color: string = "#FFF") {
    const c = this.context;
    c.strokeStyle = color;
    c.lineWidth = lineWidth;
    c.strokeRect(x+lineWidth/2, y+lineWidth/2, width-lineWidth, height-lineWidth)
  }

  drawImage(image: HTMLImageElement, x: number, y: number) {
    this.context.drawImage(image, x, y);
  }

  drawText(text: string, x: number, y: number, scale = 2) {
    const t = text.toUpperCase();

    for(const char of t) {
      this.drawChar(char, x, y, scale)
      x += 6 * scale;
    }
  }

  private drawChar(char: string, x: number, y: number, scale: number) {
    const unicode = char.codePointAt(0);
    if(!unicode) throw console.error("Unicode character undefined?");
    const index = unicode - 32;
    if(index < 0 || index > 99) throw console.error("Character out of range.");

    let sourceX = index * 5;
    let sourceY = 0;
    while (sourceX >= 50) {
      sourceX -= 50;
      sourceY += 10;
    }

    this.context.drawImage(this.font, sourceX, sourceY, 5, 10, x, y, 5 * scale, 10 * scale);
  }
}

