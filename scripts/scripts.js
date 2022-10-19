const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const audio = document.querySelector("audio");

audio.play();
let audioIsPlaying = true;

// Music on/off
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
let gameIsOver = false;

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

// Create all cars
const insertCars = () => {
  const car1 = new Car(0, 705, 100, 40);
  const car2 = new Car(-100, 578, 100, 40);
  const car3 = new Car(-210, 545, 100, 40);
  const car4 = new Car(-320, 510, 100, 40);
  const car5 = new Car(-680, 470, 100, 40);
  const car6 = new Car(-10, 355, 100, 40);
  const car7 = new Car(-250, 287, 100, 40);
  const car8 = new Car(-550, 250, 100, 40);
  const car9 = new Car(-950, 320, 100, 40);
  const car10 = new Car(800, 140, 100, 40);
  const car11 = new Car(1000, 180, 100, 40);
  const car12 = new Car(1500, 140, 100, 40);
  const car13 = new Car(2000, 216, 100, 40);
  const car14 = new Car(3000, 216, 100, 40);
  const car15 = new Car(4000, 102, 100, 40);

  if (gameArea.frames % 140 === 0) {
    carsRight.push(car1, car2, car3, car4, car5, car6, car7, car8, car9);
    carsLeft.push(car10, car11, car12, car13, car14, car15);
  }
};
let image = new Image();
window.onload = () => {
  image.src = "images/char.jpg";
  document.getElementById("startGame").onclick = () => {
    document.getElementById("menu").style.display = "none";
    gameArea.start();
  };
};

// Create the character
const zePovinho = new Char(230, 755, image);

// Add movement to character
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
});
