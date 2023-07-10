//
//
//
// contorol player one racket
let racket1 = document.getElementById("racket1");
let actualTopPx = 187.5;
console.log(actualTopPx);
function moveRacket1(event) {
  if (event.keyCode === 38 && actualTopPx > 7.5) {
    actualTopPx -= 10;
    console.log(actualTopPx);
  }
  if (event.keyCode === 40 && actualTopPx < 377.5) {
    actualTopPx += 10;
    console.log(actualTopPx);
  }
  racket1.style.top = actualTopPx + "px";
}
//
//
//
//
// control player two racket
let racket2 = document.getElementById("racket2");
let actualTopPx1 = 187.5;
console.log(actualTopPx1);

function moveRacket2(event) {
  if (event.keyCode === 87 && actualTopPx1 > 7.5) {
    actualTopPx1 -= 10;
    console.log(actualTopPx1);
  }
  if (event.keyCode === 83 && actualTopPx1 < 377.5) {
    actualTopPx1 += 10;
    console.log(actualTopPx1);
  }
  racket2.style.top = actualTopPx1 + "px";
}
window.addEventListener("keydown", moveRacket1);
window.addEventListener("keydown", moveRacket2);
console.log(window.innerHeight); // just for checking
console.log(window.innerWidth); // just for checking
//
//
//
//
//
//
//
// function to move the ball

function start(event) {
  if (event.keyCode === 32) {
    // call the function to start move the ball
  }
}
window.addEventListener("keydown", start);
