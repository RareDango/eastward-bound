export declare class Renderer {
    private canvas;
    private context;
    private font;
    constructor(canvas: HTMLCanvasElement, font: HTMLImageElement);
    clear(): void;
    draw(): void;
    drawGridlines(): void;
    drawImage(image: HTMLImageElement, x: number, y: number): void;
    drawText(text: string, x: number, y: number, size?: string): void;
    private drawChar;
}
//# sourceMappingURL=Renderer.d.ts.map