import { Game } from './GameLoop.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import SceneStart from './SceneStart.js';
export default class Krusher extends Game {
    canvas;
    keyListener;
    currentScene;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.currentScene = new SceneStart(this.canvas.width, this.canvas.height);
    }
    processInput() {
        this.currentScene.processInput(this.keyListener);
    }
    update(elapsed) {
        const nextScene = this.currentScene.update(elapsed);
        if (nextScene !== null) {
            this.currentScene = nextScene;
            console.log(nextScene);
        }
        ;
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas);
    }
    getCanvas() {
        return this.canvas;
    }
}
//# sourceMappingURL=VillageDef.js.map