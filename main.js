let computerChoice;
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 3;
let winningScore = 5;




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

function newgame(){
    console.log("newgame")
    playerScore = 0
    computerScore = 0
    playerScoreDisplay.textContent = playerScore
    cpuScoreDisplay.textContent = computerScore
    message.textContent = "Shoot - make a selection"
    gameState = true
}


const choices = document.querySelectorAll(".button")
const cpuChoice = document.querySelector(".cpu-choice")
const newGameBtn = document.querySelector(".new-gamebtn")


const gameOver = document.querySelector(".game-over")
const playerScoreDisplay = document.querySelector(".playerScoreDisplay")
const cpuScoreDisplay = document.querySelector(".cpuScoreDisplay")
const message = document.querySelector(".message")
const winningScoreDisplay = document.querySelector(".subHeader")

message.textContent = "Shoot - make a selection"
gameState = true

playerScoreDisplay.textContent = playerScore
cpuScoreDisplay.textContent = computerScore
winningScoreDisplay.textContent = winningScore

newGameBtn.addEventListener("click",newgame)

choices.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (gameState){
            playRound(button.id, getComputerChoice())
        
        
        
        playerScoreDisplay.textContent = playerScore
        cpuScoreDisplay.textContent = computerScore
        message.textContent = result
        
        if (playerScore >= winningScore || computerScore >= winningScore){
            gameState = false
            if (playerScore == winningScore){
                message.textContent = "Game Over - You Win"

            }else message.textContent = "Game Over - You Lose"
            
            
            
            
            

        }
        
        
        }else{return}
        


        

    });
});







