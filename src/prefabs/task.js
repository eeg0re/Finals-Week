class Task extends Phaser.Physics.Arcade.Sprite{
    // constructor(scene, x, y, texture, frame, direction, name, camera, player, cooldown, completion){
    constructor(scene, x, y, texture, frame, direction, name, camera, cooldown, completion){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        // add this if we need physics for some reason 
        //scene.physics.add.existing(this);

        this.direction = direction; // use this to set little icon tails?
        this.name = name;
        this.image = texture; 
        this.cooldown = cooldown;
        this.completion_time = completion;
        // this.playerPosX = player.x;
        // this.playerPosY = player.y; 

        // add the bounce tween 
        this.bounce = scene.tweens.add({
            targets: this,
            y: this.y-10, 
            duration: 500, 
            loop: -1,
            yoyo: true
        });
    }

    update(){

    }

}