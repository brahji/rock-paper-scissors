const choiceList = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choiceList.length);
    return choiceList[randomChoice];
}

console.log(getComputerChoice())

function getPlayerChoice() {
    let playerChoice = prompt('Make your choice, rock paper or scissors');
    return playerChoice.toLowerCase();
}

console.log(getPlayerChoice())

function playRound(getPlayerChoice, getComputerChoice) {
    
}