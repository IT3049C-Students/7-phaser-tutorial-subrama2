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
        this.load.spritesheet("power-up", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\spritesheets\power-up.png",{
            frameWidth: 16,
            frameHeight: 16

        });
        this.load.spritesheet("player", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\spritesheets\player.png",{
            frameWidth: 16,
            frameHeight: 24

        });
        this.load.spritesheet("beam", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\spritesheets\beam.png",{
            frameWidth: 16,
            frameHeight: 16

        });
        this.load.bitmapFont("pixelFont", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\font\font.png", 
        "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\font\font.xml");
    }

    create() {

        this.add.text(20,20, "Loading game...");
        this.scene.start("playGame");
        var graphics = this.add.graphics();
        graphics.fillStyle(0x0000000, 1);
        graphics.beginPath();
        graphics.moveTo(0,0);
        graphics.lineTo(config.width, 0);
        graphics.lineTo(config.width, 20);
        graphics.lineTo(0,20);
        graphics.lineTo(0, 0);
        graphics.closePath();
        graphics.fillPath();



        this.score = 0;
        this.scorelabel = this.add.bitmapText(10,5, "pixelFont", "SCORE ", 16);

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();

        this.input.on('gameobjectdown', this.destroyShip, this);
        
        this.anims.create({

            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });
        
        this.anims.create({

            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({

            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });
       
        this.anims.create({

            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        });
       
    }
    
}