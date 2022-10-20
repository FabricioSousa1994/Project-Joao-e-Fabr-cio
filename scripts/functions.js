function isAudioPlaying() {
  if (audioIsPlaying === true) {
    audio.pause();
    audioIsPlaying = false;
  } else {
    audio.play();
    audioIsPlaying = true;
  }
}

document.getElementById("instructions").onclick = () => {
  document.getElementById("instructions").style.display = "none";
};

function updateGameArea() {
  insertCars();
  gameArea.frames++;
  gameArea.clear();
  carsRight.forEach((car) => {
    car.draw();
    car.newPosition();
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
  /* checkWin();
  scorer(); */

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
    audio.pause();
    gameIsOver = true;
    gameArea.stop();
    /* gameArea.clear();
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); */
  }
}

function checkWin() {
  if (zePovinho.y <= 40) {
    counter = 125;
  }
}

/* function checkWin() {
  const winner = () => {
    if (zePovinho.y <= 350) {
      return true;
    } else {
      return false;
    }
  };

  if (winner) {
    win = true;
  }
}

function scorer() {
  if (checkWin()) {
    counter = 125;
  }
}
 */