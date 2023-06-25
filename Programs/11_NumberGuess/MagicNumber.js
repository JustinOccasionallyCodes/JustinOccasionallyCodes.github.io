var startButton = document.getElementById("startbutton");
startButton.onclick = myGuess;

var revealButton = document.getElementById("Reveal");
revealButton.onclick = revealAnswer;

var previousSecrets = [];
var storedSecret = null;

function myGuess() {
  var secret = Math.floor(Math.random() * 10) + 1;

  var answer = prompt("Please guess a number (1-10).");

  if (answer === null) {
    alert("Guess canceled. Please play again!");
    return;
  }

  answer = Number(answer);

  if (isNaN(answer) || answer < 1 || answer > 10) {
    alert("Invalid input. Please enter a number between 1 and 10.");
    return;
  }

  checkAnswer(answer, secret);
  previousSecrets.push(secret);
}

function checkAnswer(guess, secret) {
  if (guess === secret) {
    alert("Correct! Your guess of '" + guess + "' is right.");
  } else if (guess < secret) {
    var revealButton = document.createElement('button');
    revealButton.textContent = "Reveal Answer";
    revealButton.onclick = function() {
      storedSecret = secret;
      alert("The magic number is: " + secret);
      previousSecrets.push(secret);
      updatePreviousAnswerLabel();
    };

    var message = "Incorrect! Your guess is too low. \n\n";
    alert(message);
  } else if (guess > secret) {
    alert("Incorrect! Your guess is too high.");
  }
}

function revealAnswer() {
  var secret = Math.floor(Math.random() * 10) + 1;
  storedSecret = secret;
  alert("The magic number is: " + secret);
  previousSecrets.push(secret);
  updatePreviousAnswerLabel();
}

function updatePreviousAnswerLabel() {
  var previousAnswerLabel = document.getElementById("PreviosAnswer");
  previousAnswerLabel.textContent = "Previous magic numbers: " + (previousSecrets.length > 0 ? previousSecrets.join(", ") : "None");
}

window.onload = function() {
  updatePreviousAnswerLabel();
};
