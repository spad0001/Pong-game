import VillageDef from './VillageDef.js';
import { GameLoop } from './GameLoop.js';

const game = new VillageDef(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
  console.log('Booted');
});
