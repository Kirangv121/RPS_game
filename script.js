const snake = document.getElementById('snake');
let gameStarted = false;

const container = document.querySelector('.game-container');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

document.addEventListener('keydown', moveSnake);

function startGame() {
  gameStarted = true;
  document.querySelector('button').setAttribute('disabled', 'true');
}

function moveSnake(event) {
  if (gameStarted) {
    const speed = 10;

    switch (event.key) {
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
    }

    checkCollision();
  }
}

function moveLeft() {
  const currentLeft = parseInt(getComputedStyle(snake).left);
  if (currentLeft - speed >= 0) {
    snake.style.left = currentLeft - speed + 'px';
  }
}

function moveRight() {
  const currentLeft = parseInt(getComputedStyle(snake).left);
  const snakeWidth = parseInt(getComputedStyle(snake).width);

  if (currentLeft + snakeWidth + speed <= containerWidth) {
    snake.style.left = currentLeft + speed + 'px';
  }
}

function moveUp() {
  const currentTop = parseInt(getComputedStyle(snake).top);
  if (currentTop - speed >= 0) {
    snake.style.top = currentTop - speed + 'px';
  }
}

function moveDown() {
  const currentTop = parseInt(getComputedStyle(snake).top);
  const snakeHeight = parseInt(getComputedStyle(snake).height);

  if (currentTop + snakeHeight + speed <= containerHeight) {
    snake.style.top = currentTop + speed + 'px';
  }
}

function checkCollision() {
  const currentLeft = parseInt(getComputedStyle(snake).left);
  const currentTop = parseInt(getComputedStyle(snake).top);
  const snakeWidth = parseInt(getComputedStyle(snake).width);
  const snakeHeight = parseInt(getComputedStyle(snake).height);

  if (
    currentLeft < 0 ||
    currentLeft + snakeWidth > containerWidth ||
    currentTop < 0 ||
    currentTop + snakeHeight > containerHeight
  ) {
    endGame();
  }
}

function endGame() {
  alert('Game Over!');
  resetGame();
}

function resetGame() {
  snake.style.left = containerWidth / 2 + 'px';
  snake.style.top = containerHeight / 2 + 'px';
  document.querySelector('button').removeAttribute('disabled');
  gameStarted = false;
}
