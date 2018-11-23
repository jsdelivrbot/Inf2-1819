let liste = [10, 31, 5, 7, 14, 19, 28];

let knappE = document.querySelector('#knapp');
let gridE = document.querySelector('#grid');

let i = 0;
knappE.addEventListener('click', function () {
    if(i < 7){
        gridE.innerHTML += `<div class="kule" id="kule${i}"><div class="tall" id="tall${i}">${liste[i]}</div></div>`;
        TweenMax.from(`#kule${i}`, 1.2, {x:1400, rotation:-30});
        TweenMax.from(`#kule${i}`,1, {ease: Bounce.easeOut, y: -300});
        TweenMax.from(`#tall${i}`, 1.3, {rotation:720,});
    i++
    }
});


