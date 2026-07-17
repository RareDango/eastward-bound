import * as cfg from "../config/GameConfig.js";
import { Renderer } from "./Renderer.js";
import { Input } from "./Input.js";

export class Game {

    private renderer: Renderer;
    private input: Input;

    private dirtyRender = true;

    constructor() {
        const canvas = document.getElementById("game") as HTMLCanvasElement;
        this.renderer = new Renderer(canvas);
        this.input = new Input(canvas, cfg.SCREEN.width, cfg.SCREEN.height);
    }


    start() {
        requestAnimationFrame(this.gameLoop);
    }


    private gameLoop = () => {

        this.update();

        if (this.dirtyRender) {
          this.render();
        }

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

}