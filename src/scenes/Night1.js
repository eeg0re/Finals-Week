class Night1 extends Phaser.Scene{
    constructor(){
        super('night1Scene');
    }

    preload(){

    }

    create(){
        console.log("starting night 1");
        this.cameras.main.setBackgroundColor(0,50,50);
        this.add.image(midX, midY, 'empty room').setOrigin(0);
    }
    
    update(){
        
    }
}