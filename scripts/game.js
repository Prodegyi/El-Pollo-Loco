let canvas;
let world;
let Keyboard = new keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, Keyboard);

}

window.addEventListener("keydown",(e) => {
    if(e.keyCode == 68){
        Keyboard.Right = true;
    }

    if(e.keyCode == 65){
        Keyboard.Left = true;
    }

    if(e.keyCode == 32){
        Keyboard.Space = true;
    }

    if(e.keyCode == 87){
        Keyboard.Up = true;
    }

    if(e.keyCode == 83){
        Keyboard.Down = true;
    }

     if(e.keyCode == 69){
        Keyboard.E_button = true;
    }
});

window.addEventListener("keyup",(e) => {
    if(e.keyCode == 68){
        Keyboard.Right = false;
    }

    if(e.keyCode == 65){
        Keyboard.Left = false;
    }

    if(e.keyCode == 32){
        Keyboard.Space = false;
    }

    if(e.keyCode == 87){
        Keyboard.Up = false;
    }

    if(e.keyCode == 83){
        Keyboard.Down = false;
    }

     if(e.keyCode == 69){
        Keyboard.E_button = false;
    }
});