import CanvasUtil from "../CanvasUtil.js";
import ScoreItem from "../ScoreItem.js";
export default class Bullet extends ScoreItem {
    maxX;
    type;
    damage;
    complimentsArray;
    insultsArray;
    constructor(maxX, type, speed, damage) {
        super();
        this.maxX = maxX;
        this.type = type;
        this.speed = speed;
        this.damage = damage;
        this.complimentsArray = ['../assets/compliment1.png', '../assets/compliment2.png', '../insult2/compliment3.png', '../assets/compliment4.png', '../assets/compliment5.png', '../assets/compliment6.png'];
        this.insultsArray = ['../assets/insult1.png', '../assets/insult2.png', '../assets/insult4.png', '../assets/insult5.png', '../assets/insult6.png'];
        this.image = CanvasUtil.loadNewImage(this.getRandomImage(type));
        this.posY = -100;
        this.posX = Math.random() * (this.maxX - this.getWidth() * 2) + this.getWidth();
    }
    getRandomImage(type) {
        console.log(type);
        return `../assets/${type}${Math.round(Math.random() * 5) + 1}.png`;
    }
    getType() {
        return this.type;
    }
    update(elapsed) {
        this.posY += this.speed * Number('0.' + this.damage);
    }
}
console.log(1);
//# sourceMappingURL=Bullet.js.map