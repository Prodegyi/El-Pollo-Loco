class World {
  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.keyboard = keyboard;

    this.camera_x = -100;

    this.level = level1;
    this.character = new Character(this);
    this.statusbar = new Statusbar();
    this.throwableObjects = [];

    this.draw();
    this.run();
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 1000 / 60);
  }

  checkThrowObjects() {
    if (this.keyboard.E) {
      const bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusbar.setPercentage(this.character.energy);
      }
    });
  }

  draw() {
    this.updateCamera();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);

    this.addToMap(this.statusbar);

    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);

    requestAnimationFrame(() => this.draw());
  }

  addObjectsToMap(objects) {
    if (!objects || !Array.isArray(objects)) {
      return;
    }

    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  updateCamera() {
    const cameraOffset = this.canvas.width / 2 - this.character.width / 2;

    const maxLeft = 0;
    const maxRight = -this.level.levelEndX + this.canvas.width;

    let cameraX = -this.character.x + cameraOffset;

    cameraX = Math.min(maxLeft, cameraX);
    cameraX = Math.max(maxRight, cameraX);

    this.camera_x = cameraX;
}

}
