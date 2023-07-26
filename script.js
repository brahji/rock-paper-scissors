const choiceList = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choiceList.length);
    return choiceList[randomChoice];
}



function getPlayerChoice() {
    let playerChoice = prompt('Make your choice, rock paper or scissors');
    return playerChoice.toLowerCase();
}



const playerchoice = getPlayerChoice();
const computerchoice = getComputerChoice();


console.log(computerchoice)
console.log(playerchoice)

function playRound(getPlayerChoice, getComputerChoice) {
    if (playerchoice == computerchoice) {console.log("Tie!");}
        else if (playerchoice == 'rock' && computerchoice == 'scissors') {console.log("You win! Rock beats scissors.");}
        else if (playerchoice == 'rock' && computerchoice == 'paper') {console.log("You lose! Paper beats rock.");} 
        else if (playerchoice == 'scissors' && computerchoice == 'paper') {console.log("You win! Scissors beats paper.");} 
        else if (playerchoice == 'scissors' && computerchoice == 'rock') {console.log("You lose! Rock beats scissors.");} 
        else if (playerchoice == 'paper' && computerchoice == 'scissors') {console.log("You lose! Scissors beats paper.");} 
        else if (playerchoice == 'paper' && computerchoice == 'rock') {console.log("You win! Paper beats rock.");} 

}

playRound()