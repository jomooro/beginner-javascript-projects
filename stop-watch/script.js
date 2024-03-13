let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerDisplayRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startButton').addEventListener('click', start);
document.getElementById('stopButton').addEventListener('click', stop);
document.getElementById('resetButton').addEventListener('click', reset);

function start() {
    clearInterval(int);
    int = setInterval(updateTimer, 10);
}

function stop() {
    clearInterval(int);
}

function reset() {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayUpdatedTimer();
}

function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        resetMilliseconds();
        seconds++;

        if (seconds === 60) {
            resetSeconds();
            minutes++;

            if (minutes === 60) {
                resetMinutes();
                hours++;
            }
        }
    }
    displayUpdatedTimer();
}

function displayUpdatedTimer() {
    timerDisplayRef.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(milliseconds) {
    return milliseconds < 100 ? (milliseconds < 10 ? `00${milliseconds}` : `0${milliseconds}`) : milliseconds;
}

function resetMilliseconds() {
    milliseconds = 0;
}

function resetSeconds() {
    seconds = 0;
}

function resetMinutes() {
    minutes = 0;
}
