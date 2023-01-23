import CanvasUtil from "./CanvasUtil.js";
import Drawable from "./Drawable.js";
export default class Pet extends Drawable {
    speed;
    playerToFollow;
    constructor(posX, posY, speed, whichPet, player) {
        super();
        if (whichPet === 'dog') {
            this.image = CanvasUtil.loadNewImage('./assets/quick.png');
        }
        else if (whichPet === 'cat') {
            this.image = CanvasUtil.loadNewImage('./assets/npc-male1.png');
        }
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.playerToFollow = player;
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
    ifBehind() {
        if (this.playerToFollow.getPosY() + this.playerToFollow.getHeight() + 10 < this.getPosY()) {
            this.move(1);
        }
        if (this.playerToFollow.getPosY() - this.playerToFollow.getHeight() - 10 > this.getPosY()) {
            this.move(3);
        }
        if (this.playerToFollow.getPosX() + this.playerToFollow.getWidth() + 10 < this.getPosX()) {
            this.move(4);
        }
        if (this.playerToFollow.getPosX() - this.playerToFollow.getWidth() - 10 > this.getPosX()) {
            this.move(2);
        }
    }
    setPosition(amount) {
        this.posY = amount;
    }
}
//# sourceMappingURL=Pet.js.map