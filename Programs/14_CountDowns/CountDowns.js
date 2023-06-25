// Get the countdown element and buttons
const countdownElement = document.getElementById('countdown-value');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let countdownInterval;
let countdownValue = 1000;

// Function to start the countdown
function startCountdown() {
  // Disable the start button and enable the stop and reset buttons
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;

  countdownInterval = setInterval(() => {
    if (countdownValue === -1) {
      clearInterval(countdownInterval);
      return;
    }

    countdownElement.innerHTML = countdownValue;
    countdownValue--;
  }, 80);
}

// Function to stop the countdown
function stopCountdown() {
  // Disable the stop button and enable the start and reset buttons
  stopButton.disabled = true;
  startButton.disabled = false;
  resetButton.disabled = false;

  clearInterval(countdownInterval);
}

// Function to reset the countdown
function resetCountdown() {
  // Disable the reset button and enable the start button
  resetButton.disabled = true;
  startButton.disabled = false;

  clearInterval(countdownInterval);
  countdownValue = 1000;
  countdownElement.innerHTML = countdownValue;
}

// Attach click event listeners to the start, stop, and reset buttons
startButton.addEventListener('click', startCountdown);
stopButton.addEventListener('click', stopCountdown);
resetButton.addEventListener('click', resetCountdown);
