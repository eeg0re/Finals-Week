class Timer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,  x, y, texture, frame, name, maximum){
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this); 

        // set custom timer properties
        this.name = name; 
        this.maxCount = maximum;
        this.count = 0;
        this.studyRate = 1;

        scene.timerFSM = new StateMachine('counting', {
            counting: new CountState(),
            frozen: new FrozenState(),
        }, [scene, this]);
    }

    update(){
        // if we reach the maximum count
        if(this.count >= this.maxCount){
            // start the level ending scene
        }

        // check if we should increment the multiplier 
        if(scene.characters.each.studying){
            this.count += this.studyRate;
        }
        
    }
}

class CountState extends State{
    enter(scene, timer){

    }
    execute(scene, timer){

    }
}

class FrozenState{
    enter(scene, timer){

    }
    execute(scene, timer){

    }
}