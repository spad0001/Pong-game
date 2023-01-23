import CanvasUtil from "./CanvasUtil.js";
import Drawable from "./Drawable.js";
import Player from './Player.js'

export default class Pet extends Drawable {
  private speed: number;

  private playerToFollow: Player;

  // private canGo: boolean;

  public constructor(posX: number, posY: number, speed: number, whichPet: string, player: Player) {
    super();
    if (whichPet === 'dog'){
      this.image = CanvasUtil.loadNewImage('./assets/quick.png');
    } else if (whichPet === 'cat') {
      this.image = CanvasUtil.loadNewImage('./assets/npc-male1.png');
    }
    this.posX = posX;
    this.posY = posY;
    this.speed= speed;
    this.playerToFollow = player;
    // this.canGo = false;
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
  
  public ifBehind(): void {
    // if (Math.abs(this.getPosX() + this.getWidth() / 2 - this.playerToFollow.getPosX() + this.playerToFollow.getWidth() / 2) > 200 || Math.abs(this.getPosY() + this.getHeight() / 2 - this.playerToFollow.getPosY() + this.playerToFollow.getHeight() / 2) > 20) {
      // console.log('behind');
    // this.isBehind();  
    // if (this.canGo) {
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
    // }
    // }
  }

  // public isBehind(): void {
  //   if(this.playerToFollow.getPosY() + this.playerToFollow.getHeight() + 100 < this.getPosY() || 
  //     this.playerToFollow.getPosY() - this.playerToFollow.getHeight() - 100 > this.getPosY() ||
  //     this.playerToFollow.getPosX() + this.playerToFollow.getWidth() + 100 < this.getPosX() ||
  //     this.playerToFollow.getPosX() - this.playerToFollow.getWidth() - 100 > this.getPosX()) {
  //       this.canGo = true;
  //       console.log(this.canGo);
        
  //     }
  // }

  public setPosition(amount: number): void {
    this.posY = amount;
  }

//   public comeToPlayer() {
//     if (this.getPosX() + this.getWidth() < this.playerToFollow.getPosX()) {
//       this.move(2);
//     }

//     if (this.getPosX() > this.playerToFollow.getPosX() + this.playerToFollow.getWidth()) {
//       this.move(4)
//     }
//   }
}