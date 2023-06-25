document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "X";
    let xScore = 0;
    let oScore = 0;
    let numMoves = 0;
    const winningScore = 2;
  
    const xScoreElement = document.getElementById("xScore");
    const oScoreElement = document.getElementById("oScore");
  
    cells.forEach((cell) => {
      cell.addEventListener("click", handleClick);
    });
  
    function handleClick() {
      if (!this.textContent) {
        this.textContent = currentPlayer;
        this.style.cursor = "default";
        this.style.backgroundColor = "#555";
        this.style.color = "#f8f8f8";
        numMoves++;
  
        if (checkWin()) {
          updateScore();
          if (xScore === winningScore || oScore === winningScore) {
            setTimeout(() => {
              alert(`Game Over! Player ${currentPlayer} wins the match!`);
              resetGame();
            }, 100);
          } else {
            setTimeout(() => {
              alert(`Player ${currentPlayer} wins this round!`);
              resetRound();
            }, 100);
          }
        } else if (checkDraw()) {
          setTimeout(() => {
            alert("It's a draw!");
            resetRound();
          }, 100);
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    }
  
    function checkWin() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];
  
      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (
          cells[a].textContent &&
          cells[a].textContent === cells[b].textContent &&
          cells[a].textContent === cells[c].textContent
        ) {
          cells[a].style.backgroundColor = "#1abc9c";
          cells[b].style.backgroundColor = "#1abc9c";
          cells[c].style.backgroundColor = "#1abc9c";
          cells.forEach((cell) => {
            cell.removeEventListener("click", handleClick);
          });
          return true;
        }
      }
  
      return false;
    }
  
    function checkDraw() {
      return numMoves === 9;
    }
  
    function updateScore() {
      if (currentPlayer === "X") {
        xScore++;
        xScoreElement.textContent = xScore;
      } else {
        oScore++;
        oScoreElement.textContent = oScore;
      }
    }
  
    function resetRound() {
      cells.forEach((cell) => {
        cell.textContent = "";
        cell.style.backgroundColor = "#333";
        cell.style.color = "#f8f8f8";
        cell.style.cursor = "pointer";
        cell.addEventListener("click", handleClick);
      });
      currentPlayer = "X";
      numMoves = 0;
    }
  
    function resetGame() {
      xScore = 0;
      oScore = 0;
      xScoreElement.textContent = xScore;
      oScoreElement.textContent = oScore;
      resetRound();
    }
  });
  