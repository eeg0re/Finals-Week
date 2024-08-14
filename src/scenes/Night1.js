class Night1 extends Phaser.Scene{
    constructor(){
        super('night1Scene');
    }

    preload(){

    }

    create(){
        // set the background color (temp until background is made)
        this.cameras.main.setBackgroundColor(0,50,50);
        // add the room image         
        this.add.image(midX, midY, 'empty room').setOrigin(0.25).setScale(2);

        // add player sprites 
        this.kitty = this.physics.add.sprite(width/2, height/2, 'cat'); // temp kitty sprite

        // add player(s) to a group 
        this.characters = this.add.group({
            // set properties we want true for characters
            setAllowGravity: false,
            collideWorldBounds: true
        });

        // working on point and click stuff
        this.target = new Phaser.Math.Vector2();
        this.input.on('pointerup', (pointer)=>{
            const {worldX, worldY} = pointer; 
            this.target.x = worldX;
            this.target.y = worldY;
            this.physics.moveToObject(this.kitty, this.target, 200);
        });

        this.task1 = new Task(this, 100, 100, "icons", 5);
    }
    
    update(){
        // more point and click movement stuff
        if(this.kitty.body.speed > 0){
            // get distance between the character and the target
            const d = Phaser.Math.Distance.Between(this.kitty.x, this.kitty.y, this.target.x, this.target.y);
            if(d < 4){
                this.kitty.body.reset(this.target.x, this.target.y);
            }
        }
    }
}