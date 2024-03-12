onUiLoaded(async () => {
    ['txt', 'img'].forEach((tab) => {

        const result = document.getElementById(`${tab}2img_gallery`);
        const curtain = document.createElement('div');
        curtain.classList.add('curtains');
        curtain.classList.add('curtain-off');

        curtain.addEventListener('click', () => {
            if (curtain.classList.contains('curtain-on')) {
                curtain.classList.remove('curtain-on');
                curtain.classList.add('curtain-off');
            } else {
                curtain.classList.remove('curtain-off');
                curtain.classList.add('curtain-on');
            }
        });

        result.appendChild(curtain);

    });

    const tabs = document.getElementById('mode_img2img');
    const curtain = document.createElement('div');
    curtain.classList.add('curtains');
    curtain.classList.add('curtain-off');

    curtain.addEventListener('click', () => {
        if (curtain.classList.contains('curtain-on')) {
            curtain.classList.remove('curtain-on');
            curtain.classList.add('curtain-off');
        } else {
            curtain.classList.remove('curtain-off');
            curtain.classList.add('curtain-on');
        }
    });

    tabs.appendChild(curtain);

});
