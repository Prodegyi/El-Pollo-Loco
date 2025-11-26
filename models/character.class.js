class Character extends moveableObject{
    height = 280;
    width = 140;
    y = 180;
    speed = 5;
    IMAGES_WALKING = [
        '../img/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
        '../img/img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
        '../img/img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
        '../img/img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
        '../img/img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
        '../img/img_pollo_locco/img/2_character_pepe/2_walk/W-26.png',
    ];
    currentImage = 0;
    world;
          
    
    constructor(){
        super().loadImage('../img/img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING)

        this.animate();
    }

    animate() {

        setInterval(() => {
             if (this.world.Keyboard.Right && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
        } 

        if (this.world.Keyboard.Left && this.x > 100) {
                this.x -= this.speed;
                this.otherDirection = true;
        } 
        this.world.camera_x = -this.x + 100;
    },1000 / 60);


        setInterval(() => {
            if (this.world.Keyboard.Right || this.world.Keyboard.Left) {
                this.playAnimation(this.IMAGES_WALKING);
    }
        }, 1000 / 10);
    }

    

    jump() {
    }
}