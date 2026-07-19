export declare class Renderer {
    private canvas;
    private context;
    constructor(canvas: HTMLCanvasElement);
    clear(): void;
    draw(): void;
    drawGridlines(): void;
    drawImage(image: HTMLImageElement, x: number, y: number): void;
    drawText(text: string, x: number, y: number): void;
}
//# sourceMappingURL=Renderer.d.ts.map