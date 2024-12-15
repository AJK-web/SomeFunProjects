// Get the canvas element
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
controler = document.querySelector(".controler")

// Define player object
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 20,
    height: 20,
    speed: 5,
}

// Event listeners for player movement
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
        leftPressed = true;
    } else if (event.key === "ArrowRight") {
        rightPressed = true;
    } else if (event.key === "ArrowUp") {
        upPressed = true;
    } else if (event.key === "ArrowDown") {
        downPressed = true;
    }
}

function handleKeyUp(event) {
    if (event.key === "ArrowLeft") {
        leftPressed = false;
    } else if (event.key === "ArrowRight") {
        rightPressed = false;
    } else if (event.key === "ArrowUp") {
        upPressed = false;
    } else if (event.key === "ArrowDown") {
        downPressed = false;
    }
}

// Update function
function update() {
    if (leftPressed && player.x > 0) {
        player.x -= player.speed;
    }
    if (rightPressed && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }
    if (upPressed && player.y > 0) {
        player.y -= player.speed;
    }
    if (downPressed && player.y < canvas.height - player.height) {
        player.y += player.speed;
    }

    // Ensure the player stays within the canvas boundaries
    if (player.x < 0) {
        player.x = 0;
    }
    if (player.x > canvas.width - player.width) {
        player.x = canvas.width - player.width;
    }
    if (player.y < 0) {
        player.y = 0;
    }
    if (player.y > canvas.height - player.height) {
        player.y = canvas.height - player.height;
    }
}

// Render function
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "darkmagenta";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();