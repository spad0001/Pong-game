import Ball from "./ball.js";
const canvas = document.getElementById("paddle");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

  export default class Paddle {
    constructor({position}) {
      this.position = position;
      this.velocity = {
       x: 0,
        y: 0,
      }
      this.width = 10;
      this.height = 100;
  }
    draw() {
      ctx.fillStyle = "white";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      ctx.fillText("Score", canvas.width, 50);
    }

    update() {
      this.draw();
      if (
        this.position.y + this.velocity.y > 0 &&
        this.position.y + this.velocity.y + this.height < canvas.height
      )
      this.position.y += this.velocity.y;
    }
}

export const paddle1 = new Paddle({position: {
    x: 10,
    y: 100,
  },
});

export const paddle2 = new Paddle({position: {
    x: canvas.width - 10 * 2,
    y: 100,
  },
});

paddle1.draw();
paddle2.draw();
  const ball = new Ball({position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
});

function animate() {
  requestAnimationFrame(animate)
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  paddle1.update();
  paddle2.update();
  ball.update();
}

animate()

addEventListener('keydown', (event) => {
  const speed = 10
  switch (event.key) {
    case 'w':
      // go up
      paddle1.velocity.y = -speed
      break
    case 's':
      // go down
      paddle1.velocity.y = speed
      break
    case 'ArrowUp':
      // go up
      paddle2.velocity.y = -speed
      break
    case 'ArrowDown':
      // go down
      paddle2.velocity.y = speed
      break
  }
})