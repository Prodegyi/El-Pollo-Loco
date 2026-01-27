const backgroundObjects = [];

for (let i = 0; i < 12; i++) {
    const x = i * 719;

    backgroundObjects.push(
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/air.png', x, 0),

        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/3_third_layer/1.png', x, 0),
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/3_third_layer/2.png', x, 80),

        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/2_second_layer/1.png', x, 80),
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/2_second_layer/2.png', x, 80),

        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/1_first_layer/1.png', x, 80),
        new BackgroundObject('../img/img_pollo_locco/img/5_background/layers/1_first_layer/2.png', x, 80),
    );
}


const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss(),
    ],
    [
        new Cloud(),
    ],
    backgroundObjects
);