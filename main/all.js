function isWinter() {
    const now = new Date();
    const month = now.getMonth();
    return month === 11 || month === 0 || month === 1;
}

function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    const numberOfFlakes = 100;

    for (let i = 0; i < numberOfFlakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 3 + 2;
    const opacity = Math.random() * 0.5 + 0.3;
    const duration = Math.random() * 10 + 5;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.opacity = opacity;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.top = `-${Math.random() * 100}vh`;
    snowflake.style.animationDuration = `${duration}s`;

    snowContainer.appendChild(snowflake);
    }
}

createSnowflakes();

document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function() {
        let page = document.getElementById("page");

        page.classList.add("hide");

        let link = this.getAttribute("data-link");

        setTimeout(() => {
            window.location.href = link;
        }, 600);
    });
});