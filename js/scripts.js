var activeDirection = null;
var snakeSpeed = 200;

$(document).ready(function() {
    snakeShape = $('.game-window span');
    var keyCodes = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'spacebar'
    };

    $(document).keydown(function(e) {
        var key = keyCodes[e.keyCode];
        if (key) {
            if (key === 'spacebar') {
                if ($('body').hasClass('pause') && activeDirection !== null) {
                    animateSnakeShape(activeDirection);
                } else {
                    snakeShape.stop();
                }
                $('body').toggleClass('pause');
            }
            else {
                if (!$('body').hasClass('pause')) {
                    activeDirection = key;
                    animateSnakeShape(activeDirection);
                }
            }
            return false;
        }
    });

});

function dump(data) {
    console.log(data);
}
function animateSnakeShapehotizontal() {
    var old_position = snakeShape.position();
    snakeShape.stop().animate({
        left: ((activeDirection === 'left' ? old_position.left - 10 : old_position.left + 10)) + 'px'
    }, snakeSpeed, animateSnakeShapehotizontal);
}
function animateSnakeShapevertical() {
    var old_position = snakeShape.position();
    snakeShape.stop().animate({
        top: ((activeDirection === 'up' ? old_position.top - 10 : old_position.top + 10)) + 'px'
    }, snakeSpeed, animateSnakeShapevertical);
}
function animateSnakeShape(direction) {
    if (direction === 'left' || direction === 'right') {
        animateSnakeShapehotizontal();
    }
    if (direction === 'up' || direction === 'down') {
        animateSnakeShapevertical();
    }
}
