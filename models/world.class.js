class World{

     character = new Character();
     enemies = [
        new chicken(), 
        new chicken(), 
        new chicken()
    ];

    clouds = [
        new cloud(),
    ];

    backgroundObjects = [
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/air.png', 0, 0,),
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 0, 0,),
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 0, 80,),
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 0, 80,),
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 0, 80,),
        
    ];

     canvas;
     ctx;
     Keyboard;

     constructor(canvas, Keyboard){
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.Keyboard = Keyboard;
        this.Draw();
        this.setWorld();
     }

     setWorld(){
        this.character.world = this;
     }

    //Draw() wird immer wieder aufgerufen
    Draw(){

        this.ctx.clearRect(0, 0, this.canvas.width,this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        
        

        let self = this;
        requestAnimationFrame(function () {
            self.Draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}