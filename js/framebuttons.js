framesList = document.querySelector('.frames-list');

function duplicateFrame(duplicate) {
    const num = duplicate.classList.item(1).slice(duplicate.classList.item(1).length - 1);

    const frameCopy = document.createElement('li');
    frameCopy.classList.add('frame');

    const previous = document.querySelector(`.frame${num}`);
    framesList.insertBefore(frameCopy, previous.nextSibling);

    length = document.getElementsByClassName('frame').length;
    frameCopy.classList.add(`frame${length}`);

    const frameCopyCanv = document.createElement('canvas');
    frameCopyCanv.classList.add('frame-canvas');
    frameCopyCanv.classList.add(`frame-canvas${length}`);

    createDeleteButton(length,frameCopy);
    createCopyButton(length, frameCopy);

    Frames.splice(num, 0, length);
    frameCopy.appendChild(frameCopyCanv);

    context.clearRect(0, 0, canv.offsetWidth, canv.offsetHeight);
    
    const previousCanv = document.querySelector(`.frame-canvas${num}`);
    const cont = frameCopyCanv.getContext('2d');
    cont.drawImage(previousCanv, 0, 0, 300, 150);
    context.drawImage(previousCanv, 0, 0, canv.offsetWidth, canv.offsetHeight);
    checkForAddingDeleteToFirst();
}

function deleteFrame(deleting) {
    const num = deleting.classList.item(1).slice(deleting.classList.item(1).length - 1);
    const deletedFrame = document.querySelector(`.frame${num}`);
    Frames.splice(Frames.indexOf(num), 1);
    deletedFrame.remove();

    if ( Frames.length === 1) {
        const firstFrameDeleteButton = document.querySelector(`.delete-frame${Frames[0]}`);
        firstFrameDeleteButton.remove();
    }
}

framesList.addEventListener('click', (e) => {
    if (e.target.classList.item(0) === 'duplicate-frame') {
        const duplicate = e.target;
        duplicateFrame(duplicate);
    } else if (e.target.classList.item(0) === 'delete-frame') {
        const deleting = e.target;
        deleteFrame(deleting);
    }
});
