const countdownSecs = document.getElementById('sc');
const countdownMins = document.getElementById('mn');
const countdownHours = document.getElementById('hr');
const countdownDays = document.getElementById('da');
const courseDat = document.getElementById('course');
const courseCod = document.getElementById('code');
const activeDate = document.getElementById('active-course-time');
const threedays = 259200000;
const twodays = 172800000;
const onedays = 86400000;
let timers = [];
let next = [];

let isRunning;

// DATE FORMAT Jan 01, 2022 00:00:00 : type = ["test", "assignment", "exam", "poe"];
const eventData = {
  version: "V1",
  updated_at: "10 March 2022", 
  data: [
    ["OPSC7311", "Part 1", "Apr 25, 2022 21:00:00"],          
    ["WEDE6011", "Part 1", "Apr 28, 2022, 21:00:00"],         
    ["ISEC6311", "Assignment", "May 05, 2022, 21:00:00"],     
    ["ISEC6311", "Take Home Test", "May 13, 2022, 21:00:00"], 
    ["ADDB7311", "On Campus Test", "May 17, 2022, 11:00:00"],
    ["WEDE6011", "Part 2", "May 26, 2022, 21:00:00"],
    ["ADDB7311", "Assignment", "Jun 02, 2022, 11:00:00"],
    ["OPSC7311", "Part 2", "Jun 07, 2022, 21:00:00"],
    ["ISEC7311", "Take Home Exam", "Jun 22, 2022, 21:00:00"],            
    ["ADDB7311", "On Campus Exam", "Jun 24, 2022, 08:00:00"],            
    ["OPSC7311", "POE", "Jun 28, 2022, 21:00:00"],  
    ["WEDE6011", "POE", "Jul 04, 2022, 21:00:00"]
  ]
};


function createCard(array, index) {
  d8 = new Date(array[2]).toLocaleDateString();
  template = `
    <div class="bg-gray-900 p-3 m-2 rounded-xl grid grid-cols-12">
      <div id="${index}-indicator" class="w-8 h-8 rounded-3xl row-span-3 col-span-2 my-auto"></div>
      <div class="col-span-10 font-bold">${array[1]} - (${array[0]})</div>
      <div class="sm:col-span-4 col-span-10 col-start-3">
        <div class="">
          <span id="${index}-da" class="text-xs">--</span>
          <span id="${index}-hr" class="text-xs">--</span>
          <span id="${index}-mn" class="text-xs">--</span>
          <span id="${index}-sc"  class="text-xs">--</span>
        </div>
      </div>
      <div class="col-span-5"><span class="font-normal text-xs"> Due: <span>${d8}</span></div>
    </div>
  `
  return template
}

function setTimers(arr, ind, time) { // Upcoming Timers
  var countDownDate = new Date(time).getTime();
  timers[ind] = setInterval(function () {
    var timeleft = Math.round(((countDownDate - Date.now()) / 1000) * 1000);
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    sum = (days +hours+minutes+seconds)
    // Result is output to the specific element
    document.getElementById(`${ind}-da`).innerHTML = days + "d ";
    document.getElementById(`${ind}-hr`).innerHTML = hours + "h ";
    document.getElementById(`${ind}-mn`).innerHTML  = minutes + "m ";
    document.getElementById(`${ind}-sc`).innerHTML  = seconds + "s ";


    if (timeleft >= threedays) { // 3 days
      document.getElementById(`${ind}-indicator`).classList.add('blueind');
    } else if(timeleft <= threedays && timeleft >= twodays) {
      document.getElementById(`${ind}-indicator`).classList.add('orangeind');
    } else if(timeleft <= twodays) {
      document.getElementById(`${ind}-indicator`).classList.add('redind');
    }
    if (timeleft <= 0 || sum <= 1) {
      clearInterval(timers[ind]);
      setUpcomingObj();
    }
  }, 100)
}

function setMainTimer(time) {
  isRunning = true;
  var countDownDate = new Date(time).getTime();
  var mainTimer = setInterval(function () {
  let tim = countDownDate - Date.now()
  var timeleft = -Math.round(-tim / 1000) * 1000;
  console.log(timeleft)
    if (timeleft <= 0) {
      clearInterval(mainTimer);
      isRunning = false;
      setMainObj();
      setUpcomingObj();
    }
    
    updateMain(timeleft);
    
    if (timeleft >= threedays) { // 3 days
      document.getElementById('time').classList.add('blue');
    } else if(timeleft <= threedays && timeleft >= twodays) {
      document.getElementById('time').classList.add('orange');
    } else if(timeleft <= twodays) {
      document.getElementById('time').classList.add('red');
    }
    // Display the message when countdown is over
  }, 100)
}

function setMainObj(force = false, dat) {
    eventData.data.forEach((i) => {
      eventDate = new Date(i[2]).getTime();
      today = new Date().getTime();
      
      switch(true) {
        case(eventDate < today):
          console.log("d<t" + i)
          break;
        case(eventDate >= today):
          if (!isRunning) {
            let date = new Date(i[2])
            setMainTimer(eventDate);
            courseCod.innerHTML = i[0]
            courseDat.innerHTML = i[1]
            activeDate.innerHTML = date.toLocaleString('en-GB', {year: 'numeric', month: 'numeric', day: 'numeric', minute: '2-digit', hour: '2-digit'});
          };
          break;
      }
    }); 
  }

function setUpcomingObj() {
  timers.forEach((i) => {
    clearInterval(i);
  })
  let upcoming = [], upcomingParsed = []
  eventData.data.map((e) => {
    date = new Date(e[2]).getTime();
    now = new Date().getTime();
    if (date >= Date.now()) {
      upcoming.push(e)
    }
  })
  next = upcoming[0]
  upcoming.slice(1,4).forEach((e, i) => {
    upcDate = new Date(e[2]).getTime()
    upcomingParsed.push(createCard(e, i))
    setTimers(e, i, upcDate)
  })
  document.getElementById('upcoming').innerHTML = upcomingParsed.join("")
  document.getElementById('upcoming').insertAdjacentHTML('afterbegin', `<div class="font-bold">Upcoming:</div>`)
}

setMainObj();
setUpcomingObj();

function updateMain(s) {
  var days = Math.floor(s / (1000 * 60 * 60 * 24));
  var hours = Math.floor((s % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((s % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((s % (1000 * 60)) / 1000);

  // Result is output to the specific element
  countdownDays.innerHTML = days + "d ";
  countdownHours.innerHTML = hours + "h ";
  countdownMins.innerHTML = minutes + "m ";
  countdownSecs.innerHTML = seconds + "s ";
}

document.getElementById('ver').innerHTML = eventData.version
document.getElementById('updated_at').innerHTML = eventData.updated_at
