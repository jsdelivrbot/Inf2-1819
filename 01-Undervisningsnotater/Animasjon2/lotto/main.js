window.onload = function () {
    let knappE = document.querySelector('#knapp');
    let gridE = document.querySelector('#grid');
    let tallE = document.querySelectorAll('.tall');
    let kuleE = document.querySelectorAll('.kule');


    let tall = [2,31,12,19,12,8,6];
    let i = 0;

    knappE.addEventListener('click', function () {
        if(i<7){
            tallE[i].innerHTML = tall[i];

            TweenMax.from(kuleE[i],1.5, {x:900});
            TweenMax.from(kuleE[i],1, {
                ease: Bounce.easeOut,
                y: -500,
            });
            TweenMax.from(tallE[i],1.5, {rotation:720});
            kuleE[i].style.display = 'block';
            i++;
        }
    });
};