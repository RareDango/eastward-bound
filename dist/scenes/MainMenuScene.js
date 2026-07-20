import { Renderer } from "../engine/Renderer.js";
export class MainMenuScene {
    game;
    backgroundImage;
    constructor(game) {
        this.game = game;
        this.backgroundImage = game.assets.getImage("battleBg");
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