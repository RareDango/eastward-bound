import type { Scene } from "../engine/Scene.js";
import { Renderer } from "../engine/Renderer.js";
import type { Game } from "../engine/Game.js";

export class MainMenuScene implements Scene {
  private backgroundImage = new Image();
  constructor(private game: Game) {
    this.backgroundImage.src = "assets/bg.png";
  }

  update(): void {

  }

  render(renderer: Renderer): void {
    renderer.drawImage(this.backgroundImage, 0, 0);
    renderer.drawGridlines();
    renderer.drawText("Eastward Bound!", 10, 100);
  }

  onEnter(): void {
    console.log("Entered Main Menu");
  }

}