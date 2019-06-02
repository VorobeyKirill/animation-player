const button = document.querySelector('.add-frame');
let framesList = document.querySelector('.frames-list');

function createFrame() {
    const frame = document.createElement('li');
    frame.classList.add('frame');
    framesList.appendChild(frame);
    let length = document.getElementsByClassName('frame').length;
    frame.classList.add(`frame${length}`);
    
    const frameCanvas = document.createElement('canvas');
    frameCanvas.classList.add('frame-canvas');
    frameCanvas.classList.add(`frame-canvas${length}`);

    createDeleteButton(length, frame);
    createCopyButton(length, frame);
    
    Frames.push(length);
    frame.appendChild(frameCanvas);
    context.clearRect(0, 0, canv.offsetWidth, canv.offsetHeight);
}

function createCopyButton(length, frame) {
    const copyButton = document.createElement('button');
    copyButton.classList.add('duplicate-frame');
    copyButton.classList.add(`duplicate-frame${length}`);
    frame.appendChild(copyButton);
}

function createDeleteButton(length, frame) {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-frame');
    deleteButton.classList.add(`delete-frame${length}`);
    frame.appendChild(deleteButton)
}

function checkForAddingDeleteToFirst() {
    if (Frames.length === 2) {
        const frame = document.querySelector('.frame1');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-frame');
        deleteButton.classList.add(`delete-frame1`);
        frame.insertBefore(deleteButton, document.querySelector('.duplicate-frame1'));
    }
}

button.addEventListener('click', () => {
    createFrame();
    checkForAddingDeleteToFirst();
});
