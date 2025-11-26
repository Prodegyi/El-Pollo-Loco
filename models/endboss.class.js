class endboss extends moveableObject {
    y = 210;
    x = 1250;
    widht = 300;
    height = 250;
    speed = 0;
  IMAGES_WALKING = [
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.x = 1250;
    //this.speed = 0.55 + Math.random() * 0.5;
    this.animate();
  }

animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }
}
