class moveableObject{
    x = 120;
    y = 160;
    height = 150; 
    width = 100;
    img;
    ImageCache = [];
    speed = 0.25;
    speedY = 0;
    accelaration = 2.5;
   
    
    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY < 0){
            this.y += this.speedY;
            this.speedY += this.accelaration;
            }
        }, 1000 / 25);
    }

    isAboveGround(){
        return this.y < 160;
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.ImageCache[path] = img;
     });
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof chicken || this instanceof endboss){
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "red";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
    }

    moveRight(){ 
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    playAnimation(img){
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = img[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    jump(){
        this.speedY = -32;
    }

    //is colliding(chicken)
    isColliding(mo){ 
        return this.x + this.width > mo.x &&
               this.y + this.height > mo.y &&
               this.x < mo.x &&
               this.y < mo.y + mo.height;
    }

}