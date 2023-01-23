import CanvasUtil from "./CanvasUtil.js";
import KeyListener from "./KeyListener.js";
import Scene from "./Scene.js";

export default class SceneInstructions extends Scene {
    private nextLevel: Scene;

    private continue: boolean;

    private instructions: Array<string> = [];

    public constructor(maxX: number, maxY: number, nextLevel: Scene, instruction1?: string, instruction2?: string, instruction3?: string, instruction4?: string, instruction5?: string) {
        super(maxX, maxY);

        this.continue = false;

        this.nextLevel = nextLevel;

        this.instructions.push(instruction1, instruction2, instruction3, instruction4);
        console.log(this.instructions);
        
    }

    public processInput(keyListener: KeyListener): void {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.continue = true;
        }
    }

    public update(elapsed: number): Scene {
        if (this.continue) {
            return this.nextLevel;
        }
        return null;
    }

    public checkEmptyLine(line: string): string {
        if (line != undefined) {
            return line;
        } else return ''
    }

    public render(canvas: HTMLCanvasElement): void {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to continue.', (canvas.width - 50) / 2, 760, 'center', 'PIXELADE', 48, 'white');

        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[0]), (canvas.width - 48) / 2, 200, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[1]), (canvas.width - 48) / 2, 300, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[2]), (canvas.width - 48) / 2, 400, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[3]), (canvas.width - 48) / 2, 500, 'center', 'PIXELADE', 48, 'white');
        CanvasUtil.writeTextToCanvas(canvas, this.checkEmptyLine(this.instructions[4]), (canvas.width - 48) / 2, 500, 'center', 'PIXELADE', 48, 'white');
    }
}