const countdownSecs = document.getElementById('sc');
const countdownMins = document.getElementById('mn');
const countdownHours = document.getElementById('hr');
const countdownDays = document.getElementById('da');
const courseDat = document.getElementById('course');
const courseCod = document.getElementById('code');
let isRunning;

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

document.getElementById('ver').innerHTML = eventData.version
document.getElementById('updated_at').innerHTML = eventData.updated_at

// DATE FORMAT Jan 01, 2022 00:00:00 : type = ["test", "assignment", "exam", "poe"];

eventData.data.forEach((i) => {
  eventDate = new Date(i[2]).getTime();
  today = new Date().getTime();

  switch(true) {
    case(eventDate < today):
      break;
    case(eventDate >= today):
      if (!isRunning) {
        setTime (eventDate);
        courseCod.innerHTML = i[0]
        courseDat.innerHTML = i[1]
      };
      break;
  }
}); 

function setTime(time) {
  isRunning = true;
  var countDownDate = new Date(time).getTime();
  var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  
    // Result is output to the specific element
    countdownDays.innerHTML = days + "d ";
    countdownHours.innerHTML = hours + "h ";
    countdownMins.innerHTML = minutes + "m ";
    countdownSecs.innerHTML = seconds + "s ";
    
    const threedays = 259200000;
    const twodays = 172800000;
    const onedays = 86400000;

    if (timeleft >= threedays) { // 3 days
      document.getElementById('time').classList.add('blue');
    } else if(timeleft <= threedays && timeleft >= twodays) {
      document.getElementById('time').classList.add('orange');
    } else if(timeleft <= twodays) {
      document.getElementById('time').classList.add('red');
    }

    // Display the message when countdown is over
    if (timeleft < 0) {
      clearInterval(myfunc);
      // document.getElementById("end").innerHTML = "📚📚📚📚";
    }
  }, 1000)
}

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