//
//
//
// contorol player one racket
let racket1 = document.getElementById("racket1");
let actualTopPx = 20;
console.log(actualTopPx);
function moveRacket1(event) {
  if (event.keyCode === 38 && actualTopPx > 2) {
    actualTopPx -= 2;
    // console.log("111" + actualTopPx);
  }
  if (event.keyCode === 40 && actualTopPx < 42) {
    actualTopPx += 2;
    // console.log(actualTopPx);
  }
  racket1.style.top = actualTopPx + "vh";
}
//
//
//
//
// control player two racket
let racket2 = document.getElementById("racket2");
let actualTopPx1 = 20;
console.log(actualTopPx1);

function moveRacket2(event) {
  if (event.keyCode === 87 && actualTopPx1 > 2) {
    actualTopPx1 -= 2;
    // console.log(actualTopPx1);
  }
  if (event.keyCode === 83 && actualTopPx1 < 42) {
    actualTopPx1 += 2;
    // console.log(actualTopPx1);
  }
  racket2.style.top = actualTopPx1 + "vh";
}
window.addEventListener("keydown", moveRacket1);
window.addEventListener("keydown", moveRacket2);
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

  // if player one score 10 goals message player one win
  if (parseInt(score1.innerHTML) == 10) {
    return console.log("player one win!");
    // if player two score 10 goals message player two win
  } else if (parseInt(score2.innerHTML) == 10) {
    return console.log("player two win!");
  }
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
    horizontalDistance = Math.floor(Math.random() * 4) + 2;
    verticalDistance = Math.floor(Math.random() * 4) + 2;
  }
  // let the ball move every where
  if (
    ballLocation.right >= racket2Location.left &&
    ballLocation.top >= racket2Location.top &&
    ballLocation.bottom <= racket2Location.bottom
  ) {
    // determinesDirectionHorizontally = 0;
    horizontalDistance = Math.floor(Math.random() * 4) + 2;
    verticalDistance = Math.floor(Math.random() * 4) + 2;
  }
  // if the ball hit the left racket by ball left side
  if (ballLocation.left <= racket2Location.right) {
    if (
      racket2Location.top <= ballLocation.top &&
      ballLocation.bottom <= racket2Location.bottom
    ) {
      determinesDirectionHorizontally = 1;
      horizontalDistance = Math.floor(Math.random() * 4) + 2;
      verticalDistance = Math.floor(Math.random() * 4) + 2;
    }
  }

  // the ball hit the left racket
  if (ballLocation.right >= racket1Location.left) {
    if (
      racket1Location.top <= ballLocation.top &&
      ballLocation.bottom <= racket1Location.bottom
    ) {
      determinesDirectionHorizontally = 0;
      horizontalDistance = Math.floor(Math.random() * 4) + 2;
      verticalDistance = Math.floor(Math.random() * 4) + 2;
      // determinesDirectionVertically = 1;
      console.log("hit it the racket1..");
    }
  }
  // if ball location less than the court left horizontaliy player one score goal and return the ball to center
  if (ballLocation.left <= courtCoord.left) {
    console.log("player one score..");
    score1.innerText = parseInt(score1.innerText) + 1;
    ball.style.left = 49.5 + "vw";
    ball.style.top = 27 + "vh";
    return;
  }
  // if ball location less than the court right horizontaliy player Two score goal and return the ball to center
  if (ballLocation.right >= courtCoord.right) {
    console.log("player two score..");
    score2.innerText = parseInt(score2.innerText) + 1;
    ball.style.left = 49.5 + "vw";
    ball.style.top = 27 + "vh";
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
function start(event) {
  if (event.keyCode === 32) {
    moveBall();
  }
}
window.addEventListener("keydown", start);
