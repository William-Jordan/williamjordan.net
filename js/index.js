// document.getElementById('f').onclick = function () {
//     let fadePanels = document.getElementsByClassName('list-pane');
//     let click = document.getElementById('click');
//
//     for(let i = 0; i < fadePanels.length; i++) {
//         fadePanels[i].classList.remove('fadeInAndDrop');
//     }
//     click.classList.remove('clickSlide')
//
//     setTimeout(function () {
//         for(let i = 0; i < fadePanels.length; i++) {
//             fadePanels[i].classList.add('fadeInAndDrop');
//         }
//         click.classList.add('clickSlide')
//     }, 1);
// }

document.getElementById('nav-links')    .onclick = function () {
    document.getElementById('nav-links').style.display="none";
    showMenu = false;
}
let showMenu = false;
document.getElementById('menueBtn').onclick = function () {
    showMenu = !showMenu;
    if(showMenu) {
        document.getElementById('nav-links').style.display="";
    } else  {
        document.getElementById('nav-links').style.display="none";
    }
}

let panes = document.getElementsByClassName('list-pane');
for (let i = 0; i < panes.length; i++) {
    panes[i].onclick = function () {
        document.getElementsByClassName('panel')[i].classList.add("selected");
        panes[0].style.transitionDuration="1s";
        panes[0].style.transform="translateX(-50vw)"
        panes[3].style.transitionDuration="1s";
        panes[3].style.transform="translateX(50vw)"
        setTimeout(
            function() {
                panes[1].style.transitionDuration=".8s";
                panes[1].style.transform="translateX(-50vw)"
                panes[2].style.transitionDuration=".8s";
                panes[2].style.transform="translateX(50vw)"
            }, 200);

        setTimeout(
            function() {
                // panes[2].style.display='none';
                // panes[3].style.display='none';
                document.getElementById('list').style.display="none";
            }, 1000);

        document.getElementById('click').style.display="none";
        document.getElementById('big').style.display="flex";
    }
}

let panels = document.getElementsByClassName('panel');
for (let i = 0; i < panels.length; i++) {
    panels[i].onclick = function () {
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        this.classList.add("selected");
    }
}


let selected = 1;
let numDots = document.getElementsByClassName("dot").length;

document.getElementById('d1').style.backgroundColor = "white";

document.getElementById('d1').onclick = () => {
    selected = 1;
    let tape = document.getElementById('tape');
    tape.style.translate = "-76vw";
    fillDot('d1');
    resetTimer();
}

document.getElementById('d2').onclick = () => {
    selected = 2;
    let tape = document.getElementById('tape');
    tape.style.translate = "-126.4vw";
    fillDot('d2');
    resetTimer();
}

document.getElementById('d3').onclick = () => {
    selected = 3;
    let tape = document.getElementById('tape');
    tape.style.translate = "-176.6vw";
    fillDot('d3');
    resetTimer();
}

document.getElementById('d4').onclick = () => {
    selected = 4;
    let tape = document.getElementById('tape');
    tape.style.translate = "-226.9vw";
    fillDot('d4');
    resetTimer();
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


//https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
//fix do dot clicking and make it all use the same equation