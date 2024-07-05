"use strict"

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    scene: [Load, Menu, Night1],
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min:{   
            width: 800,
            height: 600

        }
    }
}

let game = new Phaser.Game(config);

let cursors;
let {height, width} = game.config;
let midX = width/4;
let midY = height/4;