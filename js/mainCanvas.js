        const canv = document.querySelector('.canvas');
        const context = canv.getContext('2d');
        let isMouseDown = false;
        const Frames = [1];

        canv.width = canv.offsetWidth;
        canv.height = canv.offsetHeight;

        canv.addEventListener('mousedown', () => {
            isMouseDown = true;
        });

        document.addEventListener('mouseup', () => {
            isMouseDown = false;
            context.beginPath();
            const length = document.getElementsByClassName('frame').length;
            const canvFrame = document.querySelector(`.frame-canvas${length}`);
            const cont = canvFrame.getContext('2d');
            cont.drawImage(canv, 0, 0, 300, 150);
        });


        const radius = 3;
        context.lineWidth = radius * 2;

        canv.addEventListener('mousemove', (e) => {
            if(isMouseDown) {
                context.lineTo(e.offsetX, e.offsetY);
                context.stroke();

                context.beginPath();
                context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);
                context.fill();

                context.beginPath();
                context.moveTo(e.offsetX, e.offsetY);
            }
        });

