import Bully from './Bully.js';
import CanvasUtil from './CanvasUtil.js';
import Bullet from './HouseMiniGame/Bullet.js';
import KeyListener from './KeyListener.js';
import Level1 from './Level1.js';
import Level2 from './Level2.js';
import Npc from './Npc.js';
import Pet from './Pet.js';
import Player from './Player.js';
import Scene from './Scene.js';
import SceneInstructions from './SceneInstructions.js';
import SceneLose from './SceneLose.js';
import SceneWin from './SceneWin.js';
import ScoreItem from './ScoreItem.js';
import VillageDef from './VillageDef.js'

export default class LevelHouse extends Scene {
  public villageDef: VillageDef

  public player: Player;

  private pet: Pet;

  private scoreItems: ScoreItem[];

  private displayEffect: boolean;

  private displayTime: number;

  private timeToNextItem: number;

  private gameWin: boolean

  private gameLost: boolean;

  private points: number;

  public constructor(maxX: number, maxY: number, player: Player, playerPoints: number, pet: Pet) {
    super(maxX, maxY);
    this.player = player
    this.player.setPosition(600);
    this.player.setSpeed(9);
    if (playerPoints < 0) {
      this.player.setPoints(0);
    }
    this.pet = pet;
    this.scoreItems = [];
    this.gameWin = false;
    this.gameLost = false;
    this.displayTime = 1000;
    this.points = 0;

    this.timeToNextItem = Math.floor(Math.random() * (1000 - 600) + 600);

    const timeToNextItemFunc = (): void => {
      const chance = Math.random();
      if (chance < 0.6) {
        this.scoreItems.push(new Bullet(this.maxX, 'insult', 15, 25));
      } else this.scoreItems.push(new Bullet(this.maxX, 'compliment', 10, 25));
      console.log(this.scoreItems);
      
      this.timeToNextItem = Math.floor(Math.random() * (1000 - 600) + 600);
    };
    setInterval(timeToNextItemFunc, this.timeToNextItem);

    (document.querySelector('#game') as HTMLCanvasElement).style.backgroundImage = 'url("./assets/dungeon_bg.png")';

    [...document.querySelector('.gender').children].forEach((element: HTMLElement) => element.style.display = 'none')
  }

  public processInput(keyListener: KeyListener): void {    
    if (keyListener.isKeyDown(KeyListener.KEY_D) && this.player.canMoveRight(this.scoreItems)) {
      this.player.move(2);
    }
    if (keyListener.isKeyDown(KeyListener.KEY_A) && this.player.canMoveLeft(this.scoreItems)) {
      this.player.move(4);
    }
    // if (this.player.getPosX() > 460 && this.player.getPosX() < 480 && keyListener.isKeyDown(KeyListener.KEY_V)) {
    //   this.gameWin = true;
    // }
  }

  public update(elapsed: number): Scene {
    if (this.player.getPoints() >= 20) {
      this.gameWin = true;
    }
    if (this.gameLost) {
      return new SceneLose(this.maxX, this.maxY, this.player, this.player.getPoints(), this.pet, '2');
    }
    if (this.gameWin) {
      return new SceneInstructions(this.maxX, this.maxY, new Level2(this.maxX, this.maxY, this.player, this.player.getPoints(), this.pet), 'Congratulations!', 'You have completed the first level.', 'Now you can go to the second level.', `Your current score is: ${this.player.getPoints()}`, 'Careful with the troll, he is very angry.');
    }

    this.scoreItems.forEach((scoreItem: ScoreItem) => {
      if (this.player.collideWithItem(scoreItem) && scoreItem instanceof Bullet) {
        this.scoreItems = this.scoreItems.filter((item) => item !== scoreItem);
        if (scoreItem.getType() === 'insult') {
          this.player.addPoints(-1);
          this.points -= 1;
        } else {
          this.player.addPoints(1);
          this.points += 1;
        }

        if (this.player.getPoints() < 0) {
          this.gameLost = true;
        }

        if (this.points > 9) {
          this.gameWin = true;
        }
      }
      scoreItem.update(elapsed);
    });
    
    if (this.displayEffect) {
      this.displayTime -= 7;
    }
    if (this.displayEffect && this.displayTime < 0) {
      this.displayEffect = false;
      this.displayTime = 1000;
    }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    this.scoreItems.forEach((scoreItem: ScoreItem) => {
      scoreItem.render(canvas);
    });
    this.player.render(canvas);

    if (this.displayEffect) {
      if (this.displayTime < 1000) {
        CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/cardforPointsSmall.png'), canvas.width / 2 - 75, canvas.height / 2 - 75)
      }
      CanvasUtil.writeTextToCanvas(canvas, `+${this.player.getPointsAdded()}`, canvas.width / 2, canvas.height / 2 + 58, 'center', 'Pixelade', 24, 'white');
    }

    CanvasUtil.writeTextToCanvas(canvas, `Points: ${this.player.getPoints()}`, (canvas.width - 1100) / 2, 48, 'right', 'Pixelade', 32, 'white');
    

    const dialogBox: HTMLElement = document.querySelector('.dialog-box');
      dialogBox.style.display = "none";

    const dialogPrompt: HTMLElement = document.querySelector('#dialog-host')
      dialogPrompt.style.display = "none";
  }
}
