import { Game } from "../game";

export class Engine {
    private static canvasWidth: number;
    private static canvasHeight: number;
    private static fps: number;
    private static ctx: any;
    private static deltaTime: number;

    public static init() {
        Engine.canvasWidth = 100;
        Engine.canvasHeight = 100;
        Engine.fps = 30;
        Engine.deltaTime = 0.033;
    }

    public static setFPS(fps: number): void {
        Engine.fps = fps;
        Engine.deltaTime = 1 / Engine.fps;
    }

    public static setCanvasSize(width: number, height: number): void {
        Engine.canvasWidth = width;
        Engine.canvasHeight = height;
    }

    public static getP5Context(): any {
        return undefined;
    }

    public static getDeltaTime(): number {
        return Engine.deltaTime;
    }

    public static run(game: Game): void {
        // stub: do nothing
    }
}
