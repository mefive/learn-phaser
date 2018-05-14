import 'phaser';
const random = require('lodash/random');

const brickImages = [
  'brickGreen',
  'brickPurple',
  'brickRed',
  'brickYellow',
];

export default class Bricks extends Phaser.Group {
  constructor(game) {
    super(game, null, 'bricks', true);

    const rows: number = 3;
    const columns: number = 80;

    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;

    for (let row: number = 0; row < rows; row += 1) {
      for (let column: number = 0; column < columns; column += 1) {
        const brick: Phaser.Sprite = this.create(0, 0, brickImages[random(0, 3)]);

        brick.x = column * brick.width;
        brick.y = row * brick.height;
        brick.body.immovable = true;
      }
    }
  }
}
