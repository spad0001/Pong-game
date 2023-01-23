import CanvasUtil from "./CanvasUtil.js";
import ScoreItem from "./ScoreItem.js";

export default class Bully extends ScoreItem {
    private maxX: number;

    private maxY: number;

    private speedY: number;

    private health: number;

    private damage: number;

    private newPosX: number;

    public constructor(maxX: number, maxY: number, newPosX: number, array: string[]) {
        super();
        this.image = CanvasUtil.loadNewImage(this.getRandomImage());
        this.maxX = maxX / 2;
        this.maxY = maxY / 2;
        this.posX = this.maxX;
        this.speedY = 5;
        this.posY = 0;
        this.dialogArray = array;
        this.newPosX = newPosX;
    }

    private getRandomImage() {
        const random = Math.random();

        if (random < 0.5) {
            return './assets/bully1.png'
        }

        return './assets/bully2.png';
    }

    public override update(elapsed: number): void {
        if (this.posY <= this.maxY / 2 + this.newPosX) {
            this.posY += this.speedY;
        } 
    }
}
