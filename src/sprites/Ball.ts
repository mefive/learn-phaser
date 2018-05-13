import 'phaser';

export default class Ball extends Phaser.Sprite {
  constructor(game) {
    super(game, game.world.width / 2, game.world.height, 'ball');
    this.anchor.setTo(-0.5, 1);
    game.add.existing(this);

    this.game.physics.arcade.enable(this);
    this.body.enable = true;
    this.body.bounce.set(1);
    this.body.collideWorldBounds = true;
  }
}
