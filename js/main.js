var moveInterval = 0;
var started = false;
this.onload = () => {
  let snake = new Snake();
  snake.init();

  document.onkeydown = (e) => {
    snake.move(1, e.key);
    started = true;
  };
};
