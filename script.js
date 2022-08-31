/************************************************************************************************
Fase 1:
Make a variable to give the computer player a choice
Make a if statement to determine who wins. 
This should have:
    *Tie, try again:
    *Comp rock, player paper
    *Comp rock, player scissors
    *Comp scissors, player paper
    *Comp scissors, player rock
    *Comp paper, player rock
    *Comp paper, player scissors

Fase 2:
*Allow player to choose a hand.
*Make sure player input is valided.
Make a scoring system where we keep schore of round winners and the player that
gets to 5 wins winst the game.


*************************************************************************************************/
// Functions
// Create a random choice for the computer player
function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 3);
  if (computerChoice == 1) {
    computerChoice = "paper";
    return computerChoice;
  } else if (computerChoice == 2) {
    computerChoice = "rock";
    return computerChoice;
  } else {
    computerChoice = "scissors";
    return computerChoice;
  }
}

//Allow player to choose a hand and validates the input
function getPlayerChoice() {
  let askHand = prompt("What hand do you want to play? Rock, Paper or scissors?");
  playerSelection = askHand.toLowerCase();
  return playerSelection;   
}

//Create a function that playes a round
function playRound(playerSelection, computerChoice) {
    let result = "";
        if (computerChoice == "scissors" && playerSelection == "paper") 
        {
            result = 0;
        } 
        else if (computerChoice == "scissors" && playerSelection == "rock") 
        {
            result = 1;
        } 
        else if (computerChoice == "paper" && playerSelection == "rock") 
        {
            result = 0;    
        } 
        else if (computerChoice == "paper" && playerSelection == "scissors") 
        {
            result = 1;
        } 
        else if (computerChoice == "rock" && playerSelection == "paper")
        {
            result = 1;
        } 
        else if (computerChoice == "rock" && playerSelection == "scissors") 
        {
            result = 0;
        } 
        else 
        { 
            result = 2;
        }
        return result;
    }

function game() {
    let computerChoice = "";
    let playerSelection = "";
    let playerScore = 0;
    let computerScore = 0;
    let playedRound = "";

    for (var i = 0; i < 5; i++){
        playerSelection = getPlayerChoice();
        computerChoice = getComputerChoice();
        playedRound = playRound(playerSelection, computerChoice);
        if (playedRound == 2) {
            console.log("Draw!")
        } else if (playedRound == 1) {
            playerScore ++;
        } else {
            computerScore++;
        }
        console.log(playedRound);
        console.log(computerChoice, playerSelection);
        console.log("Computer score: " + computerScore + " - Player Score: " + playerScore + "!");
    }
};

game();
