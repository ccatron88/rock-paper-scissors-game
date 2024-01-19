let playerSelection;
let computerSelection;
let round = ""
let tie;
let count = 0;
let playerCount = 0;
let computerCount = 0;

function getComputerChoice() {
    let choice = ""
    let choiceNumber = Math.floor(Math.random() * (4 - 1) + 1);

    if (choiceNumber == 1) {
        choice = "rock";
    } else if (choiceNumber == 2) {
        choice = "paper";
    } else if (choiceNumber == 3) {
        choice = "scissors"
    }

    return choice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice (Rock, paper, or scissors): ");
    return playerChoice;
}

function playRound(computerSelection, playerSelection) {
            if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'scissors')) {
                playerCount++
                return "Player wins round: Rock beats Scissors!"
            } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'paper')) {
                computerCount++
                return "Computer wins round: Paper beats Rock!"
            } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'rock')) {
                tie = false;
                return "Tie!"
            } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'rock')) {
                playerCount++
                return "Player wins round: Paper beats Rock!"
            } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'scissors')) {
                computerCount++
                return "Computer wins round: Scissors beats Paper!"
            } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'paper')) {
                tie = false;
                return "Tie!"
            } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'paper')) {
                playerCount++
                return "Player wins round: Scissors beats Paper!"
            } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'rock')) {
                computerCount++
                return "Computer wins round: Rock beats Scissors!"
            } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'scissors')) {
                tie = false;
                return "Tie!"
            }
        }

function game() {
    while (count < 5) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        round = playRound(computerSelection, playerSelection)

        if (round == "Tie!") {
            while (tie == false) {
                round = playRound(computerSelection, playerSelection)
                if (round == 'Tie!') {
                    console.log("We have a tie! Play again!");
                    computerSelection = getComputerChoice();
                    playerSelection = getPlayerChoice();
                } else {
                    tie = true;
                }
            }
        }
        
        console.log(round)
        count++;
    }

    if (playerCount > computerCount) {
        console.log(playerCount)
        console.log("Player wins the game!");
    } else {
        console.log(computerCount)
        console.log("Computer wins the game!");
    }
}
