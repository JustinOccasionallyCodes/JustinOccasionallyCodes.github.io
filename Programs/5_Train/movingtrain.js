var trainPosition = 0;
var animation;
var trainSpeed = 250;
var isRunning = false;
var speedUpCounter = 1;

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startTrain);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetTrain);

var speedUpButton = document.getElementById("speedUpButton");
speedUpButton.addEventListener("click", speedUpTrain);

var speedUpCounterElement = document.getElementById("speedUpCounter");
speedUpCounterElement.textContent = "x" + speedUpCounter;

function startTrain() {
  if (!isRunning) {
    animation = setInterval(frame, trainSpeed);
    isRunning = true;
  }
}

function frame() {
  trainPosition += 2;
  train.style.left = trainPosition + 'px';
  console.log(trainPosition);
  checkPosition(trainPosition);
}

function checkPosition(currentPosition) {
  if (currentPosition > 900) {
    alert("Crash!");
    console.log("Crash!");
    clearInterval(animation);
    isRunning = false;
  }
}

function stopTrain() {
  if (isRunning) {
    clearInterval(animation);
    console.log("Whew! That was close!");
    isRunning = false;
  }
}

function resetTrain() {
  clearInterval(animation);
  trainPosition = 0;
  train.style.left = trainPosition + 'px';
  trainSpeed = 250;
  speedUpCounter = 1;
  speedUpCounterElement.textContent = "x" + speedUpCounter;
  isRunning = false;
}

function speedUpTrain() {
  trainSpeed -= 10;
  console.log("Train speed: " + trainSpeed);
  speedUpCounter++;
  speedUpCounterElement.textContent = "x" + speedUpCounter;

  if (isRunning) {
    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);
  }
}

