const dynamicContentRender = (blockName) => {
  return content = `
  <div class="bg-neutral-900 p-4 rounded-lg mt-2 text-left cursor-pointer hover:bg-neutral-800 select-none" id="${blockName}_block">
    <button class="float-right text-xl hover:text-red-700 duration-300 -mt-4 -mr-2" id="${blockName}_del">x</button>
    <div id="${blockName}_txt">${blockName}</div>
  </div>`;
}

let arr =  [];
if(localStorage.getItem("todo")!==null) {
  let newItems = localStorage.getItem("todo");
  arr = JSON.parse(newItems);
  console.log(arr);
} else {
  arr = [  
    {blockName: "Buy Taco's", strk: false}, 
    {blockName: "Eat Taco's", strk: false}]
}

arr.map((item, index) => {
  document.querySelector("#object-todo-root").insertAdjacentHTML('beforeend', dynamicContentRender(item.blockName, item.counter));
  if(item.strk===true) {
    document.getElementById(`${item.blockName}_txt`).classList.add('line-through')
  }
  document.getElementById(`${item.blockName}_del`).addEventListener('click', () => {
    arr.splice(index, 1)
    localStorage.setItem("todo", JSON.stringify(arr));
    location.reload();
  })
  document.getElementById(`${item.blockName}_block`).addEventListener('click', () => {
    if(item.strk===false) {
      document.getElementById(`${item.blockName}_txt`).classList.add('line-through')
      item.strk = true;
      localStorage.setItem("todo", JSON.stringify(arr));
    } else {
      document.getElementById(`${item.blockName}_txt`).classList.remove('line-through')
      item.strk = false;
      localStorage.setItem("todo", JSON.stringify(arr));
    }

  })
})

const dynamicCounterRender = (blockName) => {
  return count = `<div>${blockName}</div>`
}
document.querySelector("#object-todo-counter").innerHTML = dynamicCounterRender(`Todo Items Count: ${arr.length}`);

document.getElementById("btnNewtodoItem").addEventListener("click", () => {
  arr.push({blockName: document.getElementById("txtNewtodoItem").value, strk: false})
  localStorage.setItem("todo", JSON.stringify(arr));
  location.reload();
})