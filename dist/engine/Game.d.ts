import type { Scene } from "./Scene.js";
export declare class Game {
    private renderer;
    private input;
    private currentScene;
    private dirtyRender;
    constructor();
    start(): void;
    private gameLoop;
    private update;
    private render;
    changeScene(scene: Scene): void;
    private markDirty;
}
//# sourceMappingURL=Game.d.ts.map