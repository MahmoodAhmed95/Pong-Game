document.addEventListener("DOMContentLoaded", function () {
  const racket1 = document.getElementById("racket1");
  const racket2 = document.getElementById("racket2");
  let actualTopVh1 = 20;
  let actualTopVh2 = 20;

  // Move the rackets on arrow key (player 1) or W/S key (player 2) press
  function moveRackets() {
    // Event Listeners
    document.addEventListener("keydown", keysPressed);
    document.addEventListener("keyup", keysReleased);
    let keys = {};
    console.log(keys);
    // Functions for updating the array
    function keysPressed(e) {
      keys[e.key] = true;
    }

    function keysReleased(e) {
      keys[e.key] = false;
    }

    function handleKeys() {
      if (keys["ArrowUp"] && actualTopVh1 > 2) {
        actualTopVh1 -= 2;
        racket1.style.top = `${actualTopVh1}vh`;
      }
      if (keys["ArrowDown"] && actualTopVh1 < 42) {
        actualTopVh1 += 2;
        racket1.style.top = `${actualTopVh1}vh`;
      }
      if (keys["w"] && actualTopVh2 > 2) {
        actualTopVh2 -= 2;
        racket2.style.top = `${actualTopVh2}vh`;
      }
      if (keys["s"] && actualTopVh2 < 42) {
        actualTopVh2 += 2;
        racket2.style.top = `${actualTopVh2}vh`;
      }
    }
    setInterval(handleKeys, 50);
  }
  window.onload = moveRackets;
  //
  //
  //
  //
  //
  //
  //
  let ball = document.getElementById("ball");
  let court = document.getElementById("tCourt");
  let score1 = document.getElementById("pScoreOne");
  let score2 = document.getElementById("pScoreTwo");
  // drag drop color value
  let col = document.getElementById("color");
  let colors = col.value;
  //change the tennis court background color
  col.addEventListener("change", function () {
    colors = col.value;
    court.style.backgroundColor = colors;
  });
  //change the tennis court background color
  court.style.backgroundColor = colors;
  // drag drop speed value
  let score = document.getElementById("score");
  let scoreLevel = score.value;
  score.addEventListener("change", function () {
    scoreLevel = score.value;
  });
  // drag drop speed value
  let sp = document.getElementById("speed");
  let speed = sp.value;
  sp.addEventListener("change", function () {
    speed = sp.value;
  });
  // function to move the ball
  function moveBall(
    horizontalDistance,
    verticalDistance,
    determinesDirectionHorizontally,
    determinesDirectionVertically
  ) {
    let ballLocation = ball.getBoundingClientRect();
    let racket1Location = racket1.getBoundingClientRect();
    let racket2Location = racket2.getBoundingClientRect();
    let courtCoord = court.getBoundingClientRect();
    // if the ball location less than or equal the court top go up by increase the vertical px
    if (ballLocation.top <= courtCoord.top) {
      determinesDirectionVertically = 1;
    }
    // if the ball location more than or equal the court bottom keep going
    if (ballLocation.bottom >= courtCoord.bottom) {
      determinesDirectionVertically = 0;
    }
    // let the ball move every where
    if (
      ballLocation.left <= racket1Location.right &&
      ballLocation.top >= racket1Location.top &&
      ballLocation.bottom <= racket1Location.bottom
    ) {
      // determinesDirectionHorizontally = 1;
      horizontalDistance = parseInt(speed); //Math.floor(Math.random() * 4) + 2;
      verticalDistance = parseInt(speed); //Math.floor(Math.random() * 4) + 2;
    }
    // let the ball move every where
    if (
      ballLocation.right >= racket2Location.left &&
      ballLocation.top >= racket2Location.top &&
      ballLocation.bottom <= racket2Location.bottom
    ) {
      horizontalDistance = parseInt(speed); //Math.floor(Math.random() * 4) + 2;
      verticalDistance = parseInt(speed); //Math.floor(Math.random() * 4) + 2;
    }
    // if the ball hit the left racket by ball left side
    if (ballLocation.left <= racket2Location.right) {
      if (
        racket2Location.top <= ballLocation.top &&
        ballLocation.bottom <= racket2Location.bottom
      ) {
        determinesDirectionHorizontally = 1;
        horizontalDistance = parseInt(speed); //Math.floor(Math.random() * 4) + 2;
        verticalDistance = parseInt(speed); // Math.floor(Math.random() * 4) + 2;
      }
    }

    // the ball hit the left racket
    if (ballLocation.right >= racket1Location.left) {
      if (
        racket1Location.top <= ballLocation.top &&
        ballLocation.bottom <= racket1Location.bottom
      ) {
        determinesDirectionHorizontally = 0;
        horizontalDistance = parseInt(speed); //Math.floor(Math.random() * 4) + 2;
        verticalDistance = parseInt(speed); //Math.floor(Math.random() * 4) + 2;
      }
    }
    // if ball location less than the court left horizontaliy player one score goal and return the ball to center
    if (ballLocation.left <= courtCoord.left) {
      console.log("player one score..");
      score1.innerText = parseInt(score1.innerText) + 1;
      ball.style.left = 49.5 + "vw";
      ball.style.top = 27 + "vh";
      //return racket1 to its default location
      racket1.style.top = 20 + "vh";
      actualTopVh1 = 20;
      //return racket2 to its default location
      racket2.style.top = 20 + "vh";
      actualTopVh2 = 20;
      moveBall();
      if (parseInt(score1.innerText) == parseInt(scoreLevel)) {
        alert(`Player One win!! ${score1.innerText} - ${score2.innerText}`);
        location.reload();
      }
      oneClick = false;
      return;
    }
    // if ball location less than the court right horizontaliy player Two score goal and return the ball to center
    if (ballLocation.right >= courtCoord.right) {
      console.log("player two score..");
      score2.innerText = parseInt(score2.innerText) + 1;
      ball.style.left = 49.5 + "vw";
      ball.style.top = 27 + "vh";
      //return racket1 to its default location
      racket1.style.top = 20 + "vh";
      actualTopVh1 = 20;
      //return racket2 to its default location
      racket2.style.top = 20 + "vh";
      actualTopVh2 = 20;
      moveBall();
      if (parseInt(score2.innerText) == parseInt(scoreLevel)) {
        alert(`Player Two win!!  ${score2.innerText} - ${score1.innerText}`);
        location.reload();
      }
      oneClick = false;
      return;
    }
    ball.style.top =
      ballLocation.top +
      verticalDistance * (determinesDirectionVertically == 0 ? -1 : 1) +
      "px";
    ball.style.left =
      ballLocation.left +
      horizontalDistance * (determinesDirectionHorizontally == 0 ? -1 : 1) +
      "px";

    requestAnimationFrame(() => {
      moveBall(
        horizontalDistance,
        verticalDistance,
        determinesDirectionHorizontally,
        determinesDirectionVertically
      );
    });
  }
  let StartButton = document.getElementById("st");
  let oneClick = false;
  function start() {
    if (oneClick == false) {
      oneClick = true;
      //return racket1 to its default location
      racket1.style.top = 20 + "vh";
      actualTopVh1 = 20;
      //return racket2 to its default location
      racket2.style.top = 20 + "vh";
      actualTopVh2 = 20;
      moveBall();
    }
  }
  StartButton.addEventListener("click", start);
  let reatartButton = document.getElementById("rs");
  reatartButton.addEventListener("click", function () {
    location.reload();
  });
});
