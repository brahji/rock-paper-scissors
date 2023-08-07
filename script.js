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
const gamescore = playerscore + " - " + computerscore;
const playerchoice = getPlayerChoice();
const computerchoice = getComputerChoice();

console.log(computerchoice);
console.log(playerchoice);

function playRound(getPlayerChoice, getComputerChoice) {
    if (playerchoice == computerchoice) {console.log("Tie!" + gamescore);}
        else if (playerchoice == 'rock' && computerchoice == 'scissors') {console.log("You win! Rock beats scissors."); ++playerscore;}
        else if (playerchoice == 'rock' && computerchoice == 'paper') {console.log("You lose! Paper beats rock."); ++computerscore;} 
        else if (playerchoice == 'scissors' && computerchoice == 'paper') {console.log("You win! Scissors beats paper."); ++playerscore;} 
        else if (playerchoice == 'scissors' && computerchoice == 'rock') {console.log("You lose! Rock beats scissors."); ++computerscore;} 
        else if (playerchoice == 'paper' && computerchoice == 'scissors') {console.log("You lose! Scissors beats paper."); ++computerscore;} 
        else if (playerchoice == 'paper' && computerchoice == 'rock') {console.log("You win! Paper beats rock."); ++playerscore;} 

};

playRound()


function game(){
    for(let i = 0; i === 5; i++) {
        if
    }
};


console.log(`${playerscore} - ${computerscore}`)

//function game(){
   // for(let i = 0; i === 5; i++) {

    //}
//};




