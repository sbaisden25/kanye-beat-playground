
let justPlayed = null;

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {

    if (e.keyCode === justPlayed) return; // If same key has just been played without key being released, don't play again

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);


    if (!audio) return;

    key.classList.toggle('playing');
    audio.currentTime = 0;
    audio.play();
    justPlayed = e.keyCode; // Set the key that has just been played
}

function playSoundOnClick(e) {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    const key = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSoundOnClick));

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', () => justPlayed = null); // Allow key to be played again




function stopAllSounds(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => audio.pause());
}


