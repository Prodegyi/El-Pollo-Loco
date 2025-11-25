class moveableObject{
    x = 120;
    y = 300;
    height = 150; 
    width = 100;
    img;
    ImageCache = [];
    speed = 0.25;

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

    moveRight(){ 
        console.log("move right");
    }

    moveLeft(){
         setInterval(() => {
        this.x -= this.speed; // Geschwindigkeit der Wolke
    }, 1000 / 60); // 60 FPS
        console.log("move left");
    }
}