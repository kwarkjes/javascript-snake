$(document).ready(function() {
    var keyCodes= {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    $(document).keydown(function(e){
        if (keyCodes[e.keyCode]) {
           console.log( "You pressed: " + keyCodes[e.keyCode]);
           return false;
        }
    });
});

