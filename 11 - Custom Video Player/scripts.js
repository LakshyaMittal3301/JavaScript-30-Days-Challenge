// Get the Elements

const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const playButton = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll("[type='range']");
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

// Make Functions

function togglePlay(e){
    if(video.paused) video.play();
    else video.pause();
}

function update(){
    const icon = this.paused ? "►" : "❚ ❚";
    playButton.innerText = icon;
}

function skip(e){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange(){
    video[this.name] = this.value;
}

function handleProgress(e){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = ( e.offsetX / progress.offsetWidth ) * video.duration;
    video.currentTime = scrubTime;
}

// Add EventListeners

video.addEventListener("click", togglePlay);
video.addEventListener("play", update);
video.addEventListener("pause", update);
video.addEventListener("timeupdate", handleProgress)

playButton.addEventListener("click", togglePlay);


skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener(`input`, handleRange));
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove",(e) => mousedown && scrub(e));
progress.addEventListener("mousedown",() => mousedown = true);
progress.addEventListener("mouseup",() => mousedown = false);

