import type { Scene } from "../engine/Scene.js";
import { Renderer } from "../engine/Renderer.js";
import type { Game } from "../engine/Game.js";

enum State {
  Main,
  Play,
  Options,
  Other
}

export class MainMenuScene implements Scene {
  private backgroundImage: HTMLImageElement;
  private state: State;

  constructor(game: Game) {
    this.backgroundImage = game.assets.getImage("battleBg");
    this.state = State.Main;
  }

  update(): void {

  }

  render(r: Renderer): void {
    r.drawImage(this.backgroundImage, 0, 0);
    //r.drawRect(300, 8, 10*46, 8*46, "#C5B194");

    r.drawText("Eastward", 20, 10, 5);
    r.drawText("bound", 20, 60, 5);
    r.strokeRect(10, 10, 255, 105, 5, "#000");

    r.drawRect(20, 130, 160, 40, "#8177bd");
    r.strokeRect(20, 130, 160, 40, 5, "#342d58")
    r.drawText("button time!", 30, 140);

    //r.drawGridlines();
  }

  onEnter(): void {
    console.log("Entered Main Menu");
  }

  onPointerDown(x: number, y: number): void {
      return;
  }
}