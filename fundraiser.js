addEventListener("DOMContentLoaded", () => {

    updateWidth()
    const tabContent = document.querySelector(".tab-content")
    const tabs = document.querySelector(".tabs")
    let touch = {};
    tabContent.addEventListener("touchstart", (e) => {
        touch.startX = e.changedTouches[0].clientX
    })
    tabContent.addEventListener("touchend", (e) => {
        touch.endX = e.changedTouches[0].clientX
        const active = parseInt(getComputedStyle(tabs).getPropertyValue("--active"));
        console.log(active, typeof active)
        const current = document.querySelectorAll(".tabs input")
        if (touch.startX > touch.endX) {
            if (active < 2) {
                current[active + 1].checked = true;
            }
        } if (touch.startX < touch.endX) {
            if (active > 0) {
                current[active - 1].checked = true;
            }
        }
        touch = {};
    })
});

addEventListener("resize", updateWidth)

function updateWidth() {
    document.getElementById("meta-data").innerText = document.body.getBoundingClientRect().width;
}
