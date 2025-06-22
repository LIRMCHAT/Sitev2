const avatar = document.getElementById('avatar');
const static = '/main/imgs/lirm.jpg';
const gif = '/main/imgs/lirm.gif';

avatar.addEventListener('click', () => {
    if (avatar.src.includes(static)) {
        avatar.src = gif;
        avatar.style.pointerEvents = 'none';

        avatar.addEventListener('load', () => {
            setTimeout(() => {
                avatar.src = static;
                avatar.style.pointerEvents = 'auto';
            }, 3320);
        }, { once: true });
    }
});

function updateProgressBar() {
    const duration = 0;
    const currentTime = 0;
    const progress = (currentTime / duration) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-time').textContent = formatTime(currentTime);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}

updateProgressBar();