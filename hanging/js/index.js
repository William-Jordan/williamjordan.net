let upTime, downTime;
let current = 'up';
document.getElementById('go').onclick = () => {
    upTime = parseFloat(document.getElementById("upTime").value);
    downTime = 60 - upTime;

    document.getElementById("settings").style.display = "none";
    document.getElementById("timer").style.display = "";

    start(upTime);
}

function start(seconds) {
    let countDownDate = new Date();
    countDownDate.setSeconds(countDownDate.getSeconds()+seconds);
    console.log(new Date());
    console.log(countDownDate);

    let x = setInterval(function () {

        let now = new Date().getTime();
        let distance = countDownDate - now;

        let seconds = Math.floor(distance / 1000);
        let tenths = Math.floor((distance % 1000)/100);

        // Display the result in the element with id="demo"
        document.getElementById("time").innerHTML = seconds + "." + tenths;

        if (distance < 0) {
            clearInterval(x);
            console.log("egg");
            // start(seconds);
        }
    }, 100);

}

document.addEventListener('keyup', (e) => {
    if (isVisible(document.getElementById('settings')) && (e.code === "Enter" || e.code === "Space")) {
        document.getElementById('go').click();
    }
});
function isVisible(el) {
    return !(el.offsetParent === null)
}