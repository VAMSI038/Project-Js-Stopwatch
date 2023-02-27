let time = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");


let startTime = 0;
let elapsedTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let intervalId = 0;
let pause = true;

startBtn.addEventListener("click", () => {
    if (pause) {
        pause = false;
        startTime = Date.now() - elapsedTime - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pauseBtn.addEventListener("click", () => {
    if (!pause) {
        pause = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    pause = true;
    startTime = 0;
    elapsedTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    intervalId = 0;
    clearInterval(intervalId);
    time.textContent = `00:00:00`;
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    function pad(unit) {
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }
    time.textContent = `${hrs}:${mins}:${secs}`;
}