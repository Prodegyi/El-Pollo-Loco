const BOSS_STATES = {
  WALK: 'walk',
  ALERT: 'alert',
  ATTACK: 'attack',
  HURT: 'hurt',
  DEAD: 'dead'
};

class Endboss extends moveableObject {
  y = 210;
  x = 1250;
  width = 300;
  height = 250;
  speed = 0.6;

  state = BOSS_STATES.WALK;
  energy = 100;
  isPlayingOnceAnimation = false;

  IMAGES_WALKING = [
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png"
  ];

  IMAGES_ALERT = [
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_ATTACK = [
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G13.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G14.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G15.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G16.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G17.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G18.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G19.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png",
    "../img/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  constructor(character) {
    super().loadImage(this.IMAGES_WALKING[0]);

    this.character = character;

    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);

    this.startGameLoop();
  }

  startGameLoop() {
    setInterval(() => this.update(), 1000 / 60);
  }

  update() {
    switch (this.state) {
      case BOSS_STATES.WALK:
        this.handleWalk();
        break;

      case BOSS_STATES.ALERT:
        this.handleAlert();
        break;

      case BOSS_STATES.ATTACK:
        this.handleAttack();
        break;

      case BOSS_STATES.HURT:
        this.handleHurt();
        break;

      case BOSS_STATES.DEAD:
        this.handleDead();
        break;
    }
  }

  /* ---------- STATES ---------- */

  handleWalk() {
    this.moveLeft();
    this.playAnimation(this.IMAGES_WALKING);

    if (this.canSeePlayer()) {
      this.changeState(BOSS_STATES.ALERT);
    }
  }

  handleAlert() {
    if (this.isPlayingOnceAnimation) {
      return;
    }

    this.playOnce(this.IMAGES_ALERT, () => {
      this.changeState(BOSS_STATES.ATTACK);
    });
  }

  handleAttack() {
    this.playAnimation(this.IMAGES_ATTACK);

    if (this.energy <= 0) {
      this.changeState(BOSS_STATES.DEAD);
    }
  }

  handleHurt() {
    if (this.isPlayingOnceAnimation) {
      return;
    }

    this.playOnce(this.IMAGES_HURT, () => {
      this.changeState(BOSS_STATES.ATTACK);
    });
  }

  handleDead() {
    this.speed = 0;
    this.playAnimation(this.IMAGES_DEAD);
  }

  /* ---------- STATE CONTROL ---------- */

  changeState(newState) {
    this.state = newState;
    this.isPlayingOnceAnimation = false;
  }

  /* ---------- HELPERS ---------- */

  canSeePlayer() {
    if (!this.character) {
      return false;
    }

    const distance = Math.abs(this.x - this.character.x);
    return distance < 400;
  }

  takeDamage(amount) {
    if (this.state === BOSS_STATES.DEAD) {
      return;
    }

    this.energy -= amount;

    if (this.energy <= 0) {
      this.changeState(BOSS_STATES.DEAD);
      return;
    }

    this.changeState(BOSS_STATES.HURT);
  }

  playOnce(images, onFinished) {
    this.isPlayingOnceAnimation = true;
    let index = 0;

    const interval = setInterval(() => {
      this.img = this.imageCache[images[index]];
      index++;

      if (index >= images.length) {
        clearInterval(interval);
        this.isPlayingOnceAnimation = false;
        onFinished();
      }
    }, 200);
  }
}
