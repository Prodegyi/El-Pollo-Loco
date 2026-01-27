class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;

  x = 120;
  y = 160;
  height = 150;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(paths) {
    paths.forEach(path => {
      const img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    if (!this.img) {
      return;
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (!this.showFrame) {
      return;
    }

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}
