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
    this.obstacles = [
      "./images/cars/bluecar.png",
      "./images/cars/browncar.png",
      "./images/cars/firetruck.png",
      "./images/cars/greencar.png",
      "./images/cars/orangecar.png",
      "./images/cars/police.png",
      "./images/cars/redcar.png",
      "./images/cars/taxi.png",
      "./images/cars/truck.png",
      "./images/cars/whatcolorcar.png",
    ];
    this.random = parseInt(Math.random() * (0 + this.obstacles.length));
  }
  draw() {
    this.image.src = this.obstacles[this.random]; //seleciona aleatoriamente o valor do array//
    context.drawImage(this.image, this.x, this.y, this.width, this.height); 
  }
  newPosition() {
    this.x += this.speedX;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.image.width;
  }
}

let cars = [];

//let randomCarArray = parseInt(Math.random() * (0 + cars.length));

const insertCars = () => {
  const car1 = new Car(-110, 705, 100, 50);
  const car2 = new Car(-110, 505, 100, 50);
  const car3 = new Car(-110, 305, 100, 50);
  const car4 = new Car(-110, 105, 100, 50);
  const car5 = new Car(-110, 705, 100, 50);
  const car6 = new Car(-110, 705, 100, 50);
  const car7 = new Car(-110, 705, 100, 50);
  const car8 = new Car(-110, 705, 100, 50);
  const car9 = new Car(-110, 705, 100, 50);
  const car10 = new Car(-110, 705, 100, 50);
  const car11 = new Car(-110, 705, 100, 50);

  if (gameArea.frames % 240 === 0) {
    /*  cars = [] */
    cars.push(car1, car2);
  } else if (gameArea.frames % 120 === 0) {
    cars.push(car3, car4);
  }
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
    this.y -= 5;
  }
  moveDown() {
    this.y += 5;
  }
  moveLeft() {
    this.x -= 5;
  }
  moveRight() {
    this.x += 5;
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
  cars.forEach((car) => {
    car.draw();
    car.newPosition();
  });
  /* car1.newPosition();
  car1.draw(); */
  zePovinho.draw();
}

