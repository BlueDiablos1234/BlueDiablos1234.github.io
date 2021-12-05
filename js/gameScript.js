let state={ username:"", cash:0, upgradeCost:5, upgradeLevel:1, dev:!0 };

const updateDom = () => {
  document.getElementById('txtCash').innerText = Math.round(state.cash);
  document.getElementById('txtUpgradeLvl').innerText = Math.round(state.upgradeCost);
  document.getElementById('txtWorkLvl').innerText = state.upgradeLevel
}

if (localStorage.getItem('project-gx_save') !== null) {
  let tempState = {}
  tempState = JSON.parse(localStorage.getItem('project-gx_save'));
  state = tempState;
  updateDom();
}

//? state.username = prompt("Enter a username");

document.getElementById('username').innerText = state.username == '' ? "Anonymous" : state.username;


document.getElementById('btnWork').addEventListener('click', (e) => {
  if (!e.isTrusted) return;
  state.cash += state.upgradeLevel;
  updateDom();
});

document.getElementById('btnUpgradeWork').addEventListener('click', () => {
  if(state.cash >= state.upgradeCost) {
    state.upgradeLevel++;
    state.cash -= state.upgradeCost;
    state.upgradeCost *= 1.4;
  }
  updateDom();
});

setInterval(() => {
  localStorage.setItem('project-gx_save', JSON.stringify(state))
}, 1e4);
