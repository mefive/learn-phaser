import 'phaser';

const random = require('lodash/random');

const brickImages = [
  'brickGreen',
  'brickPurple',
  'brickRed',
  'brickYellow',
];

import Ball from '../sprites/Ball';
import Bricks from '../sprites/Bricks';

const imgImage = require('../images/ball.png');
const imgBrickGreen = require('../images/brick_green.png');
const imgBrickPurple = require('../images/brick_purple.png');
const imgBrickRed = require('../images/brick_red.png');
const imgBrickYellow = require('../images/brick_yellow.png');

export default class MainState extends Phaser.State {
  private ball: Phaser.Sprite;
  private bricks: Phaser.Group;
  private isShot: boolean;
  private prevVelocityX: number;
  private prevVelocityY: number;

  preload() {
    this.game.load.image('ball', imgImage);
    this.game.load.image('brickGreen', imgBrickGreen);
    this.game.load.image('brickPurple', imgBrickPurple);
    this.game.load.image('brickRed', imgBrickRed);
    this.game.load.image('brickYellow', imgBrickYellow);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // this.game.physics.arcade.gravity.setTo(0, 980);
    this.bricks = new Bricks(this.game);
    //
    this.isShot = false;

    this.game.input.onDown.add(() => {
      this.isShot ? this.stop() : this.shot();
    });

    this.ball = new Ball(this.game);
  }

  update() {
    this.game.physics.arcade.collide(
      this.ball,
      this.bricks,
      (ball, brick) => brick.kill(),
    );
  }

  private shot = () => {
    if (this.isShot) {
      return;
    }

    this.isShot = true;

    this.ball.body.velocity.setTo(-300, 1000);
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
