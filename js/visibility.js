const CassCalc = document.getElementById("CassCalc");
const EnhancedPas = document.getElementById("EnhancedPas");
const TimeTable = document.getElementById("TimeTable");
const POE = document.getElementById("POE");
const About = document.getElementById("About");

document.getElementById('cassCalcBtn').addEventListener('click', function() {
    none();
    CassCalc.classList.remove("hidden");
});
document.getElementById('enhancedPasBtn').addEventListener('click', function() {
  none();
  EnhancedPas.classList.remove("hidden");
});
document.getElementById('timeTableBtn').addEventListener('click', function() {
  none();
  TimeTable.classList.remove("hidden");
});
document.getElementById('poeBtn').addEventListener('click', function() {
  none();
  POE.classList.remove("hidden");
});
document.getElementById('timeTableBtn').addEventListener('click', function() {
  none();
  TimeTable.classList.remove("hidden");
});
document.getElementById('aboutBtn').addEventListener('click', function() {
  none();
  About.classList.remove("hidden");
});

function none() {
  CassCalc.classList.add("hidden");
  EnhancedPas.classList.add("hidden");
  TimeTable.classList.add("hidden");
  POE.classList.add("hidden");
  About.classList.add("hidden");
}