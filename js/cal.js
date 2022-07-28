const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let date = month[d.getMonth()];
let day = d.getDate()
 document.getElementById("current_date").innerHTML = "Current Month: " + day + " " + date;

const s1 = document.getElementById("S1");
const s2 = document.getElementById("S2");
const s3 = document.getElementById("S3");
const o1 = document.getElementById("O1");
const o2 = document.getElementById("O2");
const o3 = document.getElementById("O3");
const n1 = document.getElementById("N1");
const n2 = document.getElementById("N2");
const n3 = document.getElementById("N3");
const noass = document.getElementById("noAss");

let dates = document.getElementById('dates');
let value = dates.options[dates.selectedIndex].value;

dates.addEventListener("change", function() {
  let value = dates.options[dates.selectedIndex].value;
  console.log("Change!");
  dateChecker(value);
});

const dateChecker = (value) => {
  s1.classList.add("hidden");
  s2.classList.add("hidden");
  s3.classList.add("hidden");
  o1.classList.add("hidden");
  o2.classList.add("hidden");
  o3.classList.add("hidden");
  n1.classList.add("hidden");
  n2.classList.add("hidden");
  n3.classList.add("hidden");
  noass.classList.remove("hidden");

  if(value==="September") {
    s1.classList.remove("hidden");
    s2.classList.remove("hidden");
    s3.classList.remove("hidden");
    noass.classList.add("hidden");
  }
  if(value==="October") {
    o1.classList.remove("hidden");
    o2.classList.remove("hidden");
    o3.classList.remove("hidden");
    noass.classList.add("hidden");
  }
  if(value==="November") {
    n1.classList.remove("hidden");
    n2.classList.remove("hidden");
    n3.classList.remove("hidden");
    noass.classList.add("hidden");
  }
};
