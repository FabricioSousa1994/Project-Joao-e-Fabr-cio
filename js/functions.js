// Music on/off
function isAudioPlaying() {
  if (audioIsPlaying === true) {
    audio.pause();
    audioIsPlaying = false;
  } else {
    audio.play();
    audioIsPlaying = true;
  }
}

function checkGameOver() {
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
    // audio.pause();
    //crash.play();
    gameArea.gameIsOver = true;
    gameArea.stop();
    gameArea.clear();
    document.getElementById("menu").style.display = "flex";
  }
}

function checkWin() {
  if (zePovinho.y <= 70) {
    counter = 125;
    //setTimeout(() => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.font = "50px Silkscreen";
    context.fillStyle = "black";
    context.fillText("dkosadjas", 50, 400);
    //}, 750);
  }
}

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