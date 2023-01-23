import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import ScoreItem from './ScoreItem.js';
import WildAnimal from './WildAnimal.js';

export default class Player extends Drawable {
  private speed: number;

  private points: number;

  private newPoints: number;

  public constructor(startX: number, startY: number) {
    super();
    if ((document.querySelector('.gender').children[0] as HTMLImageElement).src.includes('female')) {
      this.image = CanvasUtil.loadNewImage('./assets/player-male.png');
    } else {
      this.image = CanvasUtil.loadNewImage('./assets/player-female.png');
    }
    this.posX = startX;
    this.posY = startY;
    this.speed = 6;
    this.points = 0;
    this.newPoints = 0;
  }

  public setPosition(amount: number): void {
    this.posY = amount;
  }

  public addPoints(amount: number): void {
    this.points += amount;
    this.newPoints = amount
  }

  public setPoints(amount: number): void {
    this.points = amount;
    this.newPoints = amount
  }

  public getPoints(): number {
    return this.points;
  }

  public getPointsAdded(): number {
    return this.newPoints;
  }

  /**
   *
   * @param newX The new position
   */
  public move(direction: number): void {
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

  public canMoveUp(scoreItems: ScoreItem[]): boolean {
    return scoreItems.every((scoreItem) => this.collideWithItem(scoreItem) ? this.posY < scoreItem.getPosY() + scoreItem.getHeight() - this.speed : true) && this.posY > 0;
  }

  public canMoveRight(scoreItems: ScoreItem[]): boolean {
    return scoreItems.every((scoreItem) => this.collideWithItem(scoreItem) ? this.posX + this.getWidth() - this.speed > scoreItem.getPosX() : true) && this.posX + this.getWidth() < window.innerWidth;
  }

  public canMoveDown(scoreItems: ScoreItem[]): boolean {
    return scoreItems.every((scoreItem) => this.collideWithItem(scoreItem) ? this.posY + this.getHeight() - this.speed > scoreItem.getPosY() : true) && this.posY + this.getHeight() < window.innerHeight;
  }

  public canMoveLeft(scoreItems: ScoreItem[]): boolean {
    return scoreItems.every((scoreItem) => this.collideWithItem(scoreItem) ? this.posX < scoreItem.getPosX() + scoreItem.getWidth() - this.speed : true) && this.posX > 0;
  }
  
  public getSpeed(): number {
    return this.speed;
  }

  public setSpeed(speed: number): void {
    this.speed = speed;
  }

  public setPositionXY(x: number, y: number): void {
    this.posX = x;
    this.posY = y;
  }

  /**
   *
   * @param item The item we want to check the collision of.
   * @returns true if hit, false if not.
   */
  public collideWithItem(item?: ScoreItem, posX: number = this.posX, posY: number = this.posY): boolean {
    return (item.getPosX() + item.getWidth() > posX
      && item.getPosX() < posX + this.getWidth()
      && item.getPosY() + item.getHeight() > posY
      && item.getPosY() < posY + this.getHeight()
    );
  }
}
