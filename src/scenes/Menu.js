class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){

    }

    create(){
        // set up keyboard input
        cursors = this.input.keyboard.createCursorKeys();

        // add background
        this.cameras.main.setBackgroundColor(0,0,0);

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(cursors.right)){
            this.scene.start('night1Scene');
        }
    }
}