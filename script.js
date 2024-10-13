const ball = document.getElementById('ball');
const gameArea = document.getElementById('gameArea');

let posX = 0;
let posY = 0;
let speedX = 2; // Horizontal speed
let speedY = 2; // Vertical speed

function animate() {
    posX += speedX;
    posY += speedY;

    
    if (posX + ball.offsetWidth >= gameArea.offsetWidth || posX < 0) {
        speedX = -speedX; 
    }
    if (posY + ball.offsetHeight >= gameArea.offsetHeight || posY < 0) {
        speedY = -speedY; 
    }

    ball.style.left = posX + 'px';
    ball.style.top = posY + 'px';

    requestAnimationFrame(animate);
}

animate();

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            if (posY > 0) posY -= 10; // Move up, but not beyond top
            break;
        case 'ArrowDown':
            if (posY + ball.offsetHeight < gameArea.offsetHeight) {
                posY += 10; // Move down, but not beyond bottom
            }
            break;
        case 'ArrowLeft':
            if (posX > 0) posX -= 10; // Move left, but not beyond left
            break;
        case 'ArrowRight':
            if (posX + ball.offsetWidth < gameArea.offsetWidth) {
                posX += 10; // Move right, but not beyond right
            }
            break;
    }

    ball.style.left = posX + 'px';
    ball.style.top = posY + 'px';
});

