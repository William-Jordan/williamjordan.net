let start = Date.now();

setInterval(function () {
    let time = Date.now() - start;

    let sec = new Date(time).getSeconds()
    if ((""+sec).length === 1){
        sec = "0"+sec;
    }
    let min = new Date(time).getMinutes()

    document.getElementById('time').innerHTML = min + ":" + sec;
}, 1000);

let num = 0;
document.getElementById('submit').onclick = function () {
    let list = document.getElementById('list');
    let a = document.getElementById('assist').value
    let g = document.getElementById('goal').value
    list.innerHTML += "<tr><td>"+ ++num +"</td><td>"+ a +"</td><td>"+ g +"</td></tr>"
    let points = document.getElementById('rumPoints')
    points.innerHTML = ''+(Number(points.innerHTML) + 1)
}

console.log(document.getElementById('rp'));

document.getElementById('rp').onclick = function () {
    let points = document.getElementById('rumPoints');
    points.innerHTML = ''+(Number(points.innerHTML) + 1);
}

document.getElementById('rm').onclick = function () {
    let points = document.getElementById('rumPoints');
    points.innerHTML = ''+(Number(points.innerHTML) - 1);
}

document.getElementById('op').onclick = function () {
    let points = document.getElementById('opponentPoints');
    points.innerHTML = ''+(Number(points.innerHTML) + 1);
}

document.getElementById('om').onclick = function () {
    let points = document.getElementById('opponentPoints');
    points.innerHTML = ''+(Number(points.innerHTML) - 1);
}

document.getElementById('rp').onclick = function () {
    let points = document.getElementById('rumPoints');
    points.innerHTML = ''+(Number(points.innerHTML) + 1);
}