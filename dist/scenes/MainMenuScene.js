import { Renderer } from "../engine/Renderer.js";
export class MainMenuScene {
    backgroundImage;
    constructor(game) {
        this.backgroundImage = game.assets.getImage("battleBg");
    }
    update() {
    }
    render(r) {
        r.drawImage(this.backgroundImage, 0, 0);
        r.drawGridlines();
        r.drawText("huge text", 10, 100, "huge");
        r.drawText("big text", 10, 70, "big");
        r.drawText("Medium text", 10, 40);
        r.drawText("Small text", 10, 20, "small");
        r.drawText("Tiny text! WHAT IS THIS!?", 10, 10, "tiny");
    }
    onEnter() {
        console.log("Entered Main Menu");
    }
}
//# sourceMappingURL=MainMenuScene.js.map