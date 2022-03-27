let mobileBtn = document.getElementById("menueBtn");
let nav = document.querySelector("nav");
let clsoeMenue = document.getElementsByClassName("close");
let navBar = document.getElementById("navBar");

nav.style = "display: none";

let show = false;

mobileBtn.addEventListener("click", () => {
    show = !show;
    if (show) {
        nav.style = "";
        navBar.style.background = "rgba(255, 255, 255, .9)"
    } else {
        nav.style = "display: none";
        navBar.style.background = ""
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

// window.addEventListener('resize', function (event) {
//     if (document.body.clientWidth < 1200) {
//         nav.style = "display: none";
//     } else {
//         nav.style = "display: ''";
//     }
// });