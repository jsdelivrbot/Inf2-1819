let beskjedEl = document.querySelector('p');
let dorer = document.querySelectorAll('img');
dorer.forEach(klikkhandling);

let bilNr = Math.floor(Math.random()*3);
let geitNr = bilNr;
// velger et tilfeldig tall som er ulikt fra bilNr
while (geitNr === bilNr) {
    geitNr = Math.floor(Math.random()*3);
}
valgt = false;

console.log(bilNr);
console.log(geitNr);


function klikkhandling(dor, valgNr) {
    dor.addEventListener('click', function () {
        let fjernNr = valgNr;
        if(valgt){
            if(valgNr === bilNr){
                dor.src = 'bilder/bil.png';
                beskjedEl.innerHTML = 'Du vant.'
            }
            else{
                dor.src = 'bilder/geit.png';
                beskjedEl.innerHTML = 'Du tapte.'
            }

        }
        else{
            if(valgNr === bilNr){
                while (valgNr === fjernNr) {
                    fjernNr = Math.floor(Math.random()*3);
                }
                dorer[fjernNr].src = 'bilder/geit.png';
            }
            else {
                while (valgNr === fjernNr || valgNr === bilNr) {
                    fjernNr = Math.floor(Math.random()*3);
                }
                dorer[fjernNr].src = 'bilder/geit.png';
            }
            console.log(dorer[fjernNr]);
        }
        valgt = true;
    })
}