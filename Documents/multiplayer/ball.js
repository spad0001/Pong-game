import {paddle1, paddle2} from "./paddle.js";
const canvas = document.getElementById("paddle");
const ctx = canvas.getContext("2d");

export default class  {
  constructor({position}) {
    this.position = position;

    const direction = {
      x: Math.random() - 0.5 >= 0 ? 1 : -1,
      y: Math.random() - 0.5 >= 0 ? 1 : -1,
    }
    this.velocity = {
      x: direction.x * 7,
      y: direction.y * 7,
    }
    this.width = 15;
    this.height = 15;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, 15, 15);
  }

  update() {
    this.draw()
    const rightSide = this.position.x + this.width + this.velocity.x;
    const leftSide = this.position.x + this.velocity.x;
    const bottomSide = this.position.y + this.height;
    const topSide = this.position.y;
    // paddle 1 collision
    if (
      leftSide <= paddle1.position.x + paddle1.width &&
      bottomSide >= paddle1.position.y &&
      topSide <= paddle1.position.y + paddle1.height
    ) {
      this.velocity.x = -this.velocity.x;
    }
    // paddle 2 collision
    if (
      rightSide >= paddle2.position.x &&
      bottomSide >= paddle2.position.y &&
      topSide <= paddle2.position.y + paddle2.height
    ) {
      this.velocity.x = -this.velocity.x
    }
    if (
      this.position.y + this.height + this.velocity.y >=
      canvas.height ||
      this.position.y +this.velocity.y <= 0) {
      this.velocity.y = -this.velocity.y;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
