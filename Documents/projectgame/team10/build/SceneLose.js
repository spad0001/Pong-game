import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import LevelHouse from './LevelHouse.js';
import Level2 from './Level2.js';
export default class SceneLose extends Scene {
    continue;
    whichEnding;
    player;
    playerPoints;
    pet;
    constructor(maxX, maxY, player, playerPoints, pet, whichEnding) {
        super(maxX, maxY);
        this.player = player;
        this.playerPoints = playerPoints;
        this.pet = pet;
        this.continue = false;
        this.whichEnding = whichEnding;
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
        if (this.continue) {
            if (this.whichEnding === '2') {
                return new LevelHouse(this.maxX, this.maxY, this.player, this.playerPoints, this.pet);
            }
            else {
                return new Level2(this.maxX, this.maxY, this.player, this.playerPoints, this.pet);
            }
        }
        return null;
    }
    render(canvas) {
        if (this.whichEnding === '2') {
            CanvasUtil.fillCanvas(canvas, 'black');
            CanvasUtil.writeTextToCanvas(canvas, 'You got hit by too many mean words said by a troll! :(.', (canvas.width - 50) / 2, 560, 'center', 'serif', 48, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Try avoiding them next time and only catching the nice words.', (canvas.width - 50) / 2, 660, 'center', 'serif', 48, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to retry.', (canvas.width - 50) / 2, 760, 'center', 'PIXELADE', 48, 'white');
        }
        else {
            CanvasUtil.fillCanvas(canvas, 'black');
            CanvasUtil.writeTextToCanvas(canvas, 'You insulted the bully.', (canvas.width - 50) / 2, 560, 'center', 'serif', 48, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'This only makes things worse. Try being nicer next time.', (canvas.width - 50) / 2, 660, 'center', 'serif', 48, 'white');
            CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to retry.', (canvas.width - 50) / 2, 760, 'center', 'PIXELADE', 48, 'white');
        }
    }
}
//# sourceMappingURL=SceneLose.js.map