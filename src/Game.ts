import 'phaser';

import MainState from './state/MainState';

export default class Game extends Phaser.Game {
  private static instance: Game;

  private constructor() {
    super(window.innerWidth, window.innerHeight, Phaser.AUTO, document.querySelector('#main'));

    this.state.add('main', MainState);
  }

  public static getInstance() {
    if (Game.instance == null) {
      Game.instance = new Game();
    }

    return Game.instance;
  }

  public start(): void {
    this.state.start('main');
  }
}
