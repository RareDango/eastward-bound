import * as cfg from "../config/GameConfig.js";
import { Renderer } from "./Renderer.js";
import { Input } from "./Input.js";
export class Game {
    renderer;
    input;
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
        this.render();
        requestAnimationFrame(this.gameLoop);
    };
    update() {
        // Game logic goes here
    }
    render() {
        this.renderer.clear();
        this.renderer.draw();
    }
}
//# sourceMappingURL=Game.js.map