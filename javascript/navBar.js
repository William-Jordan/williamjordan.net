let mobileBtn = document.getElementById("menueBtn");
let nav = document.querySelector("nav");
let clsoeMenue = document.getElementsByClassName("close");
if (document.body.clientWidth < 1200) {
    nav.style = "display: none";
}
let show = true;

mobileBtn.addEventListener("click", () => {
    show = !show;
    if (show) {
        nav.style = "display: none";
    } else {
        nav.style = "";
    }
});

for (var i = 0; i < clsoeMenue.length; i++) {
    clsoeMenue[i].addEventListener("click", () => {
        if (document.body.clientWidth < 1200) {
            show = true;
            nav.style = "display: none";
        }
    });
}

window.addEventListener('resize', function (event) {
    if (document.body.clientWidth < 1200) {
        nav.style = "display: none";
    } else {
        nav.style = "display: ''";
    }
});