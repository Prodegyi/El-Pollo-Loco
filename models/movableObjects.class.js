class MoveableObject extends DrawableObject{
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
            }else {
            this.speedY = 0;
            this.isJumping = false;
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

    playAnimation(images) {
    if (!images || images.length === 0) {
        return;
    }

    const path = images[this.currentImage % images.length];
    const img = this.imageCache[path];

    if (!img) {
        return;
    }

    this.img = img;
    this.currentImage++;
}


    jump(){
        this.speedY = -32;
        this.isJumping = true;
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