class Statusbar extends DrawableObject {

    HP_BAR_IMAGES = [
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.HP_BAR_IMAGES);
        this.loadImage(this.HP_BAR_IMAGES[5]);

        this.x = 20;
        this.y = 0;
        this.width = 300;
        this.height = 80;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        const path = this.HP_BAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage === 100) return 5;
        if (this.percentage > 80) return 4;
        if (this.percentage > 60) return 3;
        if (this.percentage > 40) return 2;
        if (this.percentage > 20) return 1;
        return 0;
    }
}
