let day = document.getElementById('day');
let hour = document.getElementById('hrs');
let minute = document.getElementById('min');
let second = document.getElementById('sec');

const timer = (() => {

    let da = 2;
    let hr = 23;
    let min = 59;
    let sec = 50;

    let days = da;
    let hours = hr;
    let minutes = min;
    let seconds = sec;

    setInterval (() => {

        sec++;                  
        
        if(sec < 10){
            second.innerHTML = '0' + sec;
        } else {
            second.innerHTML = sec;
        }

        if(sec >= 60){
            min++;
            sec = 0;
            second.innerHTML = sec;
        }

        if(min < 10) {
            minute.innerHTML = '0' + min;
        } else {
            minute.innerHTML = min;
        }

        if(min >= 60){
            hr++;
            min = 0;
            minute.innerHTML = min;
        }

        if(hr < 10){
            hour.innerHTML = '0' + hr;
        } else {
            hour.innerHTML = hr;
        }

        if(hr >= 24){
            da++;
            hr = 0;
            hour.innerHTML = hr;
        }
        
        if(da < 10){
            day.innerHTML = '0' + da;
        } else {
            day.innerHTML = da;
        }
    }, 1000);
});

timer()