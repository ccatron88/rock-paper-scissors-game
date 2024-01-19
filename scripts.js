// let buttonElement = document.querySelector("#rps-number")
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let round = ""
let tie = false;

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

    document.querySelector("#computer-choice").innerHTML = choice

    return choice;

    
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice (Rock, paper, or scissors): ");
    document.querySelector("#player-choice").innerHTML = playerChoice

    return playerChoice;
}

function playRound(computerSelection, playerSelection) {
    console.log(`Selections are: Player - ${playerSelection}, Computer - ${computerSelection}`)

    if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'scissors')) {
        return "Player wins: Rock beats Scissors!"
    } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'paper')) {
        return "Computer wins: Paper beats Rock!"
    } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'rock')) {
        return "Tie!"
    }

    if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'rock')) {
        return "Player wins: Paper beats Rock!"
    } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'scissors')) {
        return "Computer wins: Scissors beats Paper!"
    } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'paper')) {
        return "Tie!"
    }

    if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'paper')) {
        return "Player wins: Scissors beats Paper!"
    } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'rock')) {
        return "Computer wins: Rock beats Scissors!"
    } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'scissors')) {
        return "Tie!"
    }
}

while (tie == false) {
    round = playRound(computerSelection, playerSelection)
    if (round == 'Tie!') {
        console.log("We have a tie! Play again!")
        computerSelection = getComputerChoice()
    } else {
        tie = true;
    }
}

console.log(round);

// buttonElement.addEventListener("click", getComputerChoice);
