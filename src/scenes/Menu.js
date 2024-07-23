class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){

    }

    create(){
        // set up keyboard input
        cursors = this.input.keyboard.createCursorKeys();

        //f ================ for when i have music ============================
        //  this.sound.pauseOnBlur = false;
        //  this.sound.play("title_music", {
        //     loop: true
        // })
        // ====================================================================

        // add background
        //this.cameras.main.setBackgroundColor(0,0,0);
        this.add.image(0,0, "title_bg").setOrigin(0).setDepth(0).setScale(0.35);
        // add logo
        this.add.image(this.game.renderer.width/2, this.game.renderer.height*0.2, "logo").setDepth(1).setScale(0.14);
        let playButton = this.add.image(this.game.renderer.width/2, this.game.renderer.height / 2, "play_button").setDepth(1); 
        this.add.image(this.game.renderer.width/2, this.game.renderer.height / 2 + 100, "options_button").setDepth(1); 

        // create sprites
        let hoverSprite = this.add.sprite(100, 100, "cat");
        hoverSprite.setScale(2);

        // change play button size
        playButton.setScale(0.07)
        // make play button interactive
        playButton.setInteractive();

        playButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.x = playButton.x - playButton.width;
            hoverSprite.y = playButton.y
        });

        playButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
        });

        playButton.on("pointerup", ()=>{
            this.scene.start('night1Scene');
        });

    }

    update(){
        // if(Phaser.Input.Keyboard.JustDown(cursors.right)){
        //     this.scene.start('night1Scene');
        // }
    }
}