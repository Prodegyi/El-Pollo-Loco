class Statusbar extends drawableObject{

    HP_BAR_IMAGES = [
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
        "img/img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
    ];

    Percentage = 100;

constructor() {
    super();
    this.loadImages(this.HP_BAR_IMAGES);
    this.setPercentage(100);
    this.x = 20;
    this.y = 0;
    this.width = 300;
    this.height = 80;
}

setPercentage(Percentage){
    this.Percentage = Percentage;
    let path = this.HP_BAR_IMAGES[this.resolveImageIndex()]
    this.img = this.ImageCache[path];
    
}

resolveImageIndex(){
     if(this.Percentage == 100){
        return 5;
    } else if (this.Percentage > 80) {
        return 4;
    } else    if(this.Percentage > 60){
        return 3;
    } else if (this.Percentage > 40) {
        return 2;
    } else if (this.Percentage > 20) {
        return 1;
    } else if (this.Percentage > 0) {
        return 0;
    }
};

}