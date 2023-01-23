import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import Level1 from './Level1.js';
import Player from './Player.js';
import Pet from './Pet.js';
import SceneInstructions from './SceneInstructions.js';

export default class SceneStart extends Scene {
  private starting: boolean;

  private logo: HTMLImageElement;

  private initiatePlayer: Player;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.logo = CanvasUtil.loadNewImage('./assets/logo.png');
  }

  public processInput(keyListener: KeyListener): void {
    [...document.querySelector('.gender').children].forEach((element: HTMLImageElement) => element.onclick = () => {
      document.querySelector('.gender').removeChild(element);
      this.starting = true;
    });

  }

  public update(elapsed: number): Scene {
    if (this.starting) return new SceneInstructions(this.maxX, this.maxY, new Level1(this.maxX, this.maxY, this.initiatePlayer = new Player(this.maxX / 2, 550), 0, null), 'People with [!] above their heads are important.', 'People with [?] above their heads have something useful.', 'Press [E] to interact.', '[W], [A], [S], and [D] to move around the map,');
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, '#A8A8A8');
    CanvasUtil.drawImage(canvas, this.logo, (canvas.width - this.logo.width) / 2, (canvas.height - this.logo.height) / 2);
    CanvasUtil.writeTextToCanvas(canvas, 'Use your mouse to:', (canvas.width + 20) / 2, 200, 'center', 'Pixelade', 48, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'Pick your [Character]', (canvas.width + 20) / 2, 260, 'center', 'Pixelade', 48, 'white');
  }
}