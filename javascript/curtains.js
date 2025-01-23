(function () {
    onUiLoaded(() => {
        for (const tab of ['txt', 'img']) {
            const result = document.getElementById(`${tab}2img_gallery`);

            const curtain = document.createElement('div');
            curtain.classList.add('curtains');
            curtain.classList.add('curtain-off');

            curtain.addEventListener('click', () => {
                curtain.classList.toggle('curtain-on');
                curtain.classList.toggle('curtain-off');
            });

            result.appendChild(curtain);
        }

        const i2i_input = document.getElementById('mode_img2img');

        const curtain = document.createElement('div');
        curtain.classList.add('curtains');
        curtain.classList.add('curtain-off');

        curtain.addEventListener('click', () => {
            curtain.classList.toggle('curtain-on');
            curtain.classList.toggle('curtain-off');
        });

        i2i_input.appendChild(curtain);
    });
})();
