export class Button {
    x;
    y;
    width;
    height;
    text;
    onClick;
    constructor(x, y, width, height, text, onClick) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.onClick = onClick;
    }
    contains(x, y) {
        return (x >= this.x &&
            x < this.x + this.width &&
            y >= this.y &&
            y < this.y + this.height);
    }
    click() {
        this.onClick();
    }
}
//# sourceMappingURL=Button.js.map