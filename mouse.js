addEventListener("DOMContentLoaded", () => {
    let last = 0;
    addEventListener("mousemove", (e) => {
        const now = new Date();
        if (now - last > 100) {
            last = now;
            createStar(e.clientX, e.clientY);
        }
    });
    addEventListener("touchstart", (e) => {
        for (let i = 0; i < 10; i++) {
            createStar(e.touches[0].clientX, e.touches[0].clientY);
            console.log(e);
        }
    });

    function createStar(x, y) {
        const div = document.createElement("div");
        div.classList.add("star");
        const jump = Math.random() * (-0.5 + 0.2) - 0.2;
        const skip = Math.floor((Math.random() - 0.8) * 100);
        div.style.setProperty("--jump", `${jump}`);
        div.style.setProperty("--skip", `${skip + Math.sign(skip) * 15}px`);
        div.style.setProperty("--start", y + "px");
        div.style.left = `${x}px`;
        // div.style.top = `${y}px`;
        document.body.appendChild(div);
        setTimeout(() => document.body.removeChild(div), 3000);
    }
})