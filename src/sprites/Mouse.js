import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor(game, key = 'mouse', x = 0, y = 0) {
    super(game, x, y, key)
    this.game = game;
    let animate = ['show', 'hide', 'ByHit', 'dustball'];
    let startframe = [10, 57, 37, 64];
    let endframe = [25, 63, 56, 70];
    for (let i = 0; i < 4; i++) {
      this[animate[i]] = this.animations.add(animate[i], Phaser.Animation.generateFrameNames(`${animate[i]}_`, startframe[i], endframe[i], '.png', 5), 20, false);
    }
    this.game.add.existing(this);
    this.chain();
  }
  chain() {
    this.hide.onComplete.add(() => {
      this.dustball.play();
    });
  }
}
