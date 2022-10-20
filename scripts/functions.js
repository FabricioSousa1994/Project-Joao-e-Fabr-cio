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
  costa.draw()
  checkGameOver();
  /* checkWin()
  gameArea.score() */
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
  /* const crashed3 = () => {
    if (zePovinho.x > 600 || zePovinho.x < 0 || zePovinho.y > 800) {
    return true;
  }
    return false; */
}

  if (crashed || crashed2 /* || crashed3 */) {
    audio.pause();
    gameIsOver = true;
    gameArea.stop();
    //gameArea.clear();
    //context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    //context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  }


let win = false;

function checkWin() {
  const winner = () => {
    if (zePovinho.y <= 200) {
    return true;
  }
    return false
} 
  if (winner) {
    win = true;
  }
}


let counter = 0;

function scorer() {
  if (checkWin()) {
  counter +125; 
  }
}