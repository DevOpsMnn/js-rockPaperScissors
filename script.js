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
// Variables
let playerSelection = getPlayerChoice();
const computerChoice = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

// Functions
// Create a random choice for the computer player
function getComputerChoice() {
  const computerChoice = Math.round(Math.random() * 2 + 1);
  if (computerChoice == 1) {
    return "paper";
  } else if (computerChoice == 2) {
    return "rock";
  } else {
    return "scissors";
  }
}

//Allow player to choose a hand and validates the input
function getPlayerChoice() {
  let askHand = prompt("What hand do you want to play? Rock, Paper or scissors?");
  let playerSelection = askHand.toLowerCase();
  if (playerSelection == "paper") {
        return playerSelection;}
    else if (playerSelection == "rock") {
        return playerSelection;}
    else if (playerSelection == "scissors") {
        return playerSelection}
    else {
        console.log("Thats not a valid input")
    }    
}

//Create a function that playes a round
function playRound(playerSelection, computerChoice) {
        if (computerChoice == "scissors" && playerSelection == "paper") 
        {
            console.log("You lose! " + computerChoice + " wins from " + playerSelection + "!");
            computerScore ++;
            console.log("Computer score: " + computerScore + " - Player Score: " + playerScore + "!");
        } 
        else if (computerChoice == "scissors" && playerSelection == "rock") 
        {
            console.log("You win! " + computerChoice + " wins from " + playerSelection + "!");
            playerScore ++;
            console.log("Computer score: " + computerScore + " - Player Score: " + playerScore + "!");
        } 
        else if (computerChoice == "paper" && playerSelection == "rock") 
        {
            console.log("You lose! " + computerChoice + " wins from " + playerSelection + "!");
            computerScore ++;
            console.log("Computer score: " + computerScore + " - Player Score: " + playerScore + "!");    
        } 
        else if (computerChoice == "paper" && playerSelection == "scissors") 
        {
            console.log("You win! " + computerChoice + " looses from " + playerSelection + "!");
            playerScore ++;
            console.log("Computer score: " + computerScore + " - Player Score: " + playerScore + "!");
        } 
        else if (computerChoice == "rock" && playerSelection == "paper")
        {
            console.log("You win! " + computerChoice + " looses from " + playerSelection + "!");
            playerScore ++;
            console.log("Computer score: " + computerScore + " - Player Score: " + playerScore + "!");
        } 
        else if (computerChoice == "rock" && playerSelection == "scissors") 
        {
            console.log("You lose! " + computerChoice + " wins from " + playerSelection + "!");
            computerScore ++;
            console.log("Computer score: " + computerScore + " - Player Score: " + playerScore + "!");
        } 
        else 
        { 
            console.log("Draw! Try again!");
        }
    }


playRound(playerSelection, computerChoice);
