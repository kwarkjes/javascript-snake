var activeDirection = null;
var snakeSpeed = 200;

$(document).ready(function() {
    snakeShape = $('.game-window span');
    var keyCodes= {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'spacebar'
    };
    $(document).keydown(function(e){
        var direction = keyCodes[e.keyCode];
        if (direction) {
           console.log( "You pressed: " + keyCodes[e.keyCode]);
           if(direction === 'left' || direction === 'right') {
                activeDirection = direction;
                animateSnakeShapehotizontal();
           }
           if(direction === 'up' || direction === 'down') {
                activeDirection = direction;
                animateSnakeShapevertical();
           }
           if (direction === 'spacebar') {
               $('body').toggleClass('pause');
               snakeShape.stop();
           }
           return false;
        }
    });
//    dump($('.game-window span').position());
});

function dump(data) {
    console.log(data);
}
function animateSnakeShapehotizontal() {
    var old_position = snakeShape.position();
    snakeShape.stop().animate({
        left : ((activeDirection === 'left' ? old_position.left - 10 : old_position.left + 10))+'px'
    },snakeSpeed,animateSnakeShapehotizontal);
}
function animateSnakeShapevertical() {
    var old_position = snakeShape.position();
    snakeShape.stop().animate({
        top : ((activeDirection === 'up' ? old_position.top - 10 : old_position.top + 10))+'px'
    },snakeSpeed,animateSnakeShapevertical);
}
