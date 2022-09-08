const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id);
  });
});

// Create a random choice for the computer player
function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 3);
  if (computerChoice == 1) {
    computerChoice = "paper";
  } else if (computerChoice == 2) {
    computerChoice = "rock";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

//Create a function that playes a round
function playRound(playerSelection, computerChoice) {
  let result = "";
  if (computerChoice == "scissors" && playerSelection == "paper") {
    result = 0;
  } else if (computerChoice == "scissors" && playerSelection == "rock") {
    result = 1;
  } else if (computerChoice == "paper" && playerSelection == "rock") {
    result = 0;
  } else if (computerChoice == "paper" && playerSelection == "scissors") {
    result = 1;
  } else if (computerChoice == "rock" && playerSelection == "paper") {
    result = 1;
  } else if (computerChoice == "rock" && playerSelection == "scissors") {
    result = 0;
  } else {
    result = 2;
  }
  return result;
}

function game(e) {
  let computerChoice = getComputerChoice();
  let playedRound = playRound(e, computerChoice);
  console.log("Computer chooses " + computerChoice + " and player chooses " + e + ".");
  if (playedRound == 2) {
    console.log("Draw!");
  } else if (playedRound == 1) {
    console.log("Player Wins!")
  } else {
    console.log("Computer Wins!")
  }
}
