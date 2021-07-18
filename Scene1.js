class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("background", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\assets\background.png");
       
        this.load.spritesheet("ship", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\spritesheets\ship.png",{
            frameWidth: 16,
            frameHeight: 16

        });
        //this.load.image("ship2","C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\assets\ship2.png");
        //this.load.image("ship3","C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\assets\ship3.png");
        this.load.spritesheet("ship2", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\spritesheets\ship2.png",{
            frameWidth: 32,
            frameHeight: 16

        });
        this.load.spritesheet("ship3", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\spritesheets\ship3.png",{
            frameWidth: 32,
            frameHeight: 32

        });
        this.load.spritesheet("explosion", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\spritesheets\explosion.png",{
            frameWidth: 16,
            frameHeight: 16

        });
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
    
}