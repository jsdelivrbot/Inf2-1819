let stein = 0;
let saks  = 1;
let papir = 2;

let poengSpiller = 0;
let poengMaskin  = 0;

const bilderMaskin = [
    'maskin_stein.png',
    'maskin_saks.png',
    'maskin_papir.png'
];

const poengSpillerE = document.querySelector('#poengSpiller');
const poengMaskinE  = document.querySelector('#poengMaskin');
const bildeMaskinE  = document.querySelector('#maskin');
// Hente spillerbilder
const bilderSpiller = document.querySelectorAll('.spiller');

//Løkker igjennom spillerbildene og kaller på
// klikkhandling med element og indeks som argument
bilderSpiller.forEach(klikkhandling);

// Legge til klikkhandling
function klikkhandling(bilde, spillerValg) {
   //console.log(bildeNr, bilde);
   bilde.addEventListener('click', function () {
       let maskinValg = Math.floor(Math.random()*3);
       bildeMaskinE.src = `bilder/${bilderMaskin[maskinValg]}`;

       if(spillerValg === maskinValg){
           //alert('Uavgjort');
       }
       else if(
           spillerValg === stein && maskinValg === saks  ||
           spillerValg === saks  && maskinValg === papir ||
           spillerValg === papir && maskinValg === stein
       ){
           //alert('Seier');
           poengSpiller++;
           poengSpillerE.innerHTML = poengSpiller;
       }
       else{
           //alert('Tap');
           poengMaskin++;
           poengMaskinE.innerHTML = poengMaskin;
       }

       if(poengSpiller === 5){
           document.querySelector('#grid').innerHTML =
               `<h1>Du vant!</h1>
                <p>${poengSpiller} - ${poengMaskin}</p>
                `;
       }

       if(poengMaskin === 5){
           document.querySelector('#grid').innerHTML =
               `<h1>Du Tapte!</h1>
                <p>${poengSpiller} - ${poengMaskin}</p>
                `;

       }


   })
}