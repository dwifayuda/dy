let startTime = 0;
let endTime = 0;
let running = false;
let intervalId = 0;

document.getElementById('start-btn').addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime();
        running = true;
        intervalId = setInterval(() => {
            let currentTime = new Date().getTime();
            let elapsedTime = currentTime - startTime;
            let stopwatchTime = formatTime(elapsedTime);
            document.getElementById('stopwatch-display').innerText = stopwatchTime;
        }, 1000);
        document.getElementById('start-btn').disabled = true;
        document.getElementById('stop-btn').disabled = false;
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    if (running) {
        endTime = new Date().getTime();
        running = false;
        clearInterval(intervalId);
        document.getElementById('start-btn').disabled = false;
        document.getElementById('stop-btn').disabled = true;
    }
});

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}