import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import Preload from './states/Preload'
import Menu from './states/Menu'

class Game extends Phaser.Game {
  constructor() {
    const width = 500
    const height = 300
    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Preload', Preload, false)
    this.state.add('Menu', Menu, false)
    this.state.start('Boot', true, false, 'FishingPage')
  }
}

window.game = new Game()
