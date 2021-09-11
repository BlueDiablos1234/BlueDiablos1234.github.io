const countdownSecs = document.getElementById('sc');
const countdownMins = document.getElementById('mn');
const countdownHours = document.getElementById('hr');
const countdownDays = document.getElementById('da');
const courseDat = document.getElementById('course');
const courseCod = document.getElementById('code');
const threedays = 259200000;
const twodays = 172800000;
const onedays = 86400000;
let timers = [];
let next = [];

let isRunning;

// DATE FORMAT Jan 01, 2022 00:00:00 : type = ["test", "assignment", "exam", "poe"];
const eventData = {
  version: "V6",
  updated_at: "6 Sep 2021", 
  data: [
    ["PROG6212", "Task 1", "Sep 20, 2021 23:30:00"],          // P
    ["HCIN6212", "Task 1", "Sep 28, 2021, 23:30:00"],         // H
    ["DATA6212", "Assignment", "Oct 05, 2021, 23:30:00"],     // D
    
    ["DATA6212", "Take Home Test", "Oct 21, 2021, 21:00:00"], // D
    ["PROG6212", "Task 2", "Oct 26, 2021, 23:30:00"],         // P
    ["HCIN6212", "Task 2", "Nov 01, 2021, 23:30:00"],         // H
    
    ["PROG6212", "POE", "Nov 17, 2021, 23:30:00"],            // P
    ["HCIN6212", "POE", "Nov 23, 2021, 23:30:00"],            // H
    ["DATA6212", "Take Home Exam", "Dec 07, 2021, 21:00:00"]  // D
    // ["TESTDAtA", "noooooooooooooooooooooooooooooooo", "Nov 21, 2019, 23:30:00"] 
  ]
};

particlesJS("particles-js",{
  "particles": {
    "number": {
      "value": 25,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 12,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


function createCard(array, index) {
  d8 = new Date(array[2]).toLocaleDateString();
  template = `
    <div class="bg-gray-900 p-3 m-2 rounded-xl grid grid-cols-12">
      <div id="${index}-indicator" class="w-8 h-8 rounded-3xl row-span-3 col-span-2 my-auto"></div>
      <div class="col-span-10 font-bold">${array[1]} - (${array[0]})</div>
      <div class="col-span-4">
        <div class="">
          <span id="${index}-da" class="text-sm"></span>
          <span id="${index}-hr" class="text-sm"></span>
          <span id="${index}-mn" class="text-sm"></span>
          <span id="${index}-sc"  class="text-sm"></span>
        </div>
      </div>
      <div class="col-span-5"><span class="font-normal text-sm"> Due: <span>${d8}</span></div>
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
            setMainTimer(eventDate);
            courseCod.innerHTML = i[0]
            courseDat.innerHTML = i[1]
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