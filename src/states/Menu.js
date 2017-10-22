import Phaser from 'phaser'

export default class extends Phaser.State {
  create() {
    this.BG = this.add.sprite(0, 0, 'BG');
    this.cloud = this.add.sprite(0, 0, 'cloud');

    this.ground = this.add.sprite(0, 0, 'ground');
  }
}
