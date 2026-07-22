export declare class Button {
    x: number;
    y: number;
    width: number;
    height: number;
    text: string;
    private onClick;
    constructor(x: number, y: number, width: number, height: number, text: string, onClick: () => void);
    contains(x: number, y: number): boolean;
    click(): void;
}
//# sourceMappingURL=Button.d.ts.map