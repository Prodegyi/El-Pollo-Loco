let canvas;
let ctx;
let character = new Image();

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

     character.src = "./img/img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png"

     ctx.drawImage(character, 50, 50, 100, 100);
}