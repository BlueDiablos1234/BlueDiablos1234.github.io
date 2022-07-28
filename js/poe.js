const opsc = document.getElementById("OPSC-pdf");
const xisd = document.getElementById("XISD-pdf");

document.getElementById('OPSC').addEventListener('click', function() {
    none();
    opsc.classList.remove("hidden");
});
document.getElementById('XISD').addEventListener('click', function() {
    none();
    xisd.classList.remove("hidden");
});

function none() {
    opsc.classList.add("hidden");
    xisd.classList.add("hidden");
}