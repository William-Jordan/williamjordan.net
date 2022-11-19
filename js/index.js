let selected = 1;
let numDots = document.getElementsByClassName("dot").length;

document.getElementById('d1').style.backgroundColor = "white";

document.getElementById('d1').onclick = () => {
    let tape = document.getElementById('tape');
    tape.style.translate = "-76vw";
    fillDot('d1');
}

document.getElementById('d2').onclick = () => {
    let tape = document.getElementById('tape');
    tape.style.translate = "-126.4vw";
    fillDot('d2');
}

document.getElementById('d3').onclick = () => {
    let tape = document.getElementById('tape');
    tape.style.translate = "-176.6vw";
    fillDot('d3');
}

document.getElementById('d4').onclick = () => {
    let tape = document.getElementById('tape');
    tape.style.translate = "-226.9vw";
    fillDot('d4');
}

function fillDot(id) {
    let dots = document.getElementsByClassName("dot");
    for (const dot of dots) {
        dot.style.backgroundColor = "";
    }
    document.getElementById(id).style.backgroundColor = "white";
}

document.getElementById('left').onclick = async () => {
    selected--;
    if (selected < 1) {
        selected = numDots;
        let tape = document.getElementById('tape');
        tape.style.transitionDuration = "0s";
        tape.style.translate = "-277.2vw";
        await new Promise(resolve => setTimeout(resolve, 1));
        tape.style.transitionDuration = "1s";
    }

    translate(selected);
    fillDot('d' + selected);
    resetTimer();
}

document.getElementById('right').onclick = async () => {
    selected++;
    if (selected > numDots) {
        selected = 1;
        let tape = document.getElementById('tape');
        tape.style.transitionDuration = "0s";
        tape.style.translate = "-25.8vw";
        await new Promise(resolve => setTimeout(resolve, 1));
        tape.style.transitionDuration = "1s";
    }

    translate(selected);
    fillDot('d' + selected);
    resetTimer();
}

function translate(num) {
    let tape = document.getElementById('tape');
    switch (num) {
        case 1: tape.style.translate = "-76vw"; break;
        case 2: tape.style.translate = "-126.4vw"; break;
        case 3: tape.style.translate = "-176.6vw"; break;
        case 4: tape.style.translate = "-226.9vw"; break;
    }
}

let timer = window.setInterval(() => {
    document.getElementById('right').click();
}, 5000);

function resetTimer() {
    clearInterval(timer);
    timer = window.setInterval(() => {
        document.getElementById('right').click();
    }, 5000);
}