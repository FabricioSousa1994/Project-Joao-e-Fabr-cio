// Collision check
function checkGameOver() {
  const crash = new Audio("sound/crash.mp3");
  const crashed = carsRight.some((car) => {
    if (zePovinho.collisionWithObstacle(car)) {
      return true;
    }
    return false;
  });
  const crashed2 = carsLeft.some((car) => {
    if (zePovinho.collisionWithObstacle(car)) {
      return true;
    }
    return false;
  });

  if (crashed || crashed2) {
    gameArea.gameIsOver = true;
    gameArea.stop();
    crash.play();
    setTimeout(() => {
      document.getElementById("menu").style.display = "flex";
    }, 3000);
  }
}

function checkWin() {
  const costaImage = new Image();
  costaImage.src = "images/costa.jpg";
  if (zePovinho.y <= 70) {
    counter = 125;
    setTimeout(() => {
      gameArea.stop();
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      context.drawImage(
        costaImage,
        0,
        0,
        canvas.clientWidth,
        canvas.clientHeight
      );
      winMusic.play()
      setTimeout(() => {
        counter = 0;
        document.getElementById("menu").style.display = "flex";
      }, 5000);
    }, 1000);
  }
}

const countImg = document.createElement("img");
countImg.src = "images/count.gif";
const img = [];

// Countdown
function counting() {
  img.push(countImg);
  document.getElementById("count").appendChild(img[0]);
  setTimeout(() => {
    document.getElementById("count").style.display = "none";
  }, 3000);
}

let interval;
let counter = 0;

const gameArea = {
  frames: 0,
  gameIsOver: false,
  start: () => {
    interval = setInterval(updateGameArea, 20);
  },
  stop: () => {
    clearInterval(interval);
  },
  clear: () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  },
  score: () => {
    context.font = "15px Silkscreen";
    context.fillStyle = "white";
    context.fillText(`Score: ${counter},00€`, 20, 30);
  },
};

function updateGameArea() {
  if (!gameArea.gameIsOver) {
    insertCars();
    gameArea.frames++;
    gameArea.clear();
    carsRight.forEach((car) => {
      car.drawRight();
      car.newPositionRight();
    });
    carsLeft.forEach((car) => {
      car.drawLeft();
      car.newPositionLeft();
    });
    zePovinho.draw();
    costa.draw();
    checkGameOver();
    gameArea.score();
    checkWin();
  }
}
