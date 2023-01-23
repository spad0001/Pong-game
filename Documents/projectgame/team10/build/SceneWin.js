import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import Level1 from './Level1.js';
import Player from './Player.js';
export default class SceneWin extends Scene {
    continue;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.continue = false;
        const dialogBox = document.querySelector('.dialog-box');
        const dialogPrompt = document.querySelector('#dialog-host');
        dialogBox.style.display = 'none';
        dialogPrompt.style.display = 'none';
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.continue = true;
        }
    }
    update(elapsed) {
        if (this.continue)
            return new Level1(this.maxX, this.maxY, new Player(this.maxX / 2, 550), 0, null);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.writeTextToCanvas(canvas, `All the bullies were defeated!`, (canvas.width - 50) / 2, 460, 'center', 'serif', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, `You didn't insult the bully and remained calm.`, (canvas.width - 50) / 2, 560, 'center', 'serif', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Good job :)', (canvas.width - 50) / 2, 660, 'center', 'serif', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to play again!', (canvas.width - 50) / 2, 760, 'center', 'serif', 48, 'white');
    }
}
//# sourceMappingURL=SceneWin.js.map