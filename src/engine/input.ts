export class Input {

    mouseX = 0;
    mouseY = 0;

    constructor(
        private canvas: HTMLCanvasElement,
        private gameWidth: number,
        private gameHeight: number
    ) {
        console.log("Input initialized");
        this.canvas.addEventListener(
            "mousemove",
            this.handleMouseMove
        );
        this.canvas.addEventListener(
            "click",
            this.handleClick
        );
    }


    private handleMouseMove = (event: MouseEvent) => {
        const rect = this.canvas.getBoundingClientRect();

        const scaleX = this.gameWidth / rect.width;
        const scaleY = this.gameHeight / rect.height;


        this.mouseX = Math.floor((event.clientX - rect.left) * scaleX);
        this.mouseY = Math.floor((event.clientY - rect.top) * scaleY);

    };

    private handleClick = () => {
    console.log(
        "Clicked:",
        this.mouseX,
        this.mouseY
    );

};
    
}