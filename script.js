/*const hrEle = document.querySelector(".hr")
const MinEle =document.querySelector(".min")
const SecEle =document.querySelector(".sec")
setInterval(()=>{
    let date=new date()
    hr = date.getHours()*30
    min= date.getMinutes()*6
    sec=date.getSeconds()*6
    hrEle.Style.transform ="rotateZ(${(hr)+min/12}deg)"
})   
*/
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