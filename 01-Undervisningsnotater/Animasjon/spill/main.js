

TweenMax.to('.bokser', 3, { x: -900, onUpdate: doHitTest });

document.addEventListener("keydown", function(e) {
    if(event.which === 32){
        TweenMax.to('#boks', 0.3, {ease: Power2.easeOut, y:-200, repeat:1, yoyo:true});
    }
});

function doHitTest() {
    let test = Draggable.hitTest("#boks", ".bokser");
    if (test) {
        alert('!!!')
    }
}