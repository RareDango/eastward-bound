export declare class BitmapFont {
    private image;
    private glyphs;
    constructor(image: HTMLImageElement, data: string);
    private parse;
    draw(context: CanvasRenderingContext2D, text: string, x: number, y: number): void;
    measure(text: string): number;
}
//# sourceMappingURL=BitmapFont.d.ts.map