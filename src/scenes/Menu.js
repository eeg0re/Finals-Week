class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){

    }

    create(){
        console.log("in menu scene");
        this.cameras.main.setBackgroundColor(0,0,0);
    }

    update(){
        
    }
}