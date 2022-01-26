class Square {
  constructor(x, y) {
    this.moveInterval = 0;
    this.y = y;
    this.x = x;
    this.layer = document.createElement("div");
    this.layer.style.cssText =
      "position:absolute;z-index:1;background-color: green;height:20px;width:20px;border-radius: 10px;" +
      "top: " +
      this.y +
      "px;" +
      "left:" +
      this.x +
      "px;";
    document.body.appendChild(this.layer);
  }
  setMoveInterval(moveInterval) {
    this.moveInterval = moveInterval;
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
class Snake {
  constructor() {
    this.body = [];
  }

  init() {
    let square1 = new Square(
      (window.innerWidth / 2).toFixed(),
      (window.innerHeight / 2).toFixed(),
    );
    this.body.push(square1);

    let square2 = new Square(
      this.body[0].x,
      parseInt(this.body[0].y) + parseInt(21),
    );
    this.body.push(square2);
    let square3 = new Square(
      this.body[1].x,
      parseInt(this.body[1].y) + parseInt(21),
    );
    this.body.push(square3);
  }

  move(v, dir) {
    let turnPoint = [this.body[0].x, this.body[0].y];
    switch (dir) {
      case "ArrowUp":
        this.body.forEach((square) => {
          if (
            (square.x == turnPoint[0] && square.y == turnPoint[1]) ||
            !started
          ) {
            clearInterval(square.moveInterval);
            square.setMoveInterval(
              setInterval(() => {
                square.y = parseInt(square.y) - parseInt(v);
                square.layer.style.top = square.y + "px";
              }, 5),
            );
          }
        });
        break;
      case "ArrowLeft":
        this.body.forEach((square) => {
          if (
            (square.x == turnPoint[0] && square.y == turnPoint[1]) ||
            !started
          ) {
            clearInterval(square.moveInterval);
            square.setMoveInterval(
              setInterval(() => {
                square.x = parseInt(square.x) - parseInt(v);
                square.layer.style.left = square.x + "px";
              }, 5),
            );
          }
        });
        break;
      case "ArrowDown":
        this.body.forEach((square) => {
          if (
            (square.x == turnPoint[0] && square.y == turnPoint[1]) ||
            !started
          ) {
            clearInterval(square.moveInterval);
            square.setMoveInterval(
              setInterval(() => {
                square.y = parseInt(square.y) + parseInt(v);
                square.layer.style.top = square.y + "px";
              }, 5),
            );
          }
        });
        break;
      case "ArrowRight":
        this.body.forEach((square) => {
          if (
            (square.x == turnPoint[0] && square.y == turnPoint[1]) ||
            !started
          ) {
            clearInterval(square.moveInterval);
            square.setMoveInterval(
              setInterval(() => {
                square.x = parseInt(square.x) + parseInt(v);
                square.layer.style.left = square.x + "px";
              }, 5),
            );
          }
        });
        break;
    }
  }
}
