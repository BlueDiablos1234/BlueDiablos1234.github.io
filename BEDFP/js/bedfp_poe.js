var x = false;
const efwi = document.getElementById("EFWI-pdf");
const mced = document.getElementById("MCED-pdf");
const pret = document.getElementById("PRET-pdf");
const tala = document.getElementById("TALA-pdf");
const tmss = document.getElementById("TMSS-pdf");

document.getElementById('EFWI').addEventListener('click', function() {
    none();
    efwi.classList.remove("hidden");
});
document.getElementById('MCED').addEventListener('click', function() {
    none();
    mced.classList.remove("hidden");
});
document.getElementById('PRET').addEventListener('click', function() {
    none();
    pret.classList.remove("hidden");
});
document.getElementById('TALA').addEventListener('click', function() {
    none();
    tala.classList.remove("hidden");
});
document.getElementById('TMSS').addEventListener('click', function() {
    none();
    tmss.classList.remove("hidden");
});

function none() {
    efwi.classList.add("hidden");
    mced.classList.add("hidden");
    pret.classList.add("hidden");
    tala.classList.add("hidden");
    tmss.classList.add("hidden");
}