class chicken extends moveableObject{
    height = 75;
    width = 60;
    y = 375;
    IMAGES_Walking = [
        'img/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    currentImage = 0;

        constructor(){
        super().loadImage('img/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_Walking);
        this.x = 200 + Math.random() * 500; // Zufällige Startposition
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

       animate() {
        this.moveLeft();

        setInterval(() => {
        let i = this.currentImage % this.IMAGES_Walking.length;
        let path = this.IMAGES_Walking[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
        }, 200);
    }

}
