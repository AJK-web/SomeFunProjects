let Plan = document.querySelector(".Plan")
document.querySelector(".")
document.querySelector(".")
document.querySelector(".")

// Get the canvas element
const controler = document.querySelector(".controler")
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


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

function move_f() {
    leftPressed = false;
    rightPressed = false;
    upPressed = true;
    downPressed = false;
}

function move_l() {
    leftPressed = true;
    rightPressed = false;
    upPressed = false;
    downPressed = false;
}

function move_r() {
    leftPressed = false;
    rightPressed = true;
    upPressed = false;
    downPressed = false;
}

function move_b() {
    leftPressed = false;
    rightPressed = false;
    upPressed = false;
    downPressed = true;
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