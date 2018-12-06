window.onload = function () {
    let knappE = document.querySelector('#knapp');
    let tallInnE = document.querySelector('#tallInn');
    let inputE = document.querySelector('input');

    TweenMax.to('h1', 2, {text:"This is the new text"});
    TweenMax.to("#spaken",1, {x:120,});
    TweenMax.to("#funksjon",1, {opacity: 1, delay:0.8});

    knappE.addEventListener('click', function () {
        tallInnE.innerHTML = inputE.value;
        tallUt.innerHTML = inputE.value*2+1;
        TweenMax.fromTo(tallInnE, 4,
            {x:130,y:0 },
            {x:130, y:220,
            oncomplete:function () {
                startMaskin();
            }
        });
        TweenMax.to(tallInnE,0.3, {scaleY: 0, opacity:0, delay:2});

    });


    function startMaskin() {
        i = 4;
        TweenMax.to("#maskin",0.1, {fill: "gray", y:4, rotation:-0.3, yoyo:true, repeat:47, delay:i, repeatDelay:0});
        TweenMax.to("#maskinKnapp",1, {x:-4, delay:0});

        let vridereE = document.querySelectorAll('.maskinVridere');
        vridereE.forEach(function (vrider) {
            TweenMax.to(vrider,5, {rotation:360*2, transformOrigin:"center", delay:i+1});
        });

        let lysE = document.querySelectorAll('.lys');
        lysE.forEach(function (lys) {
            TweenMax.to(lys,0.1, {fill: "green", delay:i, yoyo:true, repeat:10, repeatDelay:0});
            i++
        });

        TweenMax.to("#spakKule",1, {y:-30, x:10, delay:i+1});
        TweenMax.to("#spak",1, {rotation:-43, x:-5, delay:i+1});
        TweenMax.fromTo("#tallUt",0.2,
            {scale:0, opacity:0, x:30, y:20, delay:i+2},
            {scale:1, opacity:1, x:0, y:0, delay:i+2});
        TweenMax.to("#tallUt",6, {x:-280, delay:i+2});
        TweenMax.to("#tallUt",1.5, {y:200, rotation:-360, delay:i+6.2});


    }
};



