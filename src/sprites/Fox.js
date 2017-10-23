import Phaser from 'phaser'

export default class Fox extends Phaser.Sprite {
  constructor(game, key = 'fox', x = 0, y = 0) {
    super(game, x, y, key)
    this.game = game;
    let animate = ['standing', 'hitting', 'fail'];
    let startframe = [0, 37, 57];
    let endframe = [9, 46, 85];
    let loop = [true, false, false];
    for (let i = 0; i < 3; i++) {
      this[animate[i]] = this.animations.add(animate[i], Phaser.Animation.generateFrameNames(`${animate[i]}_`, startframe[i], endframe[i], '.png', 5), 20, loop[i]);
    }
    this.game.add.existing(this);
    this.chain();
  }
  chain() {
    this.fail.onComplete.add(() => {
      this.standing.play();
    });
    this.hitting.onComplete.add(() => {
      this.standing.play();
    });
  }
}
