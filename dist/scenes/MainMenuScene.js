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
        r.drawText("Name Goes Here!", 10, 10, "big");
        r.drawText("_______________", 10, 10, "big");
        r.drawText("Eastward Bound!", 10, 100);
        r.drawText("Small text here. HELLO HELLO!!!", 30, 45, "small");
        r.drawText("Tiny text! WHAT IS THIS!?", 20, 60, "tiny");
    }
    onEnter() {
        console.log("Entered Main Menu");
    }
}
//# sourceMappingURL=MainMenuScene.js.map