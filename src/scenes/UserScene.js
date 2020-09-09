/* eslint-disable class-methods-use-this */
import Phaser from 'phaser';
import config from '../config/config';
import PlayerModel from '../PlayerModel';

export default class UserScene extends Phaser.Scene {
  constructor() {
    super('User');
  }

  create() {
    this.add.image(400, 300, 'sprBg0');
    const element = this.add
      .dom(config.width / 2, config.height / 2 - 200)
      .createFromCache('my_form');

    element.setPerspective(800);
    element.addListener('click');
    element.on('click', (event) => {
      if (event.target.name === 'backButton') {
        element.scene.scene.start('Main');
      }
      if (event.target.name === 'confirmButton') {
        const inputUsername = element.getChildByID('username');
        if (!inputUsername.value) return;
        if (!this.moreThanFourChars(inputUsername.value)) return;

        // console.log(inputUsername.value);
        const playerModel = new PlayerModel();
        playerModel.username = inputUsername.value;
        this.sys.game.globals.playerModel = playerModel;
        element.scene.scene.start('Instructions');
      }
    });
  }

  moreThanFourChars(value) {
    const pattern = /^\w{4,}$/;
    return pattern.test(value);
  }
}
