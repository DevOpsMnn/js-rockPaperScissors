/************************************************************************************************
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
*************************************************************************************************/

// Constants
const playerSelection = "rock";
const computerChoice = getComputerChoice();

// Let

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

//Create a function that playes a round
function playRound(playerSelection, computerChoice) {
    getComputerChoice();
    if (computerChoice == "scissors" && playerSelection == "paper") {
        console.log("You lose! " + computerChoice + " wins from " + playerSelection + "!"); 
    } else if (computerChoice == "scissors" && playerSelection == "rock") {
        console.log("You win! " + computerChoice + " wins from " + playerSelection + "!");
    } else if (computerChoice == "paper" && playerSelection == "rock") {
        console.log("You lose! " + computerChoice + " wins from " + playerSelection + "!");
    } else if (computerChoice == "paper" && playerSelection == "scissors") {
        console.log("You win! " + computerChoice + " looses from " + playerSelection + "!");
    } else if (computerChoice == "rock" && playerSelection == "paper") {
        console.log("You win! " + computerChoice + " looses from " + playerSelection + "!");
    } else if (computerChoice == "rock" && playerSelection == "scissors") {
        console.log("You lose! " + computerChoice + " wins from " + playerSelection + "!");
    } else {
        console.log("You choose the same....");
    }
}

playRound(playerSelection, computerChoice)