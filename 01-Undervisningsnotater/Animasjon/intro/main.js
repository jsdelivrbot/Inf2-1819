let tl = new TimelineMax();
tl.staggerTo('.boks', 1,  {
    y:100,
    rotation:720,
    opacity:0.5,
    cycle:{
        scale:[1,2],
        x:[100,200,300],
    },
});

document.querySelector('#reverse').addEventListener('click', function () {
    tl.reverse();
});
document.querySelector('#play').addEventListener('click', function () {
    tl.play();
});