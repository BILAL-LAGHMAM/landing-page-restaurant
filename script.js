const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function () {
    search.classList.toggle('active')
}

let  toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function() {
    body.classList.toggle('open');
});