import CanvasUtil from "../CanvasUtil.js";
import ScoreItem from "../ScoreItem.js";

export default class Bullet extends ScoreItem{
    private maxX: number;

    private type: string;

    private damage: number;

    private complimentsArray: Array<string>;

    private insultsArray: Array<string>;

    public constructor(maxX: number, type: string, speed: number, damage: number) {        
        super();
        this.maxX = maxX;
        this.type = type;
        this.speed = speed;
        this.damage = damage;
        this.complimentsArray = ['../assets/compliment1.png', '../assets/compliment2.png', '../insult2/compliment3.png', '../assets/compliment4.png', '../assets/compliment5.png', '../assets/compliment6.png'];
        this.insultsArray = ['../assets/insult1.png', '../assets/insult2.png', '../assets/insult4.png', '../assets/insult5.png', '../assets/insult6.png']

        this.image = CanvasUtil.loadNewImage(this.getRandomImage(type));

        this.posY = -100;
        this.posX = Math.random() * (this.maxX - this.getWidth() * 2) + this.getWidth();
    }

    private getRandomImage(type: string): string {
        console.log(type);
        return `../assets/${type}${Math.round(Math.random() * 5) + 1}.png`;
    }

    public getType(): string {
        return this.type;
    }
    public override update(elapsed:number): void {
        this.posY += this.speed * Number('0.' + this.damage);
    }
}
console.log(1);
