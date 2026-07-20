import * as cfg from "./config/GameConfig.js";
import { Game } from "./engine/Game.js";
import { Input } from "./engine/Input.js";
import { Renderer } from "./engine/Renderer.js";
import { AssetManager } from "./engine/AssetManager.js";
const canvas = document.getElementById("game");
canvas.width = cfg.SCREEN.width;
canvas.height = cfg.SCREEN.height;
const ctx = canvas.getContext("2d");
if (!ctx)
    throw new Error("Could not get canvas context");
const input = new Input(canvas, canvas.width, canvas.height);
function resizeCanvas() {
    const gameWidth = canvas.width;
    const gameHeight = canvas.height;
    const gameAspect = gameWidth / gameHeight;
    const windowAspect = window.innerWidth / window.innerHeight;
    let displayWidth;
    let displayHeight;
    if (windowAspect > gameAspect) {
        // Window is wider than the game
        displayHeight = window.innerHeight;
        displayWidth = displayHeight * gameAspect;
    }
    else {
        // Window is taller than the game
        displayWidth = window.innerWidth;
        displayHeight = displayWidth / gameAspect;
    }
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
async function main() {
    const game = new Game(assets);
    game.start();
}
const assets = new AssetManager();
await assets.loadImage("battleBg", "./assets/bg.png");
main();
//# sourceMappingURL=main.js.map