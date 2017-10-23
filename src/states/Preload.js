import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);
    this.load.setPreloadSprite(this.loaderBar)

    let path = './assets/images/Game/';
    this.load
      .image('BG', path + 'gameBG.jpg')
      .image('cloud', path + 'cloud.png')
      .image('ground', path + 'ground.png')
      .atlas('fox', path + 'fox.png', path + 'fox.json')
      .atlas('mouse', path + 'mouse.png', path + 'mouse.json')
      .audio('hello', './assets/audio/hello.mp3')
      .audio('goodbye', './assets/audio/goodbye.mp3')
      .audio('BG', './assets/audio/BG.mp3')
      .audio('fail', './assets/audio/fail.mp3')
  }
  create() {
    this.state.start('Menu')
  }
}
