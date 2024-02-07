let playerSelection;
let computerSelection;
let round = ""
let gameCount = 0;
let playerCount = 0;
let computerCount = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const countDiv = document.querySelector('#running-count');

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

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'scissors')) {
        playerCount++;
        gameCount++;
        resultsDiv.innerText = "Player wins round: Rock beats Scissors!"
    } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'paper')) {
        computerCount++;
        gameCount++;
        resultsDiv.innerText = "Computer wins round: Paper beats Rock!"
    } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection == 'rock')) {
        resultsDiv.innerText = "Tie! Play round again!"
    } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'rock')) {
        playerCount++;
        gameCount++;
        resultsDiv.innerText = "Player wins round: Paper beats Rock!"
    } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'scissors')) {
        computerCount++;
        gameCount++;
        resultsDiv.innerText = "Computer wins round: Scissors beats Paper!"
    } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection == 'paper')) {
        resultsDiv.innerText = "Tie! Play round again!"
    } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'paper')) {
        playerCount++;
        gameCount++;
        resultsDiv.innerText = "Player wins round: Scissors beats Paper!"
    } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'rock')) {
        computerCount++;
        gameCount++;
        resultsDiv.innerText = "Computer wins round: Rock beats Scissors!"
    } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection == 'scissors')) {
        resultsDiv.innerText = "Tie! Play round again!"
    }

    countDiv.innerText = `Player Count: ${playerCount} | Computer Count: ${computerCount}`
    resultsDiv.appendChild(countDiv);

    if (gameCount >= 5) { 
        if (playerCount > computerCount) {
            let playerWin = document.createElement('p');
            playerWin.innerText = `Player wins! Player Count: ${playerCount} | Computer Count: ${computerCount}`;
            resultsDiv.appendChild(playerWin);
        } else {
            let computerWin = document.createElement('p');
            computerWin.innerText = `Computer wins! Computer Count: ${computerCount} | Player Count: ${playerCount}`;
            resultsDiv.appendChild(computerWin);
        }

        document.querySelector('#btn-container').remove();
        
        let resetBtn = document.createElement('button');
        resetBtn.innerText = 'Reset';
        resultsDiv.appendChild(resetBtn).addEventListener('click', () => window.location.reload());
    }
}

rock.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'rock';
    playRound(playerChoice, computerChoice);
});
paper.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'paper';
    playRound(playerChoice, computerChoice);
});
scissors.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'scissors';
    playRound(playerChoice, computerChoice);
});
