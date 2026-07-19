import { Renderer } from "../engine/Renderer.js";
export class MainMenuScene {
    game;
    backgroundImage = new Image();
    constructor(game) {
        this.game = game;
        this.backgroundImage.src = "assets/bg.png";
    }
    update() {
    }
    render(renderer) {
        renderer.drawImage(this.backgroundImage, 0, 0);
        renderer.drawGridlines();
        renderer.drawText("Eastward Bound!", 10, 100);
    }
    onEnter() {
        console.log("Entered Main Menu");
    }
}
//# sourceMappingURL=MainMenuScene.js.map