const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const audio = document.querySelector("audio");

audio.play();
let audioIsPlaying = true;

let gameIsOver = false;

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
  const car1 = new Car(0, 705, 100, 50);
  const car2 = new Car(-300, 578, 100, 50);
  const car3 = new Car(-510, 545, 100, 50);
  const car4 = new Car(-720, 510, 100, 50);
  const car5 = new Car(-880, 470, 100, 50);
  const car6 = new Car(-10, 355, 100, 50);
  const car7 = new Car(-50, 290, 100, 50);
  const car8 = new Car(-150, 250, 100, 50);
  const car9 = new Car(-250, 320, 100, 50);
  const car10 = new Car(720, 140, 100, 50);
  const car11 = new Car(820, 180, 100, 50);
  const car12 = new Car(900, 140, 100, 50);
  const car13 = new Car(1000, 216, 100, 50);
  const car14 = new Car(1200, 216, 100, 50);
  const car15 = new Car(1600, 102, 100, 50);

  allCars.push(
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car10,
    car11,
    car12,
    car13,
    car14,
    car15
  );

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
    /* startGame(); */
    gameArea.start();
  };
};

// Create the character
const zePovinho = new Char(230, 755, image, context);

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
