import CanvasUtil from "./CanvasUtil.js";
import ScoreItem from "./ScoreItem.js";

export default class Npc extends ScoreItem {
    private direction: number;

    private newPos: number;

    private isDead: boolean;

    private isContinuable: boolean;

    public constructor(starterX: number, starterY: number, speed: number, array: string[], continuable: boolean) {
        super()
        this.image = CanvasUtil.loadNewImage(this.getRandomImage());
        this.speed = speed;
        this.posX = starterX;
        this.posY = starterY;
        this.isDead = false;
        this.isContinuable = continuable;

        for (let i = 0; i < array.length; i++) {
            this.dialogArray.push(array[i])
        }
    }

    private getRandomImage(): string {
        const random = Math.random();

        if (random < 0.25) {
            return './assets/npc-female1.png';
        } 
        
        if (random < 0.5) {
            return './assets/npc-male1.png';
        } 
        
        if (random < 0.75) {
            return './assets/npc-female2.png';
        }

        return './assets/npc-male2.png'

    }

    public getisContinuable(): boolean {
        return this.isContinuable;
    }

    public getIsDead(): boolean {
        return this.isDead;
    }

    public setIsDead(): void {
        this.isDead = true;
    }

    public move(direction: number) {        
        if (direction === 1) {
            this.posY -= this.speed;
        } else if (direction === 2) {
            this.posX += this.speed;
        } else if (direction === 3) {
            this.posY += this.speed;
        } else if (direction === 4) {
            this.posX -= this.speed;
        }
    }
}