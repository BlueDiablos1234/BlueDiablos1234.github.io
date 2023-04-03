const dynamicContentRender = (blockName, counter) => {
  return content = `
  <div class="bg-neutral-900 p-4 rounded-lg mt-2">
  <button class="float-right text-xl hover:text-red-700 duration-300 -mt-4 -mr-2" id="${blockName}_del">x</button>
    <div>${blockName}</div>
    <div><span id="${blockName}">${counter}</span></div>
    
      <center class="mt-2">
        <button class="bg-black p-2 rounded-md hover:bg-neutral-700 duration-300" id="${blockName}_increment">+</button>
        <button class="bg-black p-2 rounded-md hover:bg-neutral-700 duration-300" id="${blockName}_decrement">-</button>
      </center>
  </div>`;
}

let arr = [];
if (localStorage.getItem("content") !== null) {
  let newItems = localStorage.getItem("content");
  arr = JSON.parse(newItems);
  console.log(arr);
} else {
  arr = [{
      blockName: "Glass of water",
      counter: 0
    },
    {
      blockName: "Cups of Coffee",
      counter: 0
    }
  ]
}

arr.map((item, index) => {
  document.querySelector("#object-tracker-root").insertAdjacentHTML('beforeend', dynamicContentRender(item.blockName, item.counter));

  document.getElementById(`${item.blockName}_increment`).addEventListener('click', () => {
    item.counter++
    document.getElementById(item.blockName).innerText = item.counter
    localStorage.setItem("content", JSON.stringify(arr));
  })

  document.getElementById(`${item.blockName}_decrement`).addEventListener('click', () => {
    if (item.counter > 0) {
      item.counter--
    }
    document.getElementById(item.blockName).innerText = item.counter
    localStorage.setItem("content", JSON.stringify(arr));
  })
  document.getElementById(`${item.blockName}_del`).addEventListener('click', () => {
    arr.splice(index, 1)
    localStorage.setItem("content", JSON.stringify(arr));
    location.reload();
  })
})

const dynamicCounterRender = (blockName) => {
  return count = `<div>${blockName}</div>`
}
document.querySelector("#object-tracker-counter").innerHTML = dynamicCounterRender(`Items Tracked: ${arr.length}`);

document.getElementById("btnNewTracker").addEventListener("click", () => {
  arr.push({
    blockName: document.getElementById("txtNewTracker").value,
    counter: 0
  })
  localStorage.setItem("content", JSON.stringify(arr));
  location.reload();
})