class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("background", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\assets\background.png");
        this.load.image("ship", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\assets\ship.png");
        this.load.image("ship2","C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\assets\ship2.png");
        this.load.image("ship3","C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\assets\ship3.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
    
}