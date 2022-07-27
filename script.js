function computerPlay() {
  const rand = Math.floor(Math.random() * 3);
  if (rand === 0) return "Rock";
  if (rand === 1) return "Paper";
  return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  computerSelection =
    computerSelection.charAt(0).toUpperCase() +
    computerSelection.slice(1).toLowerCase();

  if (!["Rock", "Paper", "Scissors"].includes(playerSelection)) {
    return "invalid input";
  }
  if (computerSelection == playerSelection) return "Draw!";

  const bool = playerSelection.length > computerSelection.length;
  const list = [playerSelection, computerSelection];
  // if (list.includes("Rock") && list.includes("Scissors")) return !bool;
  // return bool;

  if (list.includes("Rock") && list.includes("Scissors")) {
    return `<p>You ${!bool ? "Win" : "Lose"}!</p><p>${
      !bool ? playerSelection : computerSelection
    } beats ${bool ? playerSelection : computerSelection}</p>`;
  }
  return `<p>You ${bool ? "Win" : "Lose"}!</p><p>${
    bool ? playerSelection : computerSelection
  } beats ${!bool ? playerSelection : computerSelection}</p>`;
}

function updateScore(char) {
  const score = document.getElementById("score");
  if (score.textContent.length > 3) score.innerText = "0-0";
  if (char === "!") return;
  else if (char === "W")
    score.innerText = `${
      1 + parseInt(score.textContent.charAt(0))
    }-${score.textContent.charAt(2)}`;
  else if (char === "L")
    score.innerText = `${score.textContent.charAt(0)}-${
      1 + parseInt(score.textContent.charAt(2))
    }`;
  playerScore = score.textContent.charAt(0);
  computerScore = score.textContent.charAt(2);
  if (playerScore === "5" || computerScore === "5")
    score.innerHTML = `${
      playerScore > computerScore ? "You won the Game" : "You lost the Game"
    }`;
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const ScissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");

rockButton.addEventListener("click", function (e) {
  result.innerHTML = playRound("Rock", computerPlay());
  updateScore(result.textContent.charAt(4));
});

paperButton.addEventListener("click", function (e) {
  result.innerHTML = playRound("Paper", computerPlay());
  updateScore(result.textContent.charAt(4));
});

ScissorsButton.addEventListener("click", function (e) {
  result.innerHTML = playRound("Scissors", computerPlay());
  updateScore(result.textContent.charAt(4));
});
