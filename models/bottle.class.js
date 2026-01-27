class ThrowableObject extends MoveableObject {
  speedX = 30;
  speedY = 30;

  constructor(x, y) {
    super().loadImage(
      "img/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );

    this.x = 300;
    this.y = 300;
    this.height = 60;
    this.width = 60;
    this.throw(x, y);
  }

  throw(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 1;
    this.applyGravity();
    setInterval(() => {
      this.x += 20;
    }, 20);
  }
}
