class Load extends Phaser.Scene{
    constructor(){
        super('loadScene');
    }

    preload(){
        // set up loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        // let loading = this.add.graphics();
        // // see: https://photonstorm.github.io/phaser3-docs/Phaser.Loader.Events.html
        // this.load.on('progress', (value)=> {
        //     loading.clear();                            // reset fill/line style
        //     loading.fillStyle(0x911C1C, 1);             // (color, alpha)
        //     loading.fillRect(30, 300, game.config.width*value, 15);  // (x, y, width, height)
        // });
        // this.load.on('complete', ()=> {
        //     loading.destroy();
        // });

        // set the load path
        this.load.path = './assets/'

        // load images
        this.load.image('empty room', 'isometric room 1.png');
        //this.load.image('furn room', '')

        this.load.image("title_bg", "title_bg.jpeg");

        this.load.image("options_button", "options_button.png");

        this.load.image("play_button", "play_button.png");

        this.load.image("logo", "title.png");

        this.load.spritesheet("cat", "cat.png", {
            frameHeight: 32, 
            frameWidth: 32
        });

        this.load.spritesheet("icons", "CuteRPG_Icons03.png", {
            frameHeight: 32, 
            frameWidth: 32
        });

        // create the loading bar
        let loading = this.add.graphics({
            fillStyle: {
                color: 0xffffff // white    
            }
        });
        // loader events: 
        //     complete - when done loading everything
        //     progress - loader number progress is in decimal 
        this.load.on("progress", (percent)=> {
            loading.fillRect(0, this.game.renderer.height/2, this.game.renderer.width * percent, 50);
            //console.log(percent);
        });

        this.load.on("complete", ()=>{
            this.scene.start('menuScene');
        });

        // // simulate large load
        // for(let i = 0; i < 200; i++){
        //     this.load.spritesheet("cat" + i, "cat.png", {
        //         frameHeight: 32, 
        //         frameWidth: 32
        //     });
        // }


    }

    create(){

    }

    update(){

    }

}