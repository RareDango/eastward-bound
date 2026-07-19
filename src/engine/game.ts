import * as cfg from "../config/GameConfig.js";
import { Renderer } from "./Renderer.js";
import { Input } from "./Input.js";

import { MainMenuScene } from "../scenes/MainMenuScene.js";
import type { Scene } from "./Scene.js";

export class Game {
    private renderer: Renderer;
    private input: Input;

    private currentScene: Scene;

    private dirtyRender = true;

    constructor() {
      const canvas = document.getElementById("game") as HTMLCanvasElement;
      this.renderer = new Renderer(canvas);
      this.input = new Input(canvas, cfg.SCREEN.width, cfg.SCREEN.height);

      this.currentScene = new MainMenuScene(this);
    }


    start() {
      requestAnimationFrame(this.gameLoop);
    }


    private gameLoop = () => {
      this.currentScene.update();
      this.currentScene.render(this.renderer);
      requestAnimationFrame(this.gameLoop);
    };


    private update() {
      // Game logic goes here
    }


    private render() {
      this.renderer.clear();
      this.renderer.draw();
      this.dirtyRender = false;
    }


    changeScene(scene: Scene): void {
      this.currentScene.onExit?.();
      this.currentScene = scene;
      this.currentScene.onEnter?.();
      this.markDirty();
    }

    private markDirty() {
      this.dirtyRender = true;
    }
}