/************************************************************************************************
Make a variable to give the computer player a choice
Make a if statement to determine who wins. 
This should have:
    Tie, try again:
    Comp rock, player paper
    Comp rock, player scissors
    Comp scissors, player paper
    Comp scissors, player rock
    Comp paper, player rock
    Comp paper, player scissors
*************************************************************************************************/

let computerChoice = Math.round(Math.random() * 2 + 1);

if (computerChoice == 1) {
    computerChoice = "Paper";
} else if (computerChoice == 2) {
    computerChoice = "Rock";
} else {
    computerChoice = "Scissors";
}

console.log(computerChoice);
