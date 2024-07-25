class Task extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, direction, name, camera, player, cooldown, completion){
        super(scene, x, y, texture);
        scene.add.existing(this);
        // add this if we need physics for some reason 
        //scene.physics.add.existing(this);

        this.direction = direction; // use this to set little icon tails?
        this.name = name;
        this.image = texture; 
        this.cooldown = cooldown;
        this.completion_time = completion;
        this.playerPosX = player.x;
        this.playerPosY = player.y; 
    }

}