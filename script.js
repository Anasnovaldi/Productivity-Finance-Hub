const hours = document.getElementById("hours")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

setInterval(function (){
    let datenow = new Date();
    hours.innerText = datenow.getHours();
    minute.innerText = datenow.getMinutes();
    second.innerText = datenow.getSeconds();
}, 1000)