import 'phaser';

export default class Ball extends Phaser.Sprite {
  constructor(game) {
    super(game, game.world.width / 2, game.world.height, 'ball');

    this.anchor.setTo(-0.5, 1);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.enable = true;
    this.body.bounce.setTo(1, 1);
    this.body.collideWorldBounds = true;
    game.add.existing(this);
  }
}
