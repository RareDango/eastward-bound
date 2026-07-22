import { Renderer } from "../engine/Renderer.js";
var State;
(function (State) {
    State[State["Main"] = 0] = "Main";
    State[State["Play"] = 1] = "Play";
    State[State["Options"] = 2] = "Options";
    State[State["Other"] = 3] = "Other";
})(State || (State = {}));
export class MainMenuScene {
    backgroundImage;
    state;
    constructor(game) {
        this.backgroundImage = game.assets.getImage("battleBg");
        this.state = State.Main;
    }
    update() {
    }
    render(r) {
        r.drawImage(this.backgroundImage, 0, 0);
        //r.drawRect(300, 8, 10*46, 8*46, "#C5B194");
        r.drawText("Eastward", 20, 10, 5);
        r.drawText("bound", 20, 60, 5);
        r.strokeRect(10, 10, 255, 105, 5, "#000");
        r.drawRect(20, 130, 160, 40, "#8177bd");
        r.strokeRect(20, 130, 160, 40, 5, "#342d58");
        r.drawText("button time!", 30, 140);
        //r.drawGridlines();
    }
    onEnter() {
        console.log("Entered Main Menu");
    }
    onPointerDown(x, y) {
        return;
    }
}
//# sourceMappingURL=MainMenuScene.js.map