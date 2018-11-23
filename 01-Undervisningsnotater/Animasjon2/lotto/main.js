window.onload = function () {
    let knappE = document.querySelector('#knapp');
    let gridE = document.querySelector('#grid');

    let tall = [2,31,12,19,12,8,6];
    let i = 0;

    knappE.addEventListener('click', function () {
        gridE.innerHTML += ` <div class="kule" id="kule${i}">
                                <div class="tall" id="tall${i}">${tall[i]}</div>
                            </div>
                            `;

        TweenMax.from(`#kule${i}`,2.5, {x:1000});
        TweenMax.from(`#kule${i}`,2, {
            ease: Bounce.easeOut,
            y: -500,
        });
        TweenMax.from(`#tall${i}`,2.5, {rotation:720});

        i++;
    });






};