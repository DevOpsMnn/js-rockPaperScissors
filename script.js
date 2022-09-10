let playerScore =  0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function playRound(e){
  let computerChoice = Math.round(Math.random() * 3);
  let playedRound
  if (computerChoice == 1) {
      computerChoice = "paper";
  } else if (computerChoice == 2) {
      computerChoice = "rock";
  } else {
      computerChoice = "scissors";
  }
  if (computerChoice == "scissors" && e == "paper") {
    playedRound = 0;
    } else if (computerChoice == "scissors" && e == "rock") {
      playedRound = 1;
    } else if (computerChoice == "paper" && e == "rock") {
      playedRound = 0;
    } else if (computerChoice == "paper" && e == "scissors") {
      playedRound = 1;
    } else if (computerChoice == "rock" && e == "paper") {
      playedRound = 1;
    } else if (computerChoice == "rock" && e == "scissors") {
      playedRound = 0;
    } else {
      playedRound = 2;
    }
  console.log("Computer chooses " + computerChoice + " and player chooses " + e + ".");
  if (playedRound == 2) {
      document.getElementById("results").innerHTML =
      "You played " + e + " and the computer went for " + computerChoice + " It's a draw!";
  } else if (playedRound == 1) {
      document.getElementById("results").innerHTML =
      "You played " + e + " and the computer went for " + computerChoice + "! You Win!";
      playerScore ++;
  } else {
      document.getElementById("results").textContent =
      "You played " + e + " and the computer went for " + computerChoice + "! Computer Wins!";
      computerScore ++;
  }
  document.getElementById("playerScore").textContent = "Player Score: " + playerScore;
  document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;  
  game()
}

function game(e){
  if (playerScore == 3 || computerScore == 3 ){  
    if (playerScore > computerScore){
      document.getElementById("matchWinner").textContent = "You win! Press F5 to play again!";
    } else if (computerScore > playerScore) {
      console.log("Computer Wins!", playerScore, computerScore);
      document.getElementById("matchWinner").textContent = "You lose! Press F5 to play again!";
      playRound(e);
    }
  }
  
}
