let formE = document.querySelector('#fruktvalg');
let fruktvalgE =
    document.querySelectorAll('input[type="checkbox"]');
let favorittfrukter = [];
/**
 * Funksjon som kjøres når vi sender skjemaet
 * @param e
 */
formE.onsubmit = function (e) {
    // hindrer elementet, formen, å laste på nytt
    e.preventDefault();
    leggTilValgteFrukterTilListe();
    nullstillForm();
    skrivUtFavorittfrukter(favorittfrukter);
};
/**
 * Funksjon som legger til brukerens favorittfrukter
 * til en liste
 */
function leggTilValgteFrukterTilListe() {
    favorittfrukter = [];
    fruktvalgE.forEach(function (frukt) {
        if(frukt.checked){
            favorittfrukter.push(frukt.value);
        }
    });
}

/**
 * Funksjon som nullstiller skjemaet
 */
function nullstillForm() {
    fruktvalgE.forEach(function (frukt) {
        frukt.checked = false;
    });
}

/**
 * Funskjon som skriver ut favorittfruktlista til
 * en ul-liste i domen
 * @param favorittfrukter
 */
function skrivUtFavorittfrukter(favorittfrukter) {
    let favorittfrukterE =
        document.querySelector('#favorittfrukter');
    favorittfrukterE.innerHTML = '';
    favorittfrukter.forEach(function (favorittfrukt) {
        favorittfrukterE.innerHTML +=
            `<li>${favorittfrukt}</li>`
    })
}