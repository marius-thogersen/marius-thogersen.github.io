
addEventListener("DOMContentLoaded", drawCanvas)

const WIDTH = 800, HEIGHT = 600;

function drawCanvas() {
    const canvas = document.getElementById("graph")
    canvas.style.border = "1px solid red";
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    /**@type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d")


    //Lets make the graph skeleton
    const graphStartY = canvas.height - 50;
    const graphStartX = 50;
    const graphHeight = canvas.height - 100;
    const graphWidth = canvas.width - 100;
    ctx.beginPath();
    ctx.moveTo(graphStartX, graphStartY - graphHeight);
    ctx.lineTo(graphStartX, graphStartY);
    ctx.lineTo(graphStartX + graphWidth, graphStartY)
    ctx.strokeStyle = "white"
    ctx.lineWidth = 3;
    ctx.stroke();

    //bottom markers
    ctx.beginPath();
    for(let i = 1; i <= 10; i ++){
        ctx.moveTo(graphStartX + i * (graphWidth / 10), graphStartY - 5);
        ctx.lineTo(graphStartX + i * (graphWidth / 10), graphStartY + 5);
    }
    ctx.stroke();
}
