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
  const crashed = carsLeft.some((car) => {
    return zePovinho.collisionWithObstacle(car)
  });
  const crashed2 = carsRight.some((car) => {
    return zePovinho.collisionWithObstacle(car)

  });
  console.log(crashed)

  if (crashed || crashed2) {
    console.log("crash")
    gameIsOver = true;
    gameArea.stop();
    gameArea.clear()
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
}