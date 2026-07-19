import * as cfg from "../config/GameConfig.js";
import { Renderer } from "./Renderer.js";
import { Input } from "./Input.js";
import { MainMenuScene } from "../scenes/MainMenuScene.js";
export class Game {
    renderer;
    input;
    currentScene;
    dirtyRender = true;
    constructor() {
        const canvas = document.getElementById("game");
        this.renderer = new Renderer(canvas);
        this.input = new Input(canvas, cfg.SCREEN.width, cfg.SCREEN.height);
        this.currentScene = new MainMenuScene(this);
    }
    start() {
        requestAnimationFrame(this.gameLoop);
    }
    gameLoop = () => {
        this.currentScene.update();
        this.currentScene.render(this.renderer);
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