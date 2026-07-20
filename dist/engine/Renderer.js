import * as cfg from "../config/GameConfig.js";
export class Renderer {
    canvas;
    context;
    font;
    constructor(canvas, font) {
        this.canvas = canvas;
        const context = canvas.getContext("2d");
        if (!context)
            throw new Error("Could not get canvas context");
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
        const t = text.toUpperCase();
        let scale = 3;
        if (size === "tiny")
            scale = 1;
        if (size === "small")
            scale = 2;
        if (size === "big")
            scale = 4;
        if (size === "huge")
            scale = 5;
        for (const char of t) {
            this.drawChar(char, x, y, scale);
            x += 6 * scale;
        }
    }
    drawChar(char, x, y, scale) {
        console.log(char);
        const unicode = char.codePointAt(0);
        console.log(unicode);
        if (!unicode)
            throw console.error("Unicode character undefined?");
        const index = unicode - 32;
        if (index < 0 || index > 99)
            throw console.error("Character out of range.");
        let sourceX = index * 5;
        let sourceY = 0;
        while (sourceX >= 50) {
            sourceX -= 50;
            sourceY += 10;
        }
        this.context.drawImage(this.font, sourceX, sourceY, 5, 10, x, y, 5 * scale, 10 * scale);
    }
}
//# sourceMappingURL=Renderer.js.map