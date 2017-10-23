import Phaser from 'phaser'
import Fox from '../sprites/Fox'
import Mouse from '../sprites/Mouse'
import { initText } from '../utils'

export default class extends Phaser.State {
  init() {
    this.waitTime = 100;
    this.checkTime = 100;
    this.gamestate = 'wait';
  }
  create() {
    this.audio = {
      hello: this.add.audio('hello'),
      goodbye: this.add.audio('goodbye')
    }
    this.BG = this.add.sprite(0, 0, 'BG');
    this.cloud = this.add.sprite(0, 0, 'cloud');
    this.mouse = new Mouse(this.game);
    this.fox = new Fox(this.game);
    this.ground = this.add.sprite(0, 0, 'ground');

    let style = { font: '40px Arial', fill: '#ffffff', align: 'center' };
    this.HelloText = this.add.text(180, 120, 'Hello', style);
    this.GoodByeText = this.add.text(180, 120, 'GoodBye', style);
    initText([this.HelloText, this.GoodByeText]);
    this.btn = {
      Area: this.add.graphics()
        .beginFill(0xffffff)
        .drawRect(120, 170, 120, 70)
    }
    this.btn.Area.events.onInputDown.add(this.correctAnswer, this);
    this.btn.Area.inputEnabled = false;
    this.btn.Area.alpha = 0;

    this.waitForQuestion();
    this.mouse.alpha = 0;
  }
  waitForQuestion() {
    this.fox.animations.play('standing');
  }
  newQuestion() {
    this.mouse.alpha = 1;
    this.checkTime = 300;
    this.gamestate = 'check';
    this.btn.Area.inputEnabled = true;
    this.add.tween(this.HelloText.scale).to({ x: 1, y: 1 }, 200, 'Quad.easeInOut', true);
    this.mouse.animations.play('show');
    this.audio.hello.play();
  }
  correctAnswer() {
    this.btn.Area.inputEnabled = false;
    this.gamestate = 'wait';
    this.waitTime = 300;
    this.add.tween(this.HelloText.scale).to({ x: 0, y: 0 }, 200, 'Quad.easeInOut', true);
    this.fox.animations.play('hitting');
    this.mouse.animations.play('ByHit')
      .onComplete.add(this.waitForQuestion, this);
  }
  wrongAnswer() {
    this.waitTime = 300;
    this.btn.Area.inputEnabled = false;
    this.mouse.animations.play('hide');
    this.fox.animations.play('fail');
    this.add.tween(this.HelloText.scale).to({ x: 0, y: 0 }, 200, 'Quad.easeInOut', true);
  }
  update() {
    if (this.gamestate === 'wait') {
      this.waitTime--;
      if (this.waitTime === 0) {
        this.newQuestion();
      }
    }
    if (this.gamestate === 'check') {
      this.checkTime--;
      if (this.checkTime === 0) {
        this.wrongAnswer();
        this.gamestate = 'wait';
      }
    }
  }
}
