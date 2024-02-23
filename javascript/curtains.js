onUiLoaded(async () => {
    ['txt', 'img'].forEach((tab) => {

        const result = document.getElementById(`${tab}2img_results`);
        const curtain = document.createElement('div');
        curtain.classList.add(`${tab}2img_curtains`);
        result.appendChild(curtain);

    });
});
