import type { Scene } from "./Scene.js";
import type { AssetManager } from "./AssetManager.js";
export declare class Game {
    private renderer;
    private input;
    private currentScene;
    private dirtyRender;
    assets: AssetManager;
    constructor(assets: AssetManager);
    start(): void;
    private timeStart;
    private timePassed;
    private gameLoop;
    changeScene(scene: Scene): void;
    private markDirty;
}
//# sourceMappingURL=Game.d.ts.map