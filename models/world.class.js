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
    }

    setWorld() {
        this.character.world = this;
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
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        console.log(endboss);
        if (flip) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}
