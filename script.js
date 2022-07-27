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

function game() {
  playerScore = computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(prompt(), computerPlay());
    if (result === "Draw!" || result === "invalid input") {
      console.log(result);
      i--;
    } else {
      result ? playerScore++ : computerScore++;
      console.log(`${result ? "Player" : "Computer"} won the round!`);
    }
  }
  console.log(
    `${playerScore > computerScore ? "Player" : "Computer"} won the game!`
  );
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const ScissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");

rockButton.addEventListener("click", function (e) {
  result.innerHTML = playRound("Rock", computerPlay());
});

paperButton.addEventListener("click", function (e) {
  result.innerHTML = playRound("Paper", computerPlay());
});

ScissorsButton.addEventListener("click", function (e) {
  result.innerHTML = playRound("Scissors", computerPlay());
});
