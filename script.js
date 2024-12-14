let points = 0;
let timeLeft = 24 * 60 * 60;  // 24 hours in seconds

const pointsDisplay = document.getElementById("points");
const timerDisplay = document.getElementById("timer");
const tapButton = document.getElementById("tapButton");

// Update the points display
function updatePoints() {
    pointsDisplay.textContent = points;
}

// Timer logic
function updateTimer() {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        tapButton.disabled = true; // Disable tapping after 24 hours
        alert("Game Over! Please come back tomorrow.");
    }
}

// Handle the tap event
tapButton.addEventListener("click", () => {
    points++;
    updatePoints();
});

// Start the timer
const timerInterval = setInterval(updateTimer, 1000);

