export declare class Renderer {
    private canvas;
    private context;
    private font;
    constructor(canvas: HTMLCanvasElement, font: HTMLImageElement);
    clear(): void;
    draw(): void;
    drawGridlines(): void;
    drawRect(x: number, y: number, width: number, height: number, color?: string): void;
    strokeRect(x: number, y: number, width: number, height: number, lineWidth?: number, color?: string): void;
    drawImage(image: HTMLImageElement, x: number, y: number): void;
    drawText(text: string, x: number, y: number, scale?: number): void;
    private drawChar;
}
//# sourceMappingURL=Renderer.d.ts.map