class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("background", "C:\Annamalai\2021 Summer semester\Web Game Development\7-phaser-tutorial-subrama2\assets\background.png");
    }
    
    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
    
}