var x = false;
const addb = document.getElementById("ADDB-pdf");
const isec = document.getElementById("ISEC-pdf");
const opsc = document.getElementById("OPSC-pdf");
const wede = document.getElementById("WEDE-pdf");

document.getElementById('ADDB').addEventListener('click', function() {
    poeNone();
    addb.classList.remove("hiddenPoe");
});
document.getElementById('ISEC').addEventListener('click', function() {
    poeNone();
    isec.classList.remove("hiddenPoe");
});
document.getElementById('OPSC').addEventListener('click', function() {
    poeNone();
    opsc.classList.remove("hiddenPoe");
});
document.getElementById('WEDE').addEventListener('click', function() {
    poeNone();
    wede.classList.remove("hiddenPoe");
});

function poeNone() {
    addb.classList.add("hiddenPoe");
    isec.classList.add("hiddenPoe");
    opsc.classList.add("hiddenPoe");
    wede.classList.add("hiddenPoe");
}