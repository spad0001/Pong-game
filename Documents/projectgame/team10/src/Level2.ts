import Bully from './Bully.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import LevelHouse from './LevelHouse.js';
import Npc from './Npc.js';
import Pet from './Pet.js';
import Player from './Player.js';
import Scene from './Scene.js';
import SceneLose from './SceneLose.js';
import SceneWin from './SceneWin.js';
import ScoreItem from './ScoreItem.js';
import VillageDef from './VillageDef.js';
import SceneInstructions from './SceneInstructions.js';
import WildAnimal from './WildAnimal.js';

export default class Level2 extends Scene {
  private canvas: HTMLCanvasElement;

  public villageDef: VillageDef

  public player: Player;

  private pet: Pet;

  private tutorialStep2: Npc;

  private talkToTutorialStep2: boolean;

  private bully: Bully;

  private enterHouse: boolean;

  private scoreItems: ScoreItem[];

  private animalList: WildAnimal[] = [];
  
  private isInDialogue: boolean;

  private isInteractable: boolean;

  private isEnterable: boolean;

  private npcInDialogue: ScoreItem;

  private npcTutorialStep2ShouldSpawn: boolean;

  private questionArray: string[] = [];

  private displayEffect: boolean;

  private displayTime: number;

  private gameWin: boolean

  private gameLost: boolean;

  public constructor(maxX: number, maxY: number, player: Player, playerPoints: number, pet: Pet) {
    (document.querySelector('#game') as HTMLCanvasElement).onclick = (e) => {
      console.log(e.clientX, e.clientY);
      //100 485  330 485
      //100 680  330 680  
    };
    super(maxX, maxY);
    this.player = player
    this.pet = pet;
    this.player.setPositionXY(292, 594);
    this.scoreItems = [];
    this.gameWin = false;
    this.gameLost = false;
    this.bully = null;
    this.npcTutorialStep2ShouldSpawn = false;
    this.talkToTutorialStep2 = false;
    this.displayTime = 1000;
    this.canvas = document.querySelector('#game') as HTMLCanvasElement;

    this.canvas.style.backgroundImage = 'url("./assets/bg.jpg")';
    // this.scoreItems.push(new Building(CanvasUtil.fillRectangle());
    this.animalList.push(new WildAnimal(window.innerWidth / 2 + 200, window.innerHeight / 2, 1, 'deer'))
    this.scoreItems.push(this.tutorialStep2 = new Npc(window.innerWidth / 2, -200, 9, ['??? Villager', 'What? Who? WAIT, there is a monster coming!', 'Huh?', `How can I help?`, 'Throw to Bully'], false));
    this.isInDialogue = null;
    this.isInteractable = false;
    this.npcInDialogue = null;

    [...document.querySelector('.gender').children].forEach((element: HTMLElement) => element.style.display = 'none')

    let debouce: boolean = false;
    let debounceSecond: boolean = false;

    document.getElementById('option1').onclick = () => {
      if (JSON.stringify(this.tutorialStep2) === JSON.stringify(this.npcInDialogue)) {
        this.isInDialogue = false;
        this.npcInDialogue = null;

        this.player.setPosition(maxY - 450);
        this.pet?.setPosition(maxY - 330)
        this.talkToTutorialStep2 = false;
        this.scoreItems.push(
          this.bully = new Bully(maxX, maxY - 600, 100, ['The Bully', `Mmmm! Ugly humans! FEAR ME! Hide in fear!`, `I'm not ugly.`, `Whatever, bye.`, `You're ugly!`])
        );
      } else if (JSON.stringify(this.bully) === JSON.stringify(this.npcInDialogue)) {
        this.isInDialogue = false;
        this.npcInDialogue = null;
  
        this.gameWin = true;
      }
    };
    document.getElementById('option2').onclick = () => {
      if (JSON.stringify(this.tutorialStep2) === JSON.stringify(this.npcInDialogue)) {
        this.isInDialogue = false;
        this.npcInDialogue = null;

        this.player.addPoints(15);
        this.displayEffect = true;

        this.player.setPosition(maxY - 450)
        this.pet?.setPosition(maxY - 330)
        this.talkToTutorialStep2 = false;
        this.scoreItems.push(
          this.bully = new Bully(maxX, maxY - 600, 100, ['The Bully', `Mmmm! Ugly humans! FEAR ME!`, `I'm not ugly.`, `Whatever, bye.`, `You're ugly!`])
        );
      } else if (JSON.stringify(this.bully) === JSON.stringify(this.npcInDialogue)) {
        this.isInDialogue = false;
        this.npcInDialogue = null;

        this.gameLost = false;
      }
    };
    document.getElementById('option3').onclick = (): void => {
      if (JSON.stringify(this.tutorialStep2) === JSON.stringify(this.npcInDialogue)) {
        this.isInDialogue = false;
        this.npcInDialogue = null;

        this.player.setPosition(maxY - 450)
        this.pet?.setPosition(maxY - 330)
        this.talkToTutorialStep2 = false;
        this.scoreItems.push(
          this.bully = new Bully(maxX, maxY - 600, 100, ['The Bully', `Mmmm! Ugly humans! FEAR ME!`, `I'm not ugly.`, `Whatever, bye.`, `You're ugly!`])
        );
      } else if (JSON.stringify(this.bully) === JSON.stringify(this.npcInDialogue)) {
        this.isInDialogue = false;
        this.npcInDialogue = null;

        this.gameLost = true;
      }
    };
  }

  public processInput(keyListener: KeyListener): void {    
    if (!this.isInDialogue) {
      if (keyListener.isKeyDown(KeyListener.KEY_W) && this.player.canMoveUp(this.scoreItems)) {
        this.player.move(1);
        this.pet?.move(1);
        this.npcTutorialStep2ShouldSpawn = true;
      }
      if (keyListener.isKeyDown(KeyListener.KEY_D) && this.player.canMoveRight(this.scoreItems)) {
        this.player.move(2);
        this.pet?.move(2);
        this.npcTutorialStep2ShouldSpawn = true;
      }
      if (keyListener.isKeyDown(KeyListener.KEY_S) && this.player.canMoveDown(this.scoreItems)) {
        this.player.move(3);
        this.pet?.move(3);
        this.npcTutorialStep2ShouldSpawn = true;
      }
      if (keyListener.isKeyDown(KeyListener.KEY_A) && this.player.canMoveLeft(this.scoreItems)) {
        this.player.move(4);
        this.pet?.move(4);
        this.npcTutorialStep2ShouldSpawn = true;
      }
      this.scoreItems.forEach((scoreItem: ScoreItem) => {   
        const buildingCheck = () => (this.player.getPosX() + this.player.getWidth() > 320 && this.player.getPosX() < 545 && this.player.getHeight() + this.player.getPosY() > 490 && this.player.getPosY() < 670);
        if (buildingCheck()) {
          this.isEnterable = true;

          if (keyListener.keyPressed(KeyListener.KEY_F)) {
            this.enterHouse = true;
          }
        } else this.isEnterable = false;
                
        if (this.scoreItems.some((scoreItem) => this.player.collideWithItem(scoreItem))) {
          this.isInteractable = true;
          if (keyListener.keyPressed(KeyListener.KEY_E)) {
            this.npcInDialogue = this.scoreItems.find((scoreItem) => this.player.collideWithItem(scoreItem));

            this.isInteractable = false;       
            for (let i = 0; i < this.npcInDialogue.getDialog().length; i++) {
              this.questionArray.push(this.npcInDialogue.getDialog()[i]);
            }
            this.setDialogText(this.questionArray);
            if (this.npcInDialogue instanceof Bully) {
              this.isInDialogue = true;
            } else if (scoreItem instanceof Npc) {
              this.isInDialogue = true;
            }
          }
        } else {
          this.isInteractable = false;
          this.questionArray = [];
        }
      });
    }
  }

  public update(elapsed: number): Scene {
    if (this.gameLost) {
      return new SceneLose(this.maxX, this.maxY, this.player, this.player.getPoints(), this.pet);
    }
    if (this.gameWin) {
      return new SceneWin(this.maxX, this.maxY);
    }
    if (this.enterHouse) {
      return new SceneInstructions(this.maxX, this.maxY, (new LevelHouse(this.maxX, this.maxY, this.player, this.player.getPoints(), this.pet)))
    }

    this.scoreItems.forEach((scoreItem: ScoreItem) => {
      scoreItem.update(elapsed);
    });

    this.animalList.forEach((animal: WildAnimal) => {
      animal.update(elapsed);
    })

    if (this.npcTutorialStep2ShouldSpawn) {
      if (this.tutorialStep2.getPosY() < 200) {
        this.tutorialStep2.move(3);

        this.talkToTutorialStep2 = true;
      }
    }

    if (this.bully?.getPosY() >= 145) {
      this.scoreItems = this.scoreItems.filter((scoreItem) => !(JSON.stringify(this.tutorialStep2) === JSON.stringify(scoreItem)));
    } 

    if (this.displayEffect) {
      this.displayTime -= 7;
    }
    if (this.displayEffect && this.displayTime < 0) {
      this.displayEffect = false;
      this.displayTime = 1000;
    }
    return null;
  }

  private setDialogText(textArray: string[]): void {
    console.log(textArray)
    const h1Prompt: HTMLElement = document.querySelector('#h1-prompt');
    const pDialog: HTMLElement = document.querySelector('#p-dialog')
    const dialogButtons: HTMLElement[] = [document.querySelector('#option1'), document.querySelector('#option2'), document.querySelector('#option3')]

    h1Prompt.innerHTML = textArray[0];
    pDialog.innerHTML = textArray[1];
    dialogButtons[0].innerHTML = textArray[2];
    dialogButtons[1].innerHTML = textArray[3];
    dialogButtons[2].innerHTML = textArray[4];
  }

  public render(canvas: HTMLCanvasElement): void {
    this.animalList.forEach((animal: WildAnimal) => {
      animal.render(canvas);
    })
    this.scoreItems.forEach((scoreItem: ScoreItem) => {
      scoreItem.render(canvas);
    });
    this.pet?.render(canvas);
    this.player.render(canvas);

    if (this.displayEffect) {
      if (this.displayTime < 1000) {
        CanvasUtil.drawImage(canvas, CanvasUtil.loadNewImage('./assets/cardforPointsSmall.png'), canvas.width / 2 - 75, canvas.height / 2 - 75)
      }
      CanvasUtil.writeTextToCanvas(canvas, `+${this.player.getPointsAdded()}`, canvas.width / 2, canvas.height / 2 + 58, 'center', 'Pixelade', 24, 'white');
    }

    CanvasUtil.writeTextToCanvas(canvas, `Points: ${this.player.getPoints()}`, (canvas.width - 1100) / 2, 48, 'right', 'Pixelade', 32, 'white');
    

    const dialogBox: HTMLElement = document.querySelector('.dialog-box');
    const pPrompt: HTMLElement = document.querySelector('.p-prompt');
    if (this.isInteractable) {
      dialogBox.style.display = 'block';
      dialogBox.lastElementChild.innerHTML = 'Press [E]';

    } else if (this.isEnterable) {
      dialogBox.style.display = "block";      
      dialogBox.lastElementChild.innerHTML = 'Press [F]';
    } else {
      dialogBox.style.display = "none";
    }

    const dialogPrompt: HTMLElement = document.querySelector('#dialog-host');
    if (this.isInDialogue) {
      this.isInteractable = false;
      dialogPrompt.style.display = "block";
    } else {
      dialogPrompt.style.display = "none";
    }
    if (this.talkToTutorialStep2) {
      CanvasUtil.writeTextToCanvas(canvas, '[!]', window.innerWidth / 2 + 25, window.innerHeight / 2 - 220, 'center', 'Pixelade', 58, 'red');
    }
  }
}
