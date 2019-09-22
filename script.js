document.getElementById("aantalJongens").addEventListener('input', percentageCalc);
document.getElementById("aantalMeisjes").addEventListener('input', percentageCalc);
document.getElementById("runButton").addEventListener('click', addInterval);
document.getElementById("plusOneButton").addEventListener('click', appendBoyGirl);
let running = false;
var timeOutCalc;
var countBoys = 0;
var countGirls = 0;
window.onload = percentageCalc;

function percentageCalc() {
    var jongens = document.getElementById("aantalJongens").value;
    var meisjes = document.getElementById("aantalMeisjes").value;
    var aantalKinderen = Number(jongens) + Number(meisjes);
    var percentage = 0;
    var delersFactor = Math.pow(2, aantalKinderen);
    if (meisjes == 0 || jongens == 0) {
        percentage = 1 / delersFactor;
        percentage = Math.round(percentage * 10000) / 100;
        //console.log(percentage * 100, "1 / " + delersFactor);
        document.getElementsByClassName("outputPercentage")[0].innerHTML = percentage + "%";
        document.getElementsByClassName("outputPercentage")[1].innerHTML = percentage + "%";
        document.getElementById("deeltal").innerHTML = 1;
        document.getElementById("deler").innerHTML = delersFactor;

    } else {
        percentage = aantalKinderen / delersFactor;
        percentage = Math.round(percentage * 10000) / 100;
        //console.log((percentage * 100) + "   " + aantalKinderen + " / " + delersFactor);
        document.getElementsByClassName("outputPercentage")[0].innerHTML = percentage + "%";
        document.getElementsByClassName("outputPercentage")[1].innerHTML = percentage + "%";
        document.getElementById("deeltal").innerHTML = aantalKinderen;
        document.getElementById("deler").innerHTML = delersFactor;
    }
}

function appendBoyGirl() {
    let randomNumber = Math.floor(Math.random() * 2);
    let element = document.createElement("p");
    let text = document.createTextNode("X");
    element.appendChild(text);
    if (randomNumber == 0) {
        //Boy
        document.getElementById("automaticTestJongens").appendChild(element);
        countBoys++;
    } else {
        //girl
        document.getElementById("automaticTestMeisjes").appendChild(element);
        countGirls++;
    }
    document.getElementById("precentageBoys").innerHTML = Math.round((countBoys / (countBoys + countGirls)) * 1000) / 10 + "%";
    document.getElementById("precentageGirls").innerHTML = Math.round((countGirls / (countBoys + countGirls)) * 1000) / 10 + "%";
}



function addInterval() {
    if (running) {
        running = false;
        clearInterval(timeOutCalc);
        document.getElementById("runButton").innerHTML = "START";
    } else {
        running = true;
        timeOutCalc = setInterval(() => {
            appendBoyGirl();
        }, Number(document.getElementById("time").value));
        document.getElementById("runButton").innerHTML = "STOP";
    }
}