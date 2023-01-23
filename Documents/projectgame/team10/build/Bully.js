import CanvasUtil from "./CanvasUtil.js";
import ScoreItem from "./ScoreItem.js";
export default class Bully extends ScoreItem {
    maxX;
    maxY;
    speedY;
    health;
    damage;
    newPosX;
    constructor(maxX, maxY, newPosX, array) {
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
    getRandomImage() {
        const random = Math.random();
        if (random < 0.5) {
            return './assets/bully1.png';
        }
        return './assets/bully2.png';
    }
    update(elapsed) {
        if (this.posY <= this.maxY / 2 + this.newPosX) {
            this.posY += this.speedY;
        }
    }
}
//# sourceMappingURL=Bully.js.map