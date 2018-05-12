import Boot from './state/Boot';

export default class Game extends Phaser.Game {
  public constructor() {
    super(100);

    this.state.add('boot', Boot);
  }
}
