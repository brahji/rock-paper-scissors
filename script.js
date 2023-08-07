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
let gamescore = playerscore + " - " + computerscore;
const playerchoice = getPlayerChoice();
const computerchoice = getComputerChoice();

console.log(computerchoice);
console.log(playerchoice);

function playRound(getPlayerChoice, getComputerChoice) {
    if (playerchoice == computerchoice) {console.log("Tie!" + gamescore);}
        else if (playerchoice == 'rock' && computerchoice == 'scissors') {++playerscore; console.log("You win!" + gamescore);}
        else if (playerchoice == 'rock' && computerchoice == 'paper') {++computerscore; console.log("You lose!" + gamescore);} 
        else if (playerchoice == 'scissors' && computerchoice == 'paper') {++playerscore; console.log("You win!" + gamescore);} 
        else if (playerchoice == 'scissors' && computerchoice == 'rock') {++computerscore; console.log("You lose!" + gamescore);} 
        else if (playerchoice == 'paper' && computerchoice == 'scissors') {++computerscore; console.log("You lose!" + gamescore);} 
        else if (playerchoice == 'paper' && computerchoice == 'rock') {++playerscore; console.log("You win!" + gamescore);} 
}

playRound()

console.log(gamescore);

//function game(){
   // for(let i = 0; i === 5; i++) {

    //}
//};