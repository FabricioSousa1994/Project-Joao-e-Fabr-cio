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
  if (!gameArea.gameIsOver) {
    insertCars();
    gameArea.frames++;
    gameArea.clear();
    carsRight.forEach((car) => {
      car.draw();
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
    /* context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.font = "50px Silkscreen";
    context.fillStyle = "black";
    context.fillText("R.I.P ZÉ POVINHO", 50, 400); */
  }
}

function checkWin() {
  if (zePovinho.y <= 60) {
    counter = 125;
    if ((counter = 125)) {
      //setTimeout(() => {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        context.font = "50px Silkscreen";
        context.fillStyle = "black";
        context.fillText("dkosadjas", 50, 400);
      //}, 750);
    }
  }
}
