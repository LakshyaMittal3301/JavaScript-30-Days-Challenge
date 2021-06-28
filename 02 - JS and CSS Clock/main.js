var secondHand = document.querySelector(`.second-hand`);
var minHand = document.querySelector(`.min-hand`);
var hourHand = document.querySelector(`.hour-hand`);

// Quick Fix for second hand glitch on turning 59 seconds to 0 second
var originalDuraion = secondHand.style.transitionDuration;

function setDate(){
    const today = new Date();
    const secDeg = (today.getSeconds() * 6 + 90)%360;
    const minDeg = (today.getMinutes() * 6 + 90)%360;
    const hourDeg = (today.getHours() * 360/12 + 90)%360;
    if(secDeg === 0){
        secondHand.style.transitionDuration = "0s";
        setTimeout(()=> {
            secondHand.style.transitionDuration = originalDuraion;
        }, 900);
    }

    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);