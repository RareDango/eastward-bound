import * as cfg from "../config/GameConfig.js";
import { Renderer } from "./Renderer.js";
import { Input } from "./Input.js";
import { MainMenuScene } from "../scenes/MainMenuScene.js";
export class Game {
    renderer;
    input;
    currentScene;
    dirtyRender = false;
    assets;
    constructor(assets) {
        this.assets = assets;
        const canvas = document.getElementById("game");
        this.renderer = new Renderer(canvas);
        this.input = new Input(canvas, cfg.SCREEN.width, cfg.SCREEN.height);
        this.currentScene = new MainMenuScene(this);
        this.markDirty();
    }
    start() {
        requestAnimationFrame(this.gameLoop);
    }
    timeStart = performance.now();
    timePassed = 0;
    gameLoop = () => {
        this.currentScene.update();
        const now = performance.now();
        this.timePassed = now - this.timeStart;
        if (this.timePassed >= 1000 / cfg.GAME.fps) {
            this.timeStart += this.timePassed;
            if (this.dirtyRender) {
                this.renderer.clear();
                this.currentScene.render(this.renderer);
                this.dirtyRender = false;
            }
        }
        requestAnimationFrame(this.gameLoop);
    };
    changeScene(scene) {
        this.currentScene.onExit?.();
        this.currentScene = scene;
        this.currentScene.onEnter?.();
        this.markDirty();
    }
    markDirty() {
        this.dirtyRender = true;
    }
}
//# sourceMappingURL=Game.js.map