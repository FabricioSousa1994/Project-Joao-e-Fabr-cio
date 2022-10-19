function isAudioPlaying() {
  if (audioIsPlaying === true) {
    audio.pause();
    audioIsPlaying = false;
  } else {
    audio.play();
    audioIsPlaying = true;
  }
}
function updateGameArea() {
  gameArea.frames++;
  gameArea.clear();
  insertCars();
  carsRight.forEach((car) => {
    car.draw();
    car.newPosition();
  });
  carsLeft.forEach((car) => {
    car.drawLeft();
    car.newPositionLeft();
  });
  zePovinho.draw();
  checkGameOver();
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
    gameIsOver = true;
    gameArea.stop();
    //gameArea.clear();
    //context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    //context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  }
}
