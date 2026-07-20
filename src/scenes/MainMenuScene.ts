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

    r.drawText("huge text", 10, 100, "huge");
    r.drawText("big text", 10, 70, "big");
    r.drawText("Medium text", 10, 40);
    r.drawText("Small text", 10, 20, "small");
    r.drawText("Tiny text! WHAT IS THIS!?", 10, 10, "tiny");
  }

  onEnter(): void {
    console.log("Entered Main Menu");
  }
}