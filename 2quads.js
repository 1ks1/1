document.body.innerHTML = '';
var speed = 5;


function CrEl(col)
{   
    player = document.createElement('div');
    player.id = player;
    player.style.height = '100px';
    player.style.width = '100px';
    player.style.position = 'absolute';
    player.style.backgroundColor = col;
    player.style.top = '0px';
    player.style.left = '0px';
    player.style.borderRadius = '50%';
    document.body.appendChild(player);
    return player;
    console.log(player);
}

player_el = CrEl('rgba(0,255,0,.5)');
player_el2 = CrEl('rgba(255,0,0,.5)');
player_el3 = CrEl('rgba(0,0,255,.5)');


var keyState = {
    up: false,
    down: false,
    left: false,
    right: false,
    up2: false,
    down2: false,
    left2: false,
    right2: false
};

var position = {
   top: 0,
   left: 0  
};
var position2 = {
   top: 0,
   left: 0  
};
var position3 = {
   top: 0,
   left: 0  
};

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown') {
        keyState.down = true;
    } else if (event.code === 'ArrowUp') {
        keyState.up = true;
    } else if (event.code === 'ArrowLeft') {
        keyState.left = true;
    } else if (event.code === 'ArrowRight') {
        keyState.right = true;
    }

    if (event.code === 'KeyS') {
        keyState.down2 = true;
    } else if (event.code === 'KeyW') {
        keyState.up2 = true;
    } else if (event.code === 'KeyA') {
        keyState.left2 = true;
    } else if (event.code === 'KeyD') {
        keyState.right2 = true;
    }

        if (event.code === 'Numpad2') {
        keyState.down3 = true;
    } else if (event.code === 'Numpad8') {
        keyState.up3 = true;
    } else if (event.code === 'Numpad4') {
        keyState.left3 = true;
    } else if (event.code === 'Numpad6') {
        keyState.right3 = true;
    }
})

document.addEventListener('keyup', function(event) {
    if (event.code === 'ArrowDown') {
        keyState.down = false;
    } else if (event.code === 'ArrowUp') {
        keyState.up = false;
    } else if (event.code === 'ArrowLeft') {
        keyState.left = false;
    } else if (event.code === 'ArrowRight') {
        keyState.right = false;
    }

    if (event.code === 'KeyS') {
        keyState.down2 = false;
    } else if (event.code === 'KeyW') {
        keyState.up2 = false;
    } else if (event.code === 'KeyA') {
        keyState.left2 = false;
    } else if (event.code === 'KeyD') {
        keyState.right2 = false;
    }


    if (event.code === 'Numpad2') {
        keyState.down3 = false;
    } else if (event.code === 'Numpad8') {
        keyState.up3 = false;
    } else if (event.code === 'Numpad4') {
        keyState.left3 = false;
    } else if (event.code === 'Numpad6') {
        keyState.right3 = false;
    }

})


var actionInterval = setInterval(function() {
    if (keyState.up) {
        position.top--;
    }

    if (keyState.down) {
        position.top++;
    }
    
    if (keyState.left) {
        position.left--;
    }

    if (keyState.right) {
        position.left++;
    }


    if (keyState.up2) {
        position2.top--;
    }

    if (keyState.down2) {
        position2.top++;
    }
    
    if (keyState.left2) {
        position2.left--;
    }

    if (keyState.right2) {
        position2.left++;
    }




    if (keyState.up3) {
        position3.top--;
    }

    if (keyState.down3) {
        position3.top++;
    }
    
    if (keyState.left3) {
        position3.left--;
    }

    if (keyState.right3) {
        position3.left++;
    }


});


var drawInterval = setInterval(function() {
    player_el.style.top = position.top + 'px';
    player_el.style.left = position.left + 'px';

    player_el2.style.top = position2.top + 'px';
    player_el2.style.left = position2.left + 'px';

    player_el3.style.top = position3.top + 'px';
    player_el3.style.left = position3.left + 'px';
}, (1000/30));