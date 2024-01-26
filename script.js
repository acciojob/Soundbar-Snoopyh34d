//your JS code here. If required.
let audio;

function playSound(soundFileName) {
    stopAudio(); // Stop any currently playing audio

    audio = new Audio(`sounds/${soundFileName}`);
    audio.play();
}

function stopAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
