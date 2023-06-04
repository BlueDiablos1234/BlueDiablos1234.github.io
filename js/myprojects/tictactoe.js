const cell1 = document.getElementById('cell-1');
const cell2 = document.getElementById('cell-2');
const cell3 = document.getElementById('cell-3');
const cell4 = document.getElementById('cell-4');
const cell5 = document.getElementById('cell-5');
const cell6 = document.getElementById('cell-6');
const cell7 = document.getElementById('cell-7');
const cell8 = document.getElementById('cell-8');
const cell9 = document.getElementById('cell-9');
const cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]
const body = document.getElementById('body');

body.addEventListener(('contextmenu'), e => {
    e.preventDefault();
});

const play = (e) => {
    if(e.type === 'contextmenu') {
        e.target.innerHTML='x'
    } else {
        e.target.innerHTML='o'
    }
    calc();

}

const calc = () => {
    if(cell1.innerHTML==="x" && cell2.innerHTML==="x" && cell3.innerHTML==="x") {
        setTimeout(() => {
            alert("x WINS")
            clearBoard()
        }, 300);
    }
    if(cell1.innerHTML==="o" && cell2.innerHTML==="o" && cell3.innerHTML==="o") {
        setTimeout(() => {
            alert("o WINS")
            clearBoard()
        }, 300);
    }

    if(cell4.innerHTML==="x" && cell5.innerHTML==="x" && cell6.innerHTML==="x") {
        setTimeout(() => {
            alert("x WINS")
            clearBoard()
        }, 300);
    }
    if(cell4.innerHTML==="o" && cell5.innerHTML==="o" && cell6.innerHTML==="o") {
        setTimeout(() => {
            alert("o WINS")
            clearBoard()
        }, 300);
    }

    if(cell7.innerHTML==="x" && cell8.innerHTML==="x" && cell9.innerHTML==="x") {
        setTimeout(() => {
            alert("x WINS")
            clearBoard()
        }, 300);
    }
    if(cell7.innerHTML==="o" && cell8.innerHTML==="o" && cell9.innerHTML==="o") {
        setTimeout(() => {
            alert("o WINS")
            clearBoard()
        }, 300);
    }

    if(cell1.innerHTML==="x" && cell4.innerHTML==="x" && cell7.innerHTML==="x") {
        setTimeout(() => {
            alert("x WINS")
            clearBoard()
        }, 300);
    }
    if(cell1.innerHTML==="o" && cell4.innerHTML==="o" && cell7.innerHTML==="o") {
        setTimeout(() => {
            alert("o WINS")
            clearBoard()
        }, 300);
    }

    if(cell2.innerHTML==="x" && cell5.innerHTML==="x" && cell8.innerHTML==="x") {
        setTimeout(() => {
            alert("x WINS")
            clearBoard()
        }, 300);
    }
    if(cell2.innerHTML==="o" && cell5.innerHTML==="o" && cell8.innerHTML==="o") {
        setTimeout(() => {
            alert("o WINS")
            clearBoard()
        }, 300);
    }

    if(cell3.innerHTML==="x" && cell6.innerHTML==="x" && cell9.innerHTML==="x") {
        setTimeout(() => {
            alert("x WINS")
            clearBoard()
        }, 300);
    }
    if(cell3.innerHTML==="o" && cell6.innerHTML==="o" && cell9.innerHTML==="o") {
        setTimeout(() => {
            alert("o WINS")
            clearBoard()
        }, 300);
    }

    if(cell1.innerHTML==="x" && cell5.innerHTML==="x" && cell9.innerHTML==="x") {
        setTimeout(() => {
            alert("x WINS")
            clearBoard()
        }, 300);
    }
    if(cell1.innerHTML==="o" && cell5.innerHTML==="o" && cell9.innerHTML==="o") {
        setTimeout(() => {
            alert("o WINS")
            clearBoard()
        }, 300);
    }

    if(cell3.innerHTML==="x" && cell5.innerHTML==="x" && cell7.innerHTML==="x") {
        setTimeout(() => {
            alert("x WINS")
            clearBoard()
        }, 300);
    }
    if(cell3.innerHTML==="o" && cell5.innerHTML==="o" && cell7.innerHTML==="o") {
        setTimeout(() => {
            alert("o WINS")
            clearBoard()
        }, 300);
    }
}

const clearBoard = () => {
    cells.map((item) => {
        item.innerText = ""
    })
}

cells.map((item) => {
    item.addEventListener('click', (e) => play(e), false)
    item.addEventListener('contextmenu', (e) => play(e), false)
})