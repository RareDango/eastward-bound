import type { Scene } from "../engine/Scene.js";
import { Renderer } from "../engine/Renderer.js";
import type { Game } from "../engine/Game.js";
export declare class MainMenuScene implements Scene {
    private backgroundImage;
    constructor(game: Game);
    update(): void;
    render(r: Renderer): void;
    onEnter(): void;
}
//# sourceMappingURL=MainMenuScene.d.ts.map