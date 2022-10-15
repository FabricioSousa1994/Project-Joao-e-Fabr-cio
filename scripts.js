const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const audio = document.querySelector("audio");
audio.play();
let audioIsPlaying = true;

function isAudioPlaying() {
  if (audioIsPlaying === true) {
    audio.pause();
    audioIsPlaying = false;
  } else {
    audio.play();
    audioIsPlaying = true;
  }
}
let interval;
const gameArea = {
  frames: 0,
  start: () => {
    interval = setInterval(updateGameArea, 20);
  },
  stop: () => {
    clearInterval(interval);
  },
  clear: () => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  },
};
class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.speedX = 3;
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
    this.obstaclesLeft = [
      "./images/carsLeft/bluecar.png",
      "./images/carsLeft/browncar.png",
      "./images/carsLeft/firetruck.png",
      "./images/carsLeft/greencar.png",
      "./images/carsLeft/orangecar.png",
      "./images/carsLeft/police.gif",
      "./images/carsLeft/redcar.png",
      "./images/carsLeft/taxi.png",
      "./images/carsLeft/truck.png",
      "./images/carsLeft/whatcolorcar.png",
    ];
    this.random = parseInt(Math.random() * (0 + this.obstaclesRight.length));
  }
  draw() {
    this.image.src = this.obstaclesRight[this.random]; //seleciona aleatoriamente o valor do array//
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

let carsRight = [];
let carsLeft = [];

//let randomCarArray = parseInt(Math.random() * (0 + cars.length));

const insertCars = () => {
  const car1 = new Car(-90, 705, 100, 50); //ok   -->>>>
  const car2 = new Car(-300, 578, 100, 50); //ok -->>>>
  const car3 = new Car(-510, 545, 100, 50); //ok -->>>>
  const car4 = new Car(-720, 510, 100, 50); //ok -->>>>
  const car5 = new Car(-880, 470, 100, 50); //ok -->>>>
  const car6 = new Car(-10, 355, 100, 50); //ok -->>>>
  const car7 = new Car(-50, 290, 100, 50); //ok -->>>>
  const car8 = new Car(-150, 250, 100, 50); //ok -->>>>
  const car9 = new Car(-250, 320, 100, 50); //ok -->>>>
  const car10 = new Car(720, 101, 100, 50);
  const car11 = new Car(820, 180, 100, 50);
  const car12 = new Car(900, 140, 100, 50);
  const car13 = new Car(1000, 216, 100, 50);
  const car14 = new Car(1200, 216, 100, 50);

  if (gameArea.frames % 140 === 0) {
    carsRight.push(car1, car2, car3, car4, car5, car6, car7, car8, car9);
    carsLeft.push(car10, car11, car12, car13, car14);
  } /* else if (gameArea.frames % 120 === 0) {
    cars.push(car3, car4);
  } else if (gameArea.frames % 60 === 0) {
    cars.push(car5, car6);
  }*/
};

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
  //
  /*
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
  }*/
}
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      zePovinho.moveLeft();
      break;
    case "d":
      zePovinho.moveRight();
      break;
    case "s":
      zePovinho.moveDown();
      break;
    case "w":
      zePovinho.moveUp();
      break;
  }
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  zePovinho.draw();
});
let image = new Image();
window.onload = () => {
  image.src = "images/char.png";
  document.getElementById("startGame").onclick = () => {
    startGame();
    gameArea.start();
  };
};
const zePovinho = new Char(230, 755, image, context);
function startGame() {
  zePovinho.draw();
}
/* gameArea.start(); */
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
  /* car1.newPosition();
  car1.draw(); */
  zePovinho.draw();
}
