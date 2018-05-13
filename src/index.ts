import 'p2';
import 'pixi';

import Game from './Game';

window.addEventListener('load', () => {
  const game = Game.getInstance();
  game.start();
});
