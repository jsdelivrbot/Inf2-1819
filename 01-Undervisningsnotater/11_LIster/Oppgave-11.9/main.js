let formE = document.querySelector("#fruktvalg");
let fruktvalgE = document.querySelectorAll('input[type="checkbox"]');

/**
 * Funksjon som kjøres når vi sender skjemaet
 * @param e
 */
formE.onsubmit = function(e) {
  e.preventDefault(); // hindrer elementet, formen, å laste på nytt

  let favorittfrukter = getFavorittfrukter();
  skrivUtFavorittfrukter(favorittfrukter);
  nullstillForm();
};

/**
 * Funksjon som legger til brukerens favorittfrukter
 * til en liste
 */
function getFavorittfrukter() {
  favorittfrukter = [];
  fruktvalgE.forEach(function(frukt) {
    if (frukt.checked) {
      favorittfrukter.push(frukt.value);
    }
  });
  return favorittfrukter;
}

/**
 * Funksjon som nullstiller skjemaet
 */
function nullstillForm() {
  fruktvalgE.forEach(function(frukt) {
    frukt.checked = false;
  });
}

/**
 * Funskjon som skriver ut favorittfruktlista til
 * en ul-liste i domen
 *
 * @param {string[]} favorittfrukter -En Array med favorittfruktene
 */
function skrivUtFavorittfrukter(favorittfrukter) {
  let favorittfrukterE = document.querySelector("#favorittfrukter");
  favorittfrukterE.innerHTML = "";
  favorittfrukter.forEach(function(favorittfrukt) {
    favorittfrukterE.innerHTML += `<li>${favorittfrukt}</li>`;
  });
}
