$(document).ready(function() {
    var keyCodes= {
        left : 37,
        up : 38,
        right : 39,
        down : 40
    };
    $(document).keydown(function(e){
        if (
                e.keyCode == keyCodes.left ||
                e.keyCode == keyCodes.up ||
                e.keyCode == keyCodes.right ||
                e.keyCode == keyCodes.down
        ) {
           console.log( "control key pressed" );
           return false;
        }
    });
});

