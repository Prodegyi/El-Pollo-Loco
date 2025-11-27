class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    Keyboard;
    camera_x = -100;

    constructor(canvas, Keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.Keyboard = Keyboard;
        this.Draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => { 
                this.character.isColliding(enemy) ? console.log('Collision') : null;
            });
        }, 5);
    }

    // Draw() wird immer wieder aufgerufen
    Draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundsObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
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
