document.getElementById('weightTask1').addEventListener('input', calculate);
document.getElementById('weightTask2').addEventListener('input', calculate);
document.getElementById('weightTask3').addEventListener('input', calculate);

document.getElementById('valTask1').addEventListener('input', calculate);
document.getElementById('valTask2').addEventListener('input', calculate);
document.getElementById('valTask3').addEventListener('input', calculate);

document.getElementById('valIce').addEventListener('input', calculate);

function calculate() {
    var task1val = document.getElementById("valTask1").value;
    var weightTask1 = document.getElementById("weightTask1").value;
    var task2val = document.getElementById("valTask2").value;
    var weightTask2 = document.getElementById("weightTask2").value;
    var task3val = document.getElementById("valTask3").value;
    var weightTask3 = document.getElementById("weightTask3").value;
    var valIce = document.getElementById("valIce").value;

    let result;
    let weightTotal;
    result = (task1val * weightTask1 / 100) + (task2val * weightTask2 / 100) + (task3val * weightTask3 / 100) + (valIce * 10 / 100);
    weightTotal = (+weightTask1 + +weightTask2 + +weightTask3 +(+valIce/100*10))

    const res = document.getElementById("lblresult");
    const weg = document.getElementById("lblweightTotal");
    if(result<=25) {
        res.style.color = "Red";
    }
    if(result>=26) {
        res.style.color = "Orange";
    }
    if(result>=50) {
        res.style.color = "Lime";
    }

    (weightTotal>100) ? weg.style.color = "Red" : weg.style.color = "White";
    res.innerText = result + "%";
    weg.innerText = "Total Weight: " + weightTotal + "%";
}