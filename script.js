let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = '0';
let minute = '0';
let second = '0';
let count = '0';

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
    lap();
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
    document.getElementById('lap').innerHTML = " ";
    i =1;
});

function stopWatch(){
    if(timer){
        count++;
       if(count ==90){
         second++;
         count =0;
       }

       if(second==60){
         minute++;
         second =0;
       }

        if(minute == 60){
            hour++;
            minute=0;
            second =0;
        }

        let hrstring = hour;
        let minstring = minute;
        let secstring = second;
        let countstring = count;

        if(hour<10){
            hrstring = "0"+hrstring;
        }
        if(minute<10){
            minstring = "0"+minstring;
        }
        if(second<10){
            secstring = "0"+secstring;
        }
        if(count<10){
            countstring = "0"+countstring;
        }

        document.getElementById('hr').innerHTML=hrstring;
        document.getElementById('min').innerHTML=minstring;
        document.getElementById('sec').innerHTML=secstring;
        document.getElementById('count').innerHTML=countstring;
        setTimeout(stopWatch,10);
    }
}

let i =1;
function lap() {
        let hrstring = hour;
        let minstring = minute;
        let secstring = second;
        let countstring = count;

    let lapnow = hrstring + " : " + minstring + " : " + secstring + " : " + countstring;
    var lapname = "Lap" + i;
    i++;
         
    let lapEntry = document.createElement('p');
    lapEntry.innerText =lapname +" : "+ lapnow;
   
    
    document.getElementById('lap').appendChild(lapEntry);
}




