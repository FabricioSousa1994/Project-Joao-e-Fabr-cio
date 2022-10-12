const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let interval;

const gameArea = {
    start: () => {
        interval = setInterval(updateGameArea, 20);
    },
    stop: () => {
        clearInterval(interval)
    },
    clear: () => {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    }
}

class Char {
    constructor(x,y,height, width, ctx) {
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
    this.y -= 15
}

moveDown() {
    this.y += 15
}

moveLeft() {
    this.x -= 15
}

moveRight() {
    this.x += 15
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
      console.log( "im clicicking", event.key)
      switch (event.key) {
        case "ArrowLeft":
              zePovinho.moveLeft();
            break;
        case "ArrowRight":
              zePovinho.moveRight();
            break;
        case "ArrowDown":
            zePovinho.moveDown();
            break;
        case "ArrowUp":
            zePovinho.moveUp()
      }
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      zePovinho.draw();
    
  })


let image = new Image()
window.onload = () => {
  image.src = "/char.png";
  document.getElementById('startGame').onclick = () => {
    startGame();
  };
}


const zePovinho = new Char(230,750, image, context)
function startGame() {
  zePovinho.draw()
  gameArea.start();
}


function updateGameArea() {
    gameArea.clear();
    zePovinho.draw();
}