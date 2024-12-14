body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f8ff;
    background-image: url('https://i.imgur.com/UCw4xUh.jpg'); /* Fun background */
    background-size: cover;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
    margin-top: 20px;
}

#game-area {
    position: relative;
    width: 100%;
    height: 500px;
    border: 2px solid #ccc;
    margin: 20px auto;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.8);
}

#info {
    margin: 20px;
}

#score, #timer, #attempts, #message {
    font-size: 18px;
    color: #444;
}

.egg {
    position: absolute;
    width: 50px;
    height: 60px;
    background-image: url('https://i.imgur.com/C1kGuve.png'); /* Goose egg image */
    background-size: cover;
    cursor: pointer;
    animation: fall 4s linear infinite;
}

@keyframes fall {
    0% {
        top: -60px;
    }
    100% {
        top: 500px; /* Game area height */
    }
}
