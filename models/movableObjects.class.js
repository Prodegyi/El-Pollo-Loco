class moveableObject extends drawableObject{
    speed = 0.25;
    speedY = 0;
    accelaration = 2.5;
    energy = 100;
    lastHit = 0;
    currentState = 'Idle';
   
    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY < 0){
            this.y += this.speedY;
            this.speedY += this.accelaration;
            }
        }, 1000 / 25);
    }

    isAboveGround(){
        if(this instanceof ThrowableObject){
            return true;
        } else {
            return this.y < 160;
        }   
    }

    moveRight(){ 
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    playAnimation(img){
        let i = this.currentImage % img.length;
        let path = img[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    jump(){
        this.speedY = -32;
    }

    isColliding(mo){ 
        return this.x + this.width > mo.x &&
               this.y + this.height > mo.y &&
               this.x < mo.x &&
               this.y < mo.y + mo.height;
    }

    hit(){
        this.energy -= 1; 
        if (this.energy < 0) {
            this.energy = 0;
        }else{
            this.lastHit = new Date().getTime();
        }
    }

    isDead(){
        return this.energy == 0;
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    setState(newState){
        if (this.currentState !== newState) {
            this.currentState = newState;
            this.currentImage = 0;
        }
    }

}