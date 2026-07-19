import * as cfg from "../config/GameConfig.js";
import { Renderer } from "./Renderer.js";
import { Input } from "./Input.js";

import { MainMenuScene } from "../scenes/MainMenuScene.js";
import type { Scene } from "./Scene.js";

export class Game {
  private renderer: Renderer;
  private input: Input;

  private currentScene: Scene;

  private dirtyRender = false;

  constructor() {
    const canvas = document.getElementById("game") as HTMLCanvasElement;
    this.renderer = new Renderer(canvas);
    this.input = new Input(canvas, cfg.SCREEN.width, cfg.SCREEN.height);
    this.currentScene = new MainMenuScene(this);
    this.markDirty();
  }


  start() {
    requestAnimationFrame(this.gameLoop);
  }

  private timeStart = performance.now();
  private timePassed = 0;
  private gameLoop = () => {
    this.currentScene.update();
    const now = performance.now();
    this.timePassed = now - this.timeStart;
    if (this.timePassed >= 1000 / cfg.GAME.fps) {
      this.timeStart += this.timePassed;
      
      if(this.dirtyRender) {
        this.renderer.clear();
        this.currentScene.render(this.renderer);
        this.dirtyRender = false;
      }
    }
    requestAnimationFrame(this.gameLoop);
  };

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