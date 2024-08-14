class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,  x, y, texture, frame, direction, name){
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this); 

        // set custom player properties
        this.velocity = 200;
        this.direction = direction;
        this.name = name; 

        scene.charFSM = new StateMachine('studying', {
            studying: new StudyState(),
            move: new MoveState(),
            busy: new BusyState(), 
            emergency: new EmergencyState(),
        }, [scene, this]);
    }

    update(){

    }
}

class StudyState extends State{
        enter(scene, character){
            this.studying = true; 
        }

        execute(scene, character){
            
        }
}

class MoveState extends State{
    enter(scene, character){
        this.studying = false; 
    }

    execute(scene, character){

    }
}

class BusyState extends State{
    enter(scene, character){
        this.studying = false;
    }

    execute(scene, character){

    }
}

class EmergencyState extends State{
    enter(scene, character){
        this.studying = false; 
    }

    execute(scene, character){

    }
}