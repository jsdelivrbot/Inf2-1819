TweenMax.to('#boks1',2, {
    x:165,
    y:160
});

TweenMax.to('#boks2',2, {x:165});
TweenMax.to('#boks2',2, {y:160, delay:2});
TweenMax.to('#boks2',2, {x:0, delay:4});
TweenMax.to('#boks2',2, {y:0, delay:6});

TweenMax.to('#boks3',1, {
    x:80,
    y:80
});
TweenMax.to('#boks3',6,{rotation:1080, delay:1});

TweenMax.from('#boks4',2,{x:1000});

TweenMax.from('#boks5', 2, {
    opacity:0,
    scale:0,
    y:-400,
    ease: Elastic.easeOut.config(1, 0.3),
});

TweenMax.from('#boks6', 2, {
    opacity:0,
    scale:0,
    y:-400,
    x:-400,
    ease: Elastic.easeOut.config(1, 0.3),
    yoyo:true,
    repeat:6
});

TweenMax.to('#boks7', 1, {
    rotation: 360,
    x:80,
    y:80,
    scale:6,
    repeat: 5,
    yoyo: true
});

TweenMax.to('#propell', 10, {
    rotation: 10800,
    repeat: 5,
    yoyo: true
});
