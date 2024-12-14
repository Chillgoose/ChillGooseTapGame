let points = 0;
let timeLeft = 20; // Timer in seconds
let attemptsLeft = 3; // 3 attempts per day
let intervalId;
let gameRunning = false;

// Function to start the game
function startGame() {
    if (attemptsLeft > 0 && !gameRunning) {
        points = 0;
        timeLeft = 20;
        gameRunning = true;
        document.getElementById('score').textContent = `Points: ${points}`;
        document.getElementById('timer').textContent = `Time remaining: ${timeLeft}s`;
        document.getElementById('message').textContent = 'Game started! Tap the falling eggs!';

        // Start the timer
        intervalId = setInterval(updateTimer, 1000);

        // Drop eggs at random intervals
        spawnEggs();
    } else if (attemptsLeft === 0) {
        document.getElementById('message').textContent = 'No attempts left. Come back tomorrow!';
    }
}

// Function to update the timer
function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = `Time remaining: ${timeLeft}s`;

    if (timeLeft === 0) {
        clearInterval(intervalId);
        gameRunning = false;
        attemptsLeft--;
        document.getElementById('attempts').textContent = `Attempts left: ${attemptsLeft}`;
        document.getElementById('message').textContent = attemptsLeft > 0 
            ? 'Time’s up! Start a new game.' 
            : 'No attempts left for today!';
    }
}

// Function to spawn eggs
function spawnEggs() {
    const gameArea = document.getElementById('game-area');
    const spawnInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(spawnInterval);
            return;
        }

        const egg = document.createElement('div');
        egg.classList.add('egg');

        // Set random horizontal position
        const randomX = Math.floor(Math.random() * (gameArea.offsetWidth - 50)); // 50px egg width
        egg.style.left = `${randomX}px`;

        // Add click event for points
        egg.addEventListener('click', () => {
            points++;
            document.getElementById('score').textContent = `Points: ${points}`;
            egg.remove(); // Remove egg after click
        });

        // Remove egg after it falls out of the game area
        egg.addEventListener('animationend', () => {
            egg.remove();
        });

        gameArea.appendChild(egg);
    }, 800); // Spawn an egg every 800ms
}

// Initialize the game
document.getElementById('game-area').addEventListener('click', startGame);
