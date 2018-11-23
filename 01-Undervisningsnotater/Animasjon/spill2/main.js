var tl1 = new TimelineMax();
tl1.to("#spr", 10, { x: 600, onUpdate: doHitTest });

function doHitTest() {
    var test = Draggable.hitTest("#spr", "#wall");

    if (test) {
        TweenMax.to("#spr", 0.7, {y: 170, x: '+=0', ease: Bounce.easeOut});
        $('#down').off('mousedown');
    }
}