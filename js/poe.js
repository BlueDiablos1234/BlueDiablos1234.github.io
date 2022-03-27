var x = false;
const addb = document.getElementById("ADDB-pdf");
const isec = document.getElementById("ISEC-pdf");
const opsc = document.getElementById("OPSC-pdf");
const wede = document.getElementById("WEDE-pdf");

document.getElementById('ADDB').addEventListener('click', function() {
    none();
    addb.classList.remove("hidden");
});
document.getElementById('ISEC').addEventListener('click', function() {
    none();
    isec.classList.remove("hidden");
});
document.getElementById('OPSC').addEventListener('click', function() {
    none();
    opsc.classList.remove("hidden");
});
document.getElementById('WEDE').addEventListener('click', function() {
    none();
    wede.classList.remove("hidden");
});

function none() {
    addb.classList.add("hidden");
    isec.classList.add("hidden");
    opsc.classList.add("hidden");
    wede.classList.add("hidden");
}