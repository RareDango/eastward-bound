import * as cfg from "../config/GameConfig.js";
import { Renderer } from "./Renderer.js";
import { Input } from "./Input.js";
export class Game {
    renderer;
    input;
    dirtyRender = true;
    constructor() {
        const canvas = document.getElementById("game");
        this.renderer = new Renderer(canvas);
        this.input = new Input(canvas, cfg.SCREEN.width, cfg.SCREEN.height);
    }
    start() {
        requestAnimationFrame(this.gameLoop);
    }
    gameLoop = () => {
        this.update();
        if (this.dirtyRender) {
            this.render();
        }
        requestAnimationFrame(this.gameLoop);
    };
    update() {
        // Game logic goes here
    }
    render() {
        this.renderer.clear();
        this.renderer.draw();
        this.dirtyRender = false;
    }
}
//# sourceMappingURL=Game.js.map