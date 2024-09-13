let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// let hour = 00;
// let minute = 00;
// let second = 00;
// let count = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});






