const carsRight = [];
const carsLeft = [];

// Car(obstacles) Class
class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.speedX = 3;

    // Cars from left to right
    this.obstaclesRight = [
      "./images/carsRight/bluecar.png",
      "./images/carsRight/browncar.png",
      "./images/carsRight/firetruck.png",
      "./images/carsRight/greencar.png",
      "./images/carsRight/orangecar.png",
      "./images/carsRight/police.gif",
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
    return this.x + this.image.width;
  }
}

// Character class
class Char {
  constructor(x, y, height, width, ctx) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.ctx = ctx;
    this.image = image;
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, 50, 50);
  }
  moveUp() {
    this.y -= 6;
  }
  moveDown() {
    this.y += 6;
  }
  moveLeft() {
    this.x -= 6;
  }
  moveRight() {
    this.x += 6;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.image.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.image.height;
  }
}