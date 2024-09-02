const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let isJumping = false;
let jumpHeight = 0;
let gravity = 2;
let jumpStrength = 4;
let maxJumpHeight = window.innerHeight * 0.8 - 50 // Set a maximum height for the jump
let xPos = 50;
let moveSpeed = 5;
let isMovingLeft = false;
let isMovingRight = false;

function resizeCanvas() {
    canvas.width = window.innerWidth * 0.8
    canvas.height = window.innerHeight * 0.8
}

// Function to draw the character
function drawCharacter(y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(xPos, canvas.height - y - 50, 50, 50);
}

// Function to handle jumping and movement logic
function handleJumpAndMove() {
    // Handle jumping logic
    if (isJumping && jumpHeight < maxJumpHeight) {
        jumpHeight += jumpStrength;
    } else if (jumpHeight > 0) {
        jumpHeight -= gravity;
    } else {
        jumpHeight = 0; // Ensure the character doesn't go below the ground
    }

    // Handle horizontal movement logic
    if (isMovingLeft && xPos > 0) {
        xPos -= moveSpeed;
    }
    if (isMovingRight && xPos < canvas.width - 50) {
        xPos += moveSpeed;
    }

    // Check if the character has reached the end of the canvas
    if (xPos >= canvas.width - 50) {
        resetPosition(); // Reset position when the character reaches the end
    }

    drawCharacter(jumpHeight);
    requestAnimationFrame(handleJumpAndMove); // Continue the loop
}

// Function to reset the character's position
function resetPosition() {
    xPos = 50;  // Reset character position to the left side
    jumpHeight = 0; // Reset jump height
    gravity = 4;
}

window.onload = function() {
    resizeCanvas(); // Set initial canvas size
    window.addEventListener('resize', resizeCanvas); // Adjust canvas size on window resize


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
