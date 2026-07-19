import type { Scene } from "./Scene.js";
export declare class Game {
    private renderer;
    private input;
    private currentScene;
    private dirtyRender;
    constructor();
    start(): void;
    private timeStart;
    private timePassed;
    private gameLoop;
    changeScene(scene: Scene): void;
    private markDirty;
}
//# sourceMappingURL=Game.d.ts.map