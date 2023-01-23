import CanvasUtil from "./CanvasUtil.js";
import ScoreItem from "./ScoreItem.js";
export default class WildAnimal extends ScoreItem {
    playerToFollow;
    timeToNextItem;
    timeToNextDirection;
    chanceMoveTime;
    movingCooldown;
    moveUp;
    direction;
    constructor(posX, posY, speed, whichPet, player) {
        super();
        if (whichPet === 'deer') {
            this.image = CanvasUtil.loadNewImage('./assets/deer-front.png');
        }
        else if (whichPet === 'cat') {
            this.image = CanvasUtil.loadNewImage('./assets/quick.png');
        }
        console.log(this.getWidth());
        console.log(this.getHeight());
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.playerToFollow = player;
        this.moveUp = false;
        this.timeToNextDirection = Math.round(Math.random() * 4000) + 2000;
        this.direction = Math.random();
        this.movingCooldown = Math.round(Math.random() * 4000) + 2000;
    }
    move(direction) {
        if (direction === 1) {
            this.posY -= this.speed;
            this.image = CanvasUtil.loadNewImage('./assets/deer-front.png');
        }
        else if (direction === 2) {
            this.posX += this.speed;
            this.image = CanvasUtil.loadNewImage('./assets/deer-right.png');
        }
        else if (direction === 3) {
            this.posY += this.speed;
            this.image = CanvasUtil.loadNewImage('./assets/deer-front.png');
        }
        else if (direction === 4) {
            this.posX -= this.speed;
            this.image = CanvasUtil.loadNewImage('./assets/deer-left.png');
        }
    }
    canMoveUp() {
        return this.posY > 0;
    }
    canMoveRight() {
        return this.posX + this.getWidth() < window.innerWidth - 200;
    }
    canMoveDown() {
        return this.posY + this.getHeight() < window.innerHeight;
    }
    canMoveLeft() {
        return this.posX > 200;
    }
    update(elapsed) {
        if (this.timeToNextDirection > 0) {
            if (this.direction < 0.25 && this.canMoveUp()) {
                this.move(1);
            }
            else if (this.direction < 0.5 && this.canMoveRight()) {
                this.move(2);
            }
            else if (this.direction < 0.75 && this.canMoveDown()) {
                this.move(3);
            }
            else if (this.direction < 1 && this.canMoveLeft()) {
                this.move(4);
            }
        }
        this.timeToNextDirection -= Math.round(elapsed);
        if (this.timeToNextDirection < 0) {
            this.movingCooldown -= elapsed;
            if (this.movingCooldown < 0) {
                this.movingCooldown = Math.round(Math.random() * 4000) + 2000;
                this.direction = Math.random();
                this.timeToNextDirection = Math.round(Math.random() * 4000) + 2000;
            }
        }
    }
    setPosition(amount) {
        this.posY = amount;
    }
}
//# sourceMappingURL=WildAnimal.js.map