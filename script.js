const hrEle = document.querySelector(".hr");
const minEle = document.querySelector(".min");
const secEle = document.querySelector(".sec");

setInterval(() => {
    let date = new Date();
    let hr = date.getHours() % 12;
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrAngle = (hr * 30) + (min * 0.5);
    let minAngle = min * 6;
    let secAngle = sec * 6;

    hrEle.style.transform = `rotate(${hrAngle}deg)`;
    minEle.style.transform = `rotate(${minAngle}deg)`;
    secEle.style.transform = `rotate(${secAngle}deg)`;

}, 1000);
