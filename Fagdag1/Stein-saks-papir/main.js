let bilderSpiller = document.querySelectorAll('.spiller');
let bildeMaskin = document.querySelector('#maskin');
let poengSpillerE = document.querySelector('#poengSpiller');
let poengMaskinE = document.querySelector('#poengSpiller');

let bilderMaskin = ['maskin_stein.png', 'maskin_saks.png', 'maskin_papir.png'];

let poengSpiller = 0;
let poengMaskin = 0;
let stein = 0;
let saks = 1;
let papir = 2;

bilderSpiller.forEach(klikkhandling);

function klikkhandling(bilde, valgSpiller){
    bilde.addEventListener('click', function () {
        let valgMaskin = Math.floor(Math.random()*3);
        bildeMaskin.src = `bilder/${bilderMaskin[valgMaskin]}`;

        if(valgSpiller === valgMaskin){
            console.log('uavgjort');
        }
        else if(valgSpiller === stein && valgMaskin === saks ||
                valgSpiller === saks && valgMaskin === papir ||
                valgSpiller === papir && valgMaskin === stein ){
            poengSpiller++;
            poengSpillerE.innerHTML = poengSpiller;
        }
        else{
            poengMaskin++;
            poengMaskinE.innerHTML = poengMaskin;

        }
    })
}