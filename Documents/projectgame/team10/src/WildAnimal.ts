import CanvasUtil from "./CanvasUtil.js";
import Drawable from "./Drawable.js";
import Player from './Player.js'
import ScoreItem from "./ScoreItem.js";

export default class WildAnimal extends ScoreItem {
  private playerToFollow: Player;

  private timeToNextItem: number;

  private timeToNextDirection: number;

  private chanceMoveTime: number;

  private movingCooldown: number;

  private moveUp: boolean;

  private direction: number;

  // private canGo: boolean;

  public constructor(posX: number, posY: number, speed: number, whichPet: string, player?: Player) {
    super();
    
    if (whichPet === 'deer'){
      this.image = CanvasUtil.loadNewImage('./assets/deer-front.png');
    } else if (whichPet === 'cat') {
      this.image = CanvasUtil.loadNewImage('./assets/quick.png');
    }
    console.log(this.getWidth());
    console.log(this.getHeight());
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.playerToFollow = player;
    this.moveUp = false;

    //this.timeToNextDirection = Math.round(Math.random() * (((Math.random() * 800) + 800)) + (((Math.random() * 800) + 800)));
    this.timeToNextDirection = Math.round(Math.random() * 4000) + 2000;
    this.direction = Math.random();
    this.movingCooldown = Math.round(Math.random() * 4000) + 2000;
  }
    /**
   *
   * @param newX The new position
   */
    public move(direction: number): void {
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

  public canMoveUp(): boolean {
    return this.posY > 0;
  }

  public canMoveRight(): boolean {
    return this.posX + this.getWidth() < window.innerWidth - 200;
  }

  public canMoveDown(): boolean {
    return this.posY + this.getHeight() < window.innerHeight;
  }

  public canMoveLeft(): boolean {
    return this.posX > 200;
  }

  public override update(elapsed: number): void {
    if (this.timeToNextDirection > 0) {
      if (this.direction < 0.25 && this.canMoveUp()) {
        this.move(1);
      } else if (this.direction < 0.5 && this.canMoveRight()) {
          this.move(2);
      } else if (this.direction < 0.75 && this.canMoveDown()) {
          this.move(3);
      } else if (this.direction < 1 && this.canMoveLeft()) {
          this.move(4);
      }
    }
    this.timeToNextDirection -= Math.round(elapsed);
    if (this.timeToNextDirection < 0) {
      this.movingCooldown -= elapsed;
      // this.timeToNextDirection = Math.round(Math.random() * (((Math.random() * 800) + 800)) + (((Math.random() * 800) + 800)));
      if (this.movingCooldown < 0) {
          this.movingCooldown = Math.round(Math.random() * 4000) + 2000;
          this.direction = Math.random();
          this.timeToNextDirection = Math.round(Math.random() * 4000) + 2000;
        }
    }

  }

  public setPosition(amount: number): void {
    this.posY = amount;
  }
}