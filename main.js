let computerChoice;

const computerSelection = getComputerChoice();
const playerSelection = "Rock";



function getComputerChoice(){
    computerChoice = Math.floor(Math.random()*3)+1;
    /*console.log(computerChoice)*/
    if (computerChoice === 1){
        computerChoice = "Rock";
    }else if (computerChoice === 2){
        computerChoice = "Paper";
    }else computerChoice = "Scissors";
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

    if (playerSelection === "paper"  && computerSelection === "Rock"){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        /*console.log(result);*/
        return result
    }

    if (playerSelection === "Rock"  && computerSelection === "Scissors"){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        /*console.log(result);*/
        return result
    }

    if (playerSelection === "Scissors"  && computerSelection === "Paper"){
        result = "You win! " + playerSelection + " beats " + computerSelection;
        /*console.log(result);*/
        return result
    }else {
        result = "You Lose! " + computerSelection + " beats " + playerSelection;
        /*console.log(result);*/
        return result;
    }
    


    
    
}

playRound(playerSelection,computerSelection)