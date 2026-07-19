import type { Scene } from "../engine/Scene.js";
import { Renderer } from "../engine/Renderer.js";
import type { Game } from "../engine/Game.js";
export declare class MainMenuScene implements Scene {
    private game;
    private backgroundImage;
    constructor(game: Game);
    update(): void;
    render(renderer: Renderer): void;
    onEnter(): void;
}
//# sourceMappingURL=MainMenuScene.d.ts.map