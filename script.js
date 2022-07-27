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

  if (list.includes("Rock") && list.includes("Scissors")) return !bool;
  return bool;

  //   if (list.includes("Rock") && list.includes("Scissors")) {
  //     return `You ${!bool ? "Win" : "Lose"}! ${
  //       !bool ? playerSelection : computerSelection
  //     } beats ${bool ? playerSelection : computerSelection}`;
  //   }
  //   return `You ${bool ? "Win" : "Lose"}! ${
  //     bool ? playerSelection : computerSelection
  //   } beats ${!bool ? playerSelection : computerSelection}`;
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

rockButton.addEventListener("click", function (e) {
  alert(playRound("Rock", computerPlay()));
});

paperButton.addEventListener("click", function (e) {
  alert(playRound("Paper", computerPlay()));
});

ScissorsButton.addEventListener("click", function (e) {
  alert(playRound("Scissors", computerPlay()));
});
