addEventListener("DOMContentLoaded", () => {

    updateWidth()
    const tabContent = document.querySelector(".tab-content")
    console.log(tabContent)

    let touch = { startX: null, startY: null, endX: null, endY: null };
    tabContent.addEventListener("touchstart", (e) => {
        console.log(e)
        touch.startX = e.changedTouches[0].clientX

    })
    tabContent.addEventListener("touchend", (e) => {
        touch.endX = e.changedTouches[0].clientX
        console.table(touch)
        if (touch.startX > touch.endX) {
            console.log("swiped left-to-right")
        } if (touch.startX < touch.endX) {
            console.log("swiped right-to-left")
        }
    })
});
addEventListener("resize", updateWidth)

function updateWidth() {
    document.getElementById("meta-data").innerText = screen.width;
}
