function startGame() {
  zePovinho.draw();
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
}
