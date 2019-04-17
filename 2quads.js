document.body.innerHTML = '';
var speed = 5;
var player_el = document.createElement('div');
player_el.style.height = '100px';
player_el.style.width = '100px';
player_el.style.position = 'absolute';
player_el.style.backgroundColor = 'green';
player_el.style.top = '0px';
player_el.style.left = '0px';

var player_el2 = document.createElement('div');
player_el2.style.height = '100px';
player_el2.style.width = '100px';
player_el2.style.position = 'absolute';
player_el2.style.backgroundColor = 'red';
player_el2.style.top = '5px';
player_el2.style.left = '5px';

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
document.body.appendChild(player_el);
document.body.appendChild(player_el2);

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


});


var drawInterval = setInterval(function() {
    player_el.style.top = position.top + 'px';
    player_el.style.left = position.left + 'px';

    player_el2.style.top = position2.top + 'px';
    player_el2.style.left = position2.left + 'px';
}, (1000/30));