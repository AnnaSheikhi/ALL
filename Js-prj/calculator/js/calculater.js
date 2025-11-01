const screen = document.querySelector('.screen');
let screenNumber = "";
screen.innerHTML = screenNumber;
function printOnScreen () {
  screen.innerHTML = screenNumber;
}
function setNum(x) {
   screenNumber = screenNumber + x;
  printOnScreen();
}