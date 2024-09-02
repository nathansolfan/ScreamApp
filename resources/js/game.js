const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let isJumping = false;
let jumpHeight = 0;
let gravity = 2;
let jumpStrength = 4;
let maxJumpHeight = 350; // Set a maximum height for the jump
let xPos = 50;
let moveSpeed = 5;
let isMovingLeft = false;
let isMovingRight = false;

// Function to draw the character
function drawCharacter(y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(xPos, canvas.height - y - 50, 50, 50); // Use xPos for horizontal movement
}

// Function to handle jumping logic
function handleJumpAndMove() {
    if (isJumping && jumpHeight < maxJumpHeight) {
        jumpHeight += jumpStrength;
    } else if (jumpHeight > 0) {
        jumpHeight -= gravity;
    } else {
        jumpHeight = 0; // Ensure the character doesn't go below the ground
    }

    // Handle Horizontal
    if (isMovingLeft && xPos > 0) {
        xPos -= moveSpeed;
    }
    if (isMovingRight && xPos < canvas.width - 50) {
        xPos += moveSpeed;
    }

    drawCharacter(jumpHeight);
    requestAnimationFrame(handleJumpAndMove); // Continue the loop
}

window.onload = function() {
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            isJumping = true;
        }

        if (event.code === 'ArrowLeft') {
            isMovingLeft = true;
        }

        if (event.code === 'ArrowRight') {
            isMovingRight = true;
        }
    });

    document.addEventListener('keyup', function(event) {
        if (event.code === 'Space') {
            isJumping = false;
        }

        if (event.code === 'ArrowLeft') {
            isMovingLeft = false;
        }

        if (event.code === 'ArrowRight') {
            isMovingRight = false;
        }
    });

    handleJumpAndMove(); // Start the jump handling loop
}
