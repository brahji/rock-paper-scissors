const choiceList = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choiceList.length);
    return choiceList[randomChoice];
}



function getPlayerChoice() {
    let playerChoice = prompt('Make your choice, rock paper or scissors');
    return playerChoice.toLowerCase();
}


let playerscore = 0;
let computerscore = 0;
const playerchoice = getPlayerChoice();
const computerchoice = getComputerChoice();
const gamescore = playerscore + " - " + computerscore;



console.log(computerchoice);
console.log(playerchoice);

function playRound(getPlayerChoice, getComputerChoice) {
    if (playerchoice == computerchoice) {console.log("Tie!" + gamescore);}
        else if (playerchoice == 'rock' && computerchoice == 'scissors') {console.log("You win! Rock beats scissors." + gamescore) && playerscore + 1;}
        else if (playerchoice == 'rock' && computerchoice == 'paper') {console.log("You lose! Paper beats rock." + gamescore) && computerscore + 1;} 
        else if (playerchoice == 'scissors' && computerchoice == 'paper') {console.log("You win! Scissors beats paper." + gamescore) && playerscore + 1;} 
        else if (playerchoice == 'scissors' && computerchoice == 'rock') {console.log("You lose! Rock beats scissors." + gamescore) && computerscore + 1;} 
        else if (playerchoice == 'paper' && computerchoice == 'scissors') {console.log("You lose! Scissors beats paper." + gamescore) && computerscore + 1;} 
        else if (playerchoice == 'paper' && computerchoice == 'rock') {console.log("You win! Paper beats rock." + gamescore) && playerscore + 1;} 

}
function getScore()
function game(){
playRound();
playRound();
playRound();
playRound();
playRound();
};

game();