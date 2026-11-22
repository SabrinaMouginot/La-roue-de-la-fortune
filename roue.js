let wheel = document.querySelector('.wheel');
let btn = document.getElementById('spin');
let number = Math.ceil(Math.random()*1000);

btn.onclick = function () {
    wheel.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random()*1000);
}