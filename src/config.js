import Phaser from 'phaser';

export default

{
  type: Phaser.AUTO,
  width: 700,
  height: 640,
  scene: {
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};