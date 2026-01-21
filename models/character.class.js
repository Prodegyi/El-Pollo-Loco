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
  IMAGES_DEAD = [
    "img/img_pollo_locco/img/2_character_pepe/5_dead/D-51.png",
    "img/img_pollo_locco/img/2_character_pepe/5_dead/D-52.png",
    "img/img_pollo_locco/img/2_character_pepe/5_dead/D-53.png",
    "img/img_pollo_locco/img/2_character_pepe/5_dead/D-54.png",
    "img/img_pollo_locco/img/2_character_pepe/5_dead/D-55.png",
    "img/img_pollo_locco/img/2_character_pepe/5_dead/D-56.png",
    "img/img_pollo_locco/img/2_character_pepe/5_dead/D-57.png",
  ];
  IMAGES_HURT = [
    "img/img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png",
    "img/img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png",
    "img/img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png",
  ];

  currentImage = 0;
  world;

  constructor(world) {
    super().loadImage(
      "../img/img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png"
    );
    this.world = world;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT); 
    this.applyGravity();
    this.animate();
  };

  animate() {
    animate() {
    setInterval(() => {
        this.handleMovement()
    }, 1000 / 60);
  }
  }

  handleMovement() {
    if (this.world.keyboard.RIGHT) {
        this.moveRight();
    }

    if (this.world.keyboard.LEFT) {
        this.moveLeft();
    }

    if (this.world.keyboard.SPACE) {
        this.jump();
    }
}
}
