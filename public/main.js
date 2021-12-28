function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

/*

class Keys {
    constructor(title, keyCode, audio, row) {
        this.title = title;
        this.keyCode = keyCode;
        this.audio = audio;
        this.row = row;
    }
}

var famousKeys = [{
    title: "Intro",
    keyCode: "81",
    audio: "sounds/famous/manintro.mp3"
}, {
    title: "Beat",
    data_key: "87",
    src: "sounds/famous/sample.wav.mp3"
}];

// Write class that will create keys
class Key {
    constructor(title, keyCode, audio) {
        this.title = title;
        this.keyCode = keyCode;
        this.audio = audio;
    }
    render() {
        const key = document.createElement('div');
        key.setAttribute('data-key', this.keyCode);
        key.classList.add('key');
        key.innerHTML = `
        <kbd>${this.title}</kbd>
        <span class="sound">${this.title}</span>
        `;
        return key;
    }
}
*/