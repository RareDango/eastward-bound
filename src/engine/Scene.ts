import { Renderer } from "./Renderer.js";

export interface Scene {
    update(): void;
    render(renderer: Renderer): void;

    onEnter?(): void;
    onExit?(): void;

    onPointerDown(x: number, y: number): void;
}