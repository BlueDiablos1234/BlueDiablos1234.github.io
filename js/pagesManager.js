const indexBtn = document.getElementById("indexBtn");

const calcPage = document.getElementById("calcPage");
const calcBtn = document.getElementById("calcBtn");

const planPage = document.getElementById("planPage");
const planBtn = document.getElementById("planBtn");

const timePage = document.getElementById("timePage");
const timeBtn = document.getElementById("timeBtn");

const poePage = document.getElementById("poePage");
const poeBtn = document.getElementById("poeBtn");

const calPage = document.getElementById("calPage");
const calBtn = document.getElementById("calBtn");

const aboutPage = document.getElementById("aboutPage");
const aboutBtn = document.getElementById("aboutBtn");

const pagesArray = [calcPage, planPage, timePage, poePage, calPage, aboutPage];

const hideAllPages = () => {
  pagesArray.map((page) => {
    page.classList.add('hidden')
  });
}

indexBtn.addEventListener("click", function() {
  hideAllPages();
});
calcBtn.addEventListener("click", function() {
  hideAllPages();
  calcPage.classList.remove("hidden")
});
planBtn.addEventListener("click", function() {
  hideAllPages();
  planPage.classList.remove("hidden");
});
timeBtn.addEventListener("click", function() {
  hideAllPages();
  timePage.classList.remove("hidden");
});
poeBtn.addEventListener("click", function() {
  hideAllPages();
  poePage.classList.remove("hidden");
});

calBtn.addEventListener("click", function() {
  hideAllPages();
  calPage.classList.remove("hidden");
});

aboutBtn.addEventListener("click", function() {
  hideAllPages();
  aboutPage.classList.remove("hidden");
});

