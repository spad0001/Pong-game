import CanvasUtil from "./CanvasUtil.js";
import ScoreItem from "./ScoreItem.js";
export default class Npc extends ScoreItem {
    direction;
    newPos;
    isDead;
    isContinuable;
    constructor(starterX, starterY, speed, array, continuable) {
        super();
        this.image = CanvasUtil.loadNewImage(this.getRandomImage());
        this.speed = speed;
        this.posX = starterX;
        this.posY = starterY;
        this.isDead = false;
        this.isContinuable = continuable;
        for (let i = 0; i < array.length; i++) {
            this.dialogArray.push(array[i]);
        }
    }
    getRandomImage() {
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
        return './assets/npc-male2.png';
    }
    getisContinuable() {
        return this.isContinuable;
    }
    getIsDead() {
        return this.isDead;
    }
    setIsDead() {
        this.isDead = true;
    }
    move(direction) {
        if (direction === 1) {
            this.posY -= this.speed;
        }
        else if (direction === 2) {
            this.posX += this.speed;
        }
        else if (direction === 3) {
            this.posY += this.speed;
        }
        else if (direction === 4) {
            this.posX -= this.speed;
        }
    }
}
//# sourceMappingURL=Npc.js.map