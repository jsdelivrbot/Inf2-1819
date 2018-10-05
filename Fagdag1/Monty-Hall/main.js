let beskjedEl = document.querySelector('p');
let dorer = document.querySelectorAll('img');
dorer.forEach(klikkhandling);

let bilNr = Math.floor(Math.random()*3);
let geitNr = bilNr;

// velger et tilfeldig tall som er ulikt fra bilNr
while (geitNr === bilNr) {
    geitNr = Math.floor(Math.random()*3);
}
//Boolsk variabel for å
valgt = false;

function klikkhandling(dor, valgNr) {
    dor.addEventListener('click', function () {
        let fjernNr = valgNr;

        //Kjører hvis en dør er fjernet
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
        //Fjerner en dør
        else{
            console.log(bilNr);
            while (valgNr === fjernNr || bilNr === fjernNr) {
                fjernNr = Math.floor(Math.random()*3);
            }
            dorer[fjernNr].src = 'bilder/geit.png';
        }
        valgt = true;
    })
}