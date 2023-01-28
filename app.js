const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function timer(){
    currentYear = new Date().getFullYear();
    deadline = new Date(`January 01 ${currentYear + 1} 00:00:00`);
    diff = deadline - new Date();

    d = Math.floor(diff / 1000 / 60 / 60 / 24);
    h = Math.floor(diff / 1000 / 60 / 60) % 24;
    m = Math.floor(diff / 1000 / 60) % 60;
    s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(timer, 100);
