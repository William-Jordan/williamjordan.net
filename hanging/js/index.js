let upTime, downTime;
document.getElementById('go').onclick = () => {
    upTime = parseFloat(document.getElementById("upTime").value);
    downTime = 60 - upTime;
    document.getElementById("settings").style.display = "none";
    document.getElementById("timer").style.display = "";
    start();
}

function start() {
    console.log(upTime);
    console.log(downTime);
}

document.addEventListener('keyup', (e) => {
    if (isVisible(document.getElementById('settings')) && (e.code === "Enter" || e.code === "Space")) {
        document.getElementById('go').click();
    }
});

function isVisible(el) {
    return !(el.offsetParent === null)
}