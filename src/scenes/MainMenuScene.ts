import type { Scene } from "../engine/Scene.js";
import { Renderer } from "../engine/Renderer.js";
import type { Game } from "../engine/Game.js";

export class MainMenuScene implements Scene {
  private backgroundImage: HTMLImageElement;

  constructor(game: Game) {
    this.backgroundImage = game.assets.getImage("battleBg");
  }

  update(): void {

  }

  render(r: Renderer): void {
    r.drawImage(this.backgroundImage, 0, 0);
    r.drawGridlines();

    r.drawText("Name Goes Here!", 10, 10, "big");
    r.drawText("Eastward Bound!", 10, 100);
    r.drawText("Small text here. HELLO HELLO!!!", 30, 45, "small");
    r.drawText("Tiny text! WHAT IS THIS!?", 20, 60, "tiny");
  }

  onEnter(): void {
    console.log("Entered Main Menu");
  }

  
}