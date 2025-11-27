class Character extends moveableObject {
  height = 280;
  width = 140;
  y = 180;
  speed = 5;
  speedY = 0;
  IMAGES_WALKING = [
    "../img/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png",
    "../img/img_pollo_locco/img/2_character_pepe/2_walk/W-22.png",
    "../img/img_pollo_locco/img/2_character_pepe/2_walk/W-23.png",
    "../img/img_pollo_locco/img/2_character_pepe/2_walk/W-24.png",
    "../img/img_pollo_locco/img/2_character_pepe/2_walk/W-25.png",
    "../img/img_pollo_locco/img/2_character_pepe/2_walk/W-26.png",
  ];
  IMAGES_JUMPING = [
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png",
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-32.png",
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-33.png",
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-34.png",
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-35.png",
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-36.png",
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-37.png",
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-38.png",
    "img/img_pollo_locco/img/2_character_pepe/3_jump/J-39.png",
  ];
  currentImage = 0;
  world;

  constructor() {
    super().loadImage(
      "../img/img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.Keyboard.Right && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }
      if (this.world.Keyboard.Left && this.x > 100) {
        this.moveLeft();
        this.otherDirection = true;
      }
      if (this.world.Keyboard.Space && !this.isAboveGround()) {
        this.jump();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.Keyboard.Right || this.world.Keyboard.Left) {
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 1000 / 9 );
  }
}
