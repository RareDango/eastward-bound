import * as cfg from "../config/GameConfig.js";
export class Renderer {
    canvas;
    context;
    constructor(canvas) {
        this.canvas = canvas;
        const context = canvas.getContext("2d");
        if (!context)
            throw new Error("Could not get canvas context");
        this.context = context;
        this.context.textAlign = "left";
        this.context.textBaseline = "top";
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
    drawImage(image, x, y) {
        this.context.drawImage(image, x, y);
    }
    drawText(text, x, y, size = "mid") {
        const c = this.context;
        c.font = "16px Arial";
        if (size === "big")
            c.font = "32px Arial";
        if (size === "small")
            c.font = "12px Arial";
        if (size === "tiny")
            c.font = "8px Arial";
        c.fillStyle = "#000";
        c.fillText(text, x, y);
    }
}
//# sourceMappingURL=Renderer.js.map