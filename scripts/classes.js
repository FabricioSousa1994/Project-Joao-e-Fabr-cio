const carsRight = [];
const carsLeft = [];

// Character class
class Char {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
    this.image = image;
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, 30, 30);
  }
  moveUp() {
    this.y -= 13;
  }
  moveDown() {
    this.y += 13;
  }
  moveLeft() {
    this.x -= 20;
  }
  moveRight() {
    this.x += 20;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  collisionWithObstacle(car) {
    return !(
      this.bottom() < car.top() ||
      this.top() > car.bottom() ||
      this.right() < car.left() ||
      this.left() > car.right()
    );
  }
}

// Car(obstacles) Class
class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.speedX = 2.8;
    // Cars from left to right
    this.obstaclesRight = [
      "./images/carsRight/bluecar.png",
      "./images/carsRight/browncar.png",
      "./images/carsRight/firetruck.png",
      "./images/carsRight/greencar.png",
      "./images/carsRight/orangecar.png",
      "./images/carsRight/redcar.png",
      "./images/carsRight/taxi.png",
      "./images/carsRight/truck.png",
      "./images/carsRight/whatcolorcar.png",
    ];
    // Cars from right to left
    this.obstaclesLeft = [
      "./images/carsLeft/bluecar.png",
      "./images/carsLeft/browncar.png",
      "./images/carsLeft/firetruck.png",
      "./images/carsLeft/greencar.png",
      "./images/carsLeft/orangecar.png",
      "./images/carsLeft/police.png",
      "./images/carsLeft/redcar.png",
      "./images/carsLeft/taxi.png",
      "./images/carsLeft/police.png",
      "./images/carsLeft/whatcolorcar.png",
    ];
    this.random = parseInt(Math.random() * (0 + this.obstaclesRight.length)); //obstaclesRight and left has the same lenght
  }
  draw() {
    this.image.src = this.obstaclesRight[this.random]; // Get a image randomly
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  newPosition() {
    this.x += this.speedX;
  }
  drawLeft() {
    this.image.src = this.obstaclesLeft[this.random];
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  newPositionLeft() {
    this.x -= this.speedX;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}

class Costa {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.image = image;
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, 30, 30);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}

const imageCosta = new Image();
imageCosta.src = "images/antonio-costa.jpg";

const costa = new Costa(500, 500, imageCosta);
