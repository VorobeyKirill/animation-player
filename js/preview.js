const prev = document.querySelector('.animation-field');
const fps = document.querySelector('.fps-counter');
const inputFPS = document.querySelector('.animation-fps');
const fullScreen = document.querySelector('.full-screen');

let i = 0;
let val = inputFPS.value;

function animatePreview() {
    if (i < Frames.length) {
        const frame = document.querySelector(`.frame-canvas${Frames[i]}`);
        const img = frame.toDataURL();
        prev.style.backgroundImage = `url(${img})`;
        i += 1;
    } else {
        i = 0;
        const frame = document.querySelector(`.frame-canvas${Frames[i]}`);
        const img = frame.toDataURL();
        prev.style.backgroundImage = `url(${img})`;
        i += 1;
    }
}

let interval = setInterval(animatePreview, 1000 / val);

function checkForInterval() {
    if(interval) {
        clearInterval(interval);
        interval = setInterval(animatePreview, 1000 / val);
    } else {
        interval = setInterval(animatePreview, 1000 / val);
    }
}

inputFPS.addEventListener('change', () => {
    val = inputFPS.value; 
    checkForInterval();
 });


fullScreen.addEventListener('click', () => {
    prev.requestFullscreen();
})


