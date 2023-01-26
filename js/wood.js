let rotate = false;
let dialStartAngle = 0;
let mouseStartAngle = 0;


document.getElementById('dial').onmousedown = (e) => {
    rotate = true;
    mouseStartAngle =  getAngle(e.clientX, e.clientY);
}

window.onmouseup = () => {
    rotate = false;
    dialStartAngle = Number(document.getElementById('dial').style.rotate.slice(0, -3));
}

window.onmousemove = (e) => {
    if (rotate) {
        let currentAngle = getAngle(e.clientX, e.clientY);
        let newAngle = (dialStartAngle + (currentAngle-mouseStartAngle)) % 360;
        document.getElementById('dial').style.rotate = newAngle+ "deg";
        setRPM(currentAngle);
    }
}

let getAngle = function(x, y) {
    if (rotate) {
        let box = document.getElementById('dial').getBoundingClientRect();
        let xCenter = box.left + box.width / 2;
        let yCenter = box.top + box.height / 2;

        const angle = Math.atan2(x - xCenter, -(y - yCenter)) * (180 / Math.PI);
        return (360 + Math.round(angle)) % 360;
    }
}

let newSpeed = false;
let ms;
function setRPM(angle) {
    ms = 50+Math.floor(angle*2.64);
    newSpeed = true;
    let rpm = 3600-(60+Math.floor(angle*9.83));
    let rpmString = "0000" + rpm;
    for (let i = 0; i < 4; i++) {
        document.getElementById('rpm'+i).innerHTML = rpmString.substring(rpmString.length-(i+1), rpmString.length-i)
    }
}

//update rotation speed at the end of a rotation
document.getElementById('bowl').addEventListener('animationiteration', function() {
    if (newSpeed) {
        document.getElementById('bowl').style.animationDuration = ms/2 + "ms";
        newSpeed = false;
    }
});