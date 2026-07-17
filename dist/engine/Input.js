export class Input {
    canvas;
    gameWidth;
    gameHeight;
    mouseX = 0;
    mouseY = 0;
    constructor(canvas, gameWidth, gameHeight) {
        this.canvas = canvas;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        console.log("Input initialized");
        this.canvas.addEventListener("mousemove", this.handleMouseMove);
        this.canvas.addEventListener("click", this.handleClick);
    }
    handleMouseMove = (event) => {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.gameWidth / rect.width;
        const scaleY = this.gameHeight / rect.height;
        this.mouseX = Math.floor((event.clientX - rect.left) * scaleX);
        this.mouseY = Math.floor((event.clientY - rect.top) * scaleY);
    };
    handleClick = () => {
        console.log("Clicked:", this.mouseX, this.mouseY);
    };
}
//# sourceMappingURL=Input.js.map