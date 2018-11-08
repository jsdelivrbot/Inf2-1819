let beskjedEl = document.querySelector('p');
let dorer = document.querySelectorAll('img');
dorer.forEach(klikkhandling);

let bilNr = Math.floor(Math.random()*3);

//Boolsk variabel for å
valgt = false;


/**
 *
 * @param dor
 * @param valgNr
 */
function klikkhandling(dor, valgNr) {
    dor.addEventListener('click', function () {
        let visNr = valgNr;

        //Kjører hvis en dør er åpnet
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
            // Mony Hall åpner en dør som ikke er bilen
            // eller den du har valgt
            while (valgNr === visNr || bilNr === visNr) {
                visNr = Math.floor(Math.random()*3);
            }
            dorer[visNr].src = 'bilder/geit.png';
            beskjedEl.innerHTML = 'Vil du bytte dør?'
        }
        valgt = true;
    })
}