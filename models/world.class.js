class world {

    character = new Character();
    level = new level1();
    canvas;
    ctx;
    Keyboard;
    camera_x = -100
    statusbar = new Statusbar();
    throwAbleObjects = [new ThrowableObject()];

    constructor(canvas, Keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = new Keyboard();
        this.character = new Character(this);
        this.Draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
          
            this.checkCollisions();
            this.checkThrowObjects(); 
        }, 1000/4);
    }

    checkThrowObjects(){
        if (this.Keyboard.E_button) {
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            this.throwAbleObjects.push(bottle);
        }
    }

    checkCollisions(){
          this.level.enemies.forEach((enemy) => { 
               if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy)
               } ;
            });
    }
    // Draw() wird immer wieder aufgerufen
    Draw() {
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundsObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwAbleObjects)
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.Draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        const flip = mo.otherDirection;

        if (flip) {
          this.flipImage(mo);
        }

        mo.draw(this.ctx) 
        mo.drawFrame(this.ctx);
        
        if (flip) {
         this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {   mo.x = mo.x * -1;
            this.ctx.restore();
    }
}
