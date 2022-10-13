const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const audio = document.querySelector("audio");
audio.play();

let audioIsPlaying = true;

const obstacles= [];




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
    this.y -= 15;
  }

  moveDown() {
    this.y += 15;
  }

  moveLeft() {
    this.x -= 15;
  }

  moveRight() {
    this.x += 15;
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
  };
};

class Car {
  constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = new Image();
  }

  draw() {
    this.image.src = './images/cars/blackcarPNG.png'

      context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

    left() {
      return this.x;
    }
  
    right() {
      return this.x + this.image.width;
    }
}


const zePovinho = new Char(230, 690, image, context);
let car = new Car(100, 100, 100, 100)

function startGame() {
  zePovinho.draw();
}
gameArea.start();

function updateGameArea() {
  gameArea.clear();
  zePovinho.draw();
  car.draw()

}




