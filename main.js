let computerChoice;
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 3;
let winningScore = 5




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


const choices = document.querySelectorAll(".button")
const cpuChoice = document.querySelector(".cpu-choice")
const gameResult = document.querySelector(".result")
const runningScore = document.querySelector(".running-score")
const gameOver = document.querySelector(".game-over")


gameState = true


choices.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (gameState){
            playRound(button.id, getComputerChoice())
        
        cpuChoice.textContent = "The computer chose " + computerChoice
        gameResult.textContent = result
        runningScore.textContent = "Player Score = " + playerScore + " vs " + "Computer Score = " + computerScore
        if (playerScore >= winningScore || computerScore >= winningScore){
            gameState = false
            gameResult.textContent = ""
            runningScore.textContent = ""
            gameOver.textContent = "Game Over - Player Score = "+ playerScore + " vs " + "Computer Score = " + computerScore
            

        }
        
        
        }else{return}
        


        

    });
});







