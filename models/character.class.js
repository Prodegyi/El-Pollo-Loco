class Character extends moveableObject{
    height = 280;
    width = 140;
    y = 180;
    IMAGES_Walking = [
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
        this.loadImages(this.IMAGES_Walking)

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.Keyboard.Right) {
                this.moveRight();
            
        let i = this.currentImage % this.IMAGES_Walking.length;
        let path = this.IMAGES_Walking[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }
        }, 1000 / 10);
    }

    jump() {
    }
}