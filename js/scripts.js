const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Music on/off
const music = new Audio("sound/music.mp3");
const winMusic = new Audio ("sound/money.mp3")

let audioIsPlaying = true;
document.getElementById("onOff").onclick = () => {
  if (audioIsPlaying === true) {
    music.pause();
    audioIsPlaying = false;
  } else {
    music.play();
    audioIsPlaying = true;
  }
};

// Hide instructions
document.getElementById("instructions").onclick = () => {
  document.getElementById("instructions").style.display = "none";
};

// Create all cars
const insertCars = () => {
  const car1 = new Car(-110, 705, 100, 40);
  const car2 = new Car(-90, 578, 100, 40);
  const car3 = new Car(-180, 545, 100, 40);
  const car4 = new Car(-450, 510, 100, 40);
  const car5 = new Car(-780, 470, 100, 40);
  const car6 = new Car(-10, 355, 100, 40);
  const car7 = new Car(-250, 287, 100, 40);
  const car8 = new Car(-1200, 250, 100, 40);
  const car9 = new Car(-950, 320, 100, 40);
  const car10 = new Car(800, 140, 100, 40);
  const car11 = new Car(1150, 180, 100, 40);
  const car12 = new Car(2500, 8000, 100, 40);
  const car13 = new Car(950, 216, 100, 40);
  const car14 = new Car(1100, 80000, 100, 40);
  const car15 = new Car(900, 102, 100, 40);

  if (gameArea.frames % 140 === 0) {
    carsRight.push(car1, car2, car3, car4, car5, car6, car7, car8, car9);
    carsLeft.push(car10, car11, car12, car13, car14, car15);
  }
};
let image = new Image();
window.onload = () => {
  image.src = "images/char.png";
  document.getElementById("startGame").onclick = () => {
    document.getElementById("menu").style.display = "none";
    counting();
    gameArea.gameIsOver = false;
    gameArea.start();
    zePovinho.y = 755;
    zePovinho.x = 230;
    zePovinho.draw();
  };
};

// Create Costa
const imageCosta = new Image();
imageCosta.src = "images/antonio-costa.png";

const costa = new Costa(400, 35, imageCosta);

// Create the character
const zePovinho = new Char(230, 755, image);

// Add movement to character
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      if (zePovinho.x <= 10) {
        zePovinho.speedX = 0;
      } else {
        zePovinho.moveLeft();
      }
      break;
    case "d":
      if (zePovinho.x >= 565) {
        zePovinho.speedX = 0;
      } else {
        zePovinho.moveRight();
      }
      break;
    case "s":
      if (zePovinho.y >= 750) {
        zePovinho.speedX = 0;
      } else {
        zePovinho.moveDown();
      }
      break;
    case "w":
      if (gameArea.frames < 150) {
        zePovinho.speedY = 0;
      } else {
        zePovinho.moveUp();
      }
      break;
    case "A":
      if (zePovinho.x <= 10) {
        zePovinho.speedX = 0;
      } else {
        zePovinho.moveLeft();
      }
      break;
    case "D":
      if (zePovinho.x >= 565) {
        zePovinho.speedX = 0;
      } else {
        zePovinho.moveRight();
      }
      break;
    case "S":
      if (zePovinho.y >= 750) {
        zePovinho.speedX = 0;
      } else {
        zePovinho.moveDown();
      }
      break;
    case "W":
      if (gameArea.frames <= 150) {
        zePovinho.speedY = 0;
      } else {
        zePovinho.moveUp();
      }
      break;
  }
});
