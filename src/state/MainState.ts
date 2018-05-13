import 'phaser';
import Ball from '../sprites/Ball';
const imgImage = require('../images/ball.png');

export default class MainState extends Phaser.State {
  private ball: Phaser.Sprite;
  private isShot: boolean;
  private prevVelocityX: number;
  private prevVelocityY: number;

  preload() {
    this.game.load.image('ball', imgImage);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.ball = new Ball(this.game);

    this.isShot = false;

    this.game.input.onDown.add(() => {
      this.isShot ? this.stop() : this.shot();
    });
  }

  private shot = () => {
    if (this.isShot) {
      return;
    }

    this.isShot = true;

    const x: number = this.prevVelocityX || 500;
    const y: number = this.prevVelocityY || 800;

    this.ball.body.velocity.setTo(x, y);
  }

  private stop = () => {
    if (!this.isShot) {
      return;
    }

    this.isShot = false;

    const { x, y } = this.ball.body.velocity;

    this.prevVelocityX = x;
    this.prevVelocityY = y;

    this.ball.body.velocity.setTo(0, 0);
  }
}
