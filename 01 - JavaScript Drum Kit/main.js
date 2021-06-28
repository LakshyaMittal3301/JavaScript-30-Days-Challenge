function playSound(event){
    const key = event.key;
    const element = document.querySelector(`.key[data-key="${key}"]`);
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if(!element) return;
    // audio.currentTime = 0 rewinds the audio to starting
    // if the same button is pressed while the audio was already playing
    audio.currentTime = 0;
    audio.play();
    element.classList.add("playing");
}

function removeCSS(event){
    // "this" gives the element on which the listener was activated
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key)=> key.addEventListener("transitionend", removeCSS));

document.addEventListener("keypress", playSound);
