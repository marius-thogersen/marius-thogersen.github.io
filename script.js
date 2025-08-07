const paceResult = document.getElementById("pace");
const paceEl = document.getElementById("paceInput");
const timeResult = document.getElementById("run");
const restResult = document.getElementById("rest");
const floatingElement = document.getElementById("floatingElement");
const timeline = document.getElementById("timeline")

let pace = 300;
const distance = 6.706;
let isSliding = false;

paceEl.addEventListener("input", (e) => {
  if (!isSliding) {
    isSliding = true;
    paceEl.classList.add("sliding");
    onSliding();
  }

  const seconds = e.target.value;
  pace = parseInt(seconds);
  const paceString = formatSeconds(pace);
  paceResult.innerText = paceString;
  floatingElement.innerText = paceString;
  const finishTime = Math.round(pace * distance + 0.49);
  const restTime = 3600 - finishTime;
  timeResult.innerText = formatSeconds(finishTime);
  restResult.innerText = restTime > 0 ? formatSeconds(restTime) : "DNF";
  timeline.value = finishTime;
});

paceEl.addEventListener("change", (e) => {
  paceEl.classList.remove("sliding");
  isSliding = false;
  floatingElement.classList.remove("show");
  removeEventListener("pointermove", positionFloater);
});

function formatSeconds(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  let result = min + ":" + sec.toString().padStart(2, "0");
  if (min > 59) {
    return (
      Math.floor(min / 60) +
      ":" +
      (min % 60).toString().padStart(2, "0") +
      ":" +
      sec.toString().padStart(2, "0")
    );
  }
  return result;
}

function onSliding() {
  addEventListener("pointermove", positionFloater);
  floatingElement.classList.add("show");
}

function positionFloater(e) {
  const y = paceEl.getBoundingClientRect().y + 16;
  floatingElement.style.left = `${e.clientX - 10}px`;
  floatingElement.style.top = `${y}px`;
}
