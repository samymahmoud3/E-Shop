//counter down
let final_time = new Date("Tue Mar 28 2024 21:50:49").getTime();

let counter = setInterval(() => {
    let current_time = new Date().getTime();
    let diff =final_time  - current_time;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diff % (1000 * 60) / 1000)

    document.querySelector('.day').innerHTML= days < 10 ? `0${days}` : days;
    document.querySelector('.hour').innerHTML= hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minute').innerHTML=minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.second').innerHTML= seconds < 10 ? `0${seconds}` : seconds;

    if (diff < 0) {
        document.querySelector('.day').innerHTML= "0 0" ;
        document.querySelector('.hour').innerHTML= "0 0";
        document.querySelector('.minute').innerHTML="0 0";
        document.querySelector('.second').innerHTML= "0 0";
    }
},1000);
