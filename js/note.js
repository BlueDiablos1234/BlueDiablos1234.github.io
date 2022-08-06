let txtTitle = document.getElementById("txtTitle").addEventListener("input", input);
let txtDesc = document.getElementById("txtDesc").addEventListener("input", input)
const btnAdd = document.getElementById("btnAdd").addEventListener("click", submit);
const btnLoad = document.getElementById("btnLoad").addEventListener("click", load);

let title;
let desc;
function input() {
  title = document.getElementById("txtTitle").value;
  desc = document.getElementById("txtDesc").value;
}

function submit() {
  localStorage.setItem("title", title);
  localStorage.setItem("desc", desc);
  console.log("Added!");
}

function load() {
  document.getElementById("txtTitle").value = localStorage.getItem("title", "Default value")
  document.getElementById("txtDesc").value = localStorage.getItem("desc", "Default value")
  console.log("Loaded!");
}



localStorage.setItem("items", []);

