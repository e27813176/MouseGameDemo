import Phaser from 'phaser'

export default class Fox extends Phaser.Sprite {
  constructor ({ game, x, y, key, startframe, endframe, animate }) {
    super(game, x, y, key)
    this.game = game;
    this.walkingSpeed = 4;
    for (let i = 0; i < animate.length; i++) {
      this.animations.add(animate[i], Phaser.Animation.generateFrameNames(`${animate[i]}_`, startframe[i], endframe[i], '.png', 5), 15, true);
    }
  }
  WalkingRight () {
    this.x += this.walkingSpeed;
    this.animations.play('FoxWalkingRight');
  }
  WalkingLeft () {
    this.x -= this.walkingSpeed;
    this.animations.play('FoxWalkingLeft');
  }
  Standing () {
    this.animations.play('FoxStanding');
  }
  update () {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.WalkingRight();
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.WalkingLeft();
    } else {
      this.Standing();
    }
  }
}
