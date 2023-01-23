import CanvasUtil from "./CanvasUtil.js";
import KeyListener from "./KeyListener.js";
import Scene from "./Scene.js";
export default class SceneInstructions extends Scene {
    nextLevel;
    continue;
    instructions = [];
    constructor(maxX, maxY, nextLevel, instruction1, instruction2, instruction3, instruction4, instruction5) {
        super(maxX, maxY);
        this.continue = false;
        this.nextLevel = nextLevel;
        this.instructions.push(instruction1, instruction2, instruction3, instruction4);
        console.log(this.instructions);
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.continue = true;
        }
    }
    update(elapsed) {
        if (this.continue) {
            return this.nextLevel;
        }
        return null;
    }
    checkEmptyLine(line) {
        if (line != undefined) {
            return line;
        }
        else
            return '';
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to continue.', (canvas.width - 50) / 2, 760, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[0]), (canvas.width - 48) / 2, 200, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[1]), (canvas.width - 48) / 2, 300, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[2]), (canvas.width - 48) / 2, 400, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[3]), (canvas.width - 48) / 2, 500, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[4]), (canvas.width - 48) / 2, 500, 'center', 'PIXELADE', 48, 'white');
    }
}
//# sourceMappingURL=SceneInstructions.js.map