let state = {
  username: "",
  cash: 0,
  upgradeCost: 5,
  upgradeLevel: 1,
  bigUpgradeCost: 50,
  bigUpgradeLevel: 0, //Used to see where tf we currently are with Bigupgrades
  autoUpgradeCost: 500,
  autoUpgradeLevel: 0,
  auto: false,
  showAuto: false,
  dev: true,
  lastSavedAt: ""
}, autoRunning;

const desc = [
  "This will Multiply your work value by x2",
  "This will Decrease your normal upgrade cost by x2",
  "This will Unlock the next stage in the game."
]

function bigUpgradeDesc() {
  switch (state.bigUpgradeLevel) {
    case 0:
      if (state.cash >= state.bigUpgradeCost) {
        state.cash -= state.bigUpgradeCost;
        state.bigUpgradeCost *= 1.5;
        state.upgradeLevel *= 2;
        state.bigUpgradeLevel++;
      }
      break;
    case 1:
      if (state.cash >= state.bigUpgradeCost) {
        state.cash -= state.bigUpgradeCost;
        state.bigUpgradeCost *= 4;
        state.upgradeCost /= 2;
        state.bigUpgradeLevel++;
      }
      break;
    case 2:
      if (state.cash >= state.bigUpgradeCost) {
        state.cash -= state.bigUpgradeCost;
        state.bigUpgradeCost *= 5;
        document.getElementById('btnshowAutoUpgradesDiv').style.display = 'block';
        state.bigUpgradeLevel++;
      }
      break;
      default:
        if (state.cash >= state.bigUpgradeCost) {
          state.cash -= state.bigUpgradeCost;
          state.bigUpgradeCost *= 2;
          state.upgradeLevel *= 2;
          state.bigUpgradeLevel++;
        }
        break;
  }
}

const updateDom = () => {
  document.getElementById('txtCash').innerText = Math.round(state.cash);
  document.getElementById('txtUpgradeLvl').innerText = Math.round(state.upgradeCost);
  document.getElementById('txtWorkLvl').innerText = Math.round(state.upgradeLevel);
  document.querySelector('#txtbigUpgradeLvl').innerText = Math.round(state.bigUpgradeCost);
  document.getElementById('txtupgradeDesc').innerText = desc[state.bigUpgradeLevel];
  document.getElementById('txtAutoUpgradeLvl').innerText = Math.round(state.autoUpgradeCost);
}

if (localStorage.getItem('project-gx_save') !== null) {
  let tempState = {}
  tempState = JSON.parse(localStorage.getItem('project-gx_save'));
  state = tempState;
  updateDom();
}

//! Calculate shid here
//? In a funct or not
function calcOfflineShit() {
  if (state.lastSavedAt == undefined) return
    let last_saved = new Date(state.lastSavedAt)
    let now = Date.now();
    let duration_offline = new Date(now - last_saved).getSeconds();
    console.log("Total offline Earnings: $" + duration_offline);
    state.cash += state.auto * duration_offline;
}
calcOfflineShit();

//? state.username = prompt("Enter a username");
document.getElementById('username').innerText = state.username == '' ? "Anonymous" : state.username;
state.showAuto ? document.getElementById('btnshowAutoUpgradesDiv').style.display = 'block' : document.getElementById('btnshowAutoUpgradesDiv').style.display = 'none';

document.getElementById('btnWork').addEventListener('click', (e) => {
  if (!e.isTrusted) return;
  state.cash += state.upgradeLevel;
  updateDom();
});

document.getElementById('btnUpgradeWork').addEventListener('click', () => {
  if (state.cash >= state.upgradeCost) {
    state.upgradeLevel++;
    state.cash -= state.upgradeCost;
    state.upgradeCost *= 1.4;
  }
  updateDom();
});

setInterval(() => {
  state.lastSavedAt = Date.now();
  localStorage.setItem('project-gx_save', JSON.stringify(state))
}, 1000);

document.getElementById('btnshowUpgradesDiv').addEventListener('click', () => {
  var x = document.getElementById("upgradesDiv");
  x.style.display === "none" ? x.style.display = "block" : x.style.display = "none"
  updateDom();
});
document.getElementById('btnshowAutoUpgradesDiv').addEventListener('click', () => {
  var x = document.getElementById('AutoDiv');
  x.style.display === "none" ? x.style.display = "block" : x.style.display = "none"
  updateDom();
});
document.getElementById('btnbigUpgrade').addEventListener('click', () => {
  bigUpgradeDesc();
  updateDom();
});

document.getElementById('btnAutoUpgrade').addEventListener('click', () => {
  if(state.cash >= state.autoUpgradeCost) {
    state.autoUpgradeLevel++;
    state.cash -= state.autoUpgradeCost;
    state.auto = true; 
    state.showAuto = true
    startAuto(); //! Updated
    // @blue works now
  }
  updateDom();
});

if(state.auto) {
  setInterval(() => {
    state.cash += state.autoUpgradeLevel;
    updateDom();
  }, 1000);
}

//? Setting iNtervals
const startAuto = () => {
  if (state.auto && autoRunning != undefined) return;
  autoRunning = setInterval(() => {
    state.cash += state.autoUpgradeLevel;
    updateDom();
  }, 1000);
}

const stopAuto = () => {
  if (!state.auto && autoRunning == undefined) return;
  clearInterval(autoRunning);
  state.auto = !state.auto;
  autoRunning = undefined;
}