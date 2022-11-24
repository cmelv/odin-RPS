let computerChoice;
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 3;

/*console.log(playerSelection)*/


function getComputerChoice(){
    computerChoice = Math.floor(Math.random()*3)+1;
    /*console.log(computerChoice)*/
    if (computerChoice === 1){
        computerChoice = "rock";
    }else if (computerChoice === 2){
        computerChoice = "paper";
    }else computerChoice = "scissors";
    /*console.log(computerChoice)*/
    return computerChoice

}

function playRound(playerSelection,computerSelection){
    /*console.log(playerSelection)*/
    /*console.log(computerSelection)*/
    if(playerSelection === computerSelection){
        result = "Its a Draw"
        /*console.log(result);*/
        return result
    }

    if (playerSelection === "paper"  && computerSelection === "rock"){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        /*console.log(result);*/
        playerScore ++
        return result
    }

    if (playerSelection === "rock"  && computerSelection === "scissors"){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        /*console.log(result);*/
        playerScore ++
        return result
    }

    if (playerSelection === "scissors"  && computerSelection === "paper"){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        /*console.log(result);*/
        playerScore ++
        return result
    }else {
        result = "You Lose! " + computerSelection + " beats " + playerSelection;
        /*console.log(result);*/
        computerScore ++
        return result;
    }
    


    
    
}

/*console.log(playRound(playerSelection,computerSelection))*/



for (let i = 0; i < numberOfRounds; i++){
    
    /*let playerSelection = "Rock";*/
    playerSelection = prompt("type player selection")
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase()
    console.log(playRound(playerSelection,computerSelection))
    /*console.log(playerScore)
    console.log(computerScore)*/

}

console.log("Player Core = "+playerScore + " Computer Score = "+computerScore)