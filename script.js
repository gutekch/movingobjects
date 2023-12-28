document.addEventListener("DOMContentLoaded", function () {

const firstMoving = document.getElementById('first-square');
let currentPosition = 0;
let moveRight = true;

setInterval(() => {
    if (moveRight){
        currentPosition += 1;
    } else {
        currentPosition -= 1;
    }
    const rightBoundary = window.innerWidth - firstMoving.offsetWidth;
    if (currentPosition >= rightBoundary || currentPosition <= 0) {
        moveRight = !moveRight; // Change direction
    }

    firstMoving.style.left = currentPosition + 'px';
  }, 10);





});