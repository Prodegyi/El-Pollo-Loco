let canvas;
let World;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    World = new world(canvas, keyboard);
}

window.addEventListener("keydown",(e) => {
    if(e.keyCode == 68){
        keyboard.Right = true;
    }

    if(e.keyCode == 65){
        keyboard.Left = true;
    }

    if(e.keyCode == 32){
        keyboard.Space = true;
    }

    if(e.keyCode == 87){
        keyboard.Up = true;
    }

    if(e.keyCode == 83){
        keyboard.Down = true;
    }

     if(e.keyCode == 69){
        keyboard.E_button = true;
    }
});

window.addEventListener("keyup",(e) => {
    if(e.keyCode == 68){
        keyboard.Right = false;
    }

    if(e.keyCode == 65){
        keyboard.Left = false;
    }

    if(e.keyCode == 32){
        keyboard.Space = false;
    }

    if(e.keyCode == 87){
        keyboard.Up = false;
    }

    if(e.keyCode == 83){
        keyboard.Down = false;
    }

     if(e.keyCode == 69){
        keyboard.E_button = false;
    }
});