import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Player extends Drawable {
    speed;
    points;
    newPoints;
    constructor(startX, startY) {
        super();
        if (document.querySelector('.gender').children[0].src.includes('female')) {
            this.image = CanvasUtil.loadNewImage('./assets/player-male.png');
        }
        else {
            this.image = CanvasUtil.loadNewImage('./assets/player-female.png');
        }
        this.posX = startX;
        this.posY = startY;
        this.speed = 6;
        this.points = 0;
        this.newPoints = 0;
    }
    setPosition(amount) {
        this.posY = amount;
    }
    addPoints(amount) {
        this.points += amount;
        this.newPoints = amount;
    }
    setPoints(amount) {
        this.points = amount;
        this.newPoints = amount;
    }
    getPoints() {
        return this.points;
    }
    getPointsAdded() {
        return this.newPoints;
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
    canMoveUp(scoreItems) {
        return scoreItems.every((scoreItem) => this.collideWithItem(scoreItem) ? this.posY < scoreItem.getPosY() + scoreItem.getHeight() - this.speed : true) && this.posY > 0;
    }
    canMoveRight(scoreItems) {
        return scoreItems.every((scoreItem) => this.collideWithItem(scoreItem) ? this.posX + this.getWidth() - this.speed > scoreItem.getPosX() : true) && this.posX + this.getWidth() < window.innerWidth;
    }
    canMoveDown(scoreItems) {
        return scoreItems.every((scoreItem) => this.collideWithItem(scoreItem) ? this.posY + this.getHeight() - this.speed > scoreItem.getPosY() : true) && this.posY + this.getHeight() < window.innerHeight;
    }
    canMoveLeft(scoreItems) {
        return scoreItems.every((scoreItem) => this.collideWithItem(scoreItem) ? this.posX < scoreItem.getPosX() + scoreItem.getWidth() - this.speed : true) && this.posX > 0;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    setPositionXY(x, y) {
        this.posX = x;
        this.posY = y;
    }
    collideWithItem(item, posX = this.posX, posY = this.posY) {
        return (item.getPosX() + item.getWidth() > posX
            && item.getPosX() < posX + this.getWidth()
            && item.getPosY() + item.getHeight() > posY
            && item.getPosY() < posY + this.getHeight());
    }
}
//# sourceMappingURL=Player.js.map