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
        result = "You win!";
        /*console.log(result);*/
        playerScore ++
        
        return result
    }

    if (playerSelection === "rock"  && computerSelection === "scissors"){
        result = "You win!";
        /*console.log(result);*/
        playerScore ++
        
        return result
    }

    if (playerSelection === "scissors"  && computerSelection === "paper"){
        result = "You win!";
        /*console.log(result);*/
        playerScore ++
        
        return result
    }else {
        result = "You Lose!";
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
                /* Adds player choice display pic and words*/ 
    playerChoiceName.textContent = ""
    playerChoiceDisplayPic.src = ""
                /* Adds CPU choice display pic and words*/
    CpuChoiceName.textContent = ""
    CpuChoiceDisplayPic.src = ""
    gameState = true
    message.textContent = ""
    message.classList.remove("greenmessage", "redmessage")
}


const choices = document.querySelectorAll(".button")
const cpuChoice = document.querySelector(".cpu-choice")
const newGameBtn = document.querySelector(".new-gamebtn")


const gameOver = document.querySelector(".game-over")

const playerScoreDisplay = document.querySelector(".playerScoreDisplay")
const playerChoiceName = document.querySelector(".playerChoiceName")
const playerChoiceDisplayPic = document.querySelector(".playerChoicePic")


const cpuScoreDisplay = document.querySelector(".cpuScoreDisplay")
const CpuChoiceName = document.querySelector(".CpuChoiceName")
const CpuChoiceDisplayPic = document.querySelector(".CpuChoicePic")



const message = document.querySelector(".message")
const winningScoreDisplay = document.querySelector(".subHeader")


gameState = true

playerScoreDisplay.textContent = playerScore
cpuScoreDisplay.textContent = computerScore
winningScoreDisplay.textContent = winningScore

newGameBtn.addEventListener("click",newgame)

choices.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (gameState){
            playRound(button.id, getComputerChoice())
            /* Adds player choice display pic and words*/ 
            playerChoiceName.textContent = button.id
            playerChoiceDisplayPic.src = "./img/"+button.id+".png"
            /* Adds CPU choice display pic and words*/
            CpuChoiceName.textContent = computerChoice
            CpuChoiceDisplayPic.src = "./img/"+computerChoice+".png"
            
        
        


        if (result === "You win!"){
            message.classList.remove("greenmessage", "redmessage")
            message.classList.add("greenmessage")
        }

        if (result === "You Lose!"){
            message.classList.remove("greenmessage", "redmessage")
            message.classList.add("redmessage")
        }
        if (result === "Its a Draw"){
            message.classList.remove("greenmessage", "redmessage")
            
        }

        playerScoreDisplay.textContent = playerScore
        cpuScoreDisplay.textContent = computerScore
        message.textContent = result


        
        if (playerScore >= winningScore || computerScore >= winningScore){
            gameState = false
            if (playerScore == winningScore){
                message.classList.add("greenmessage")
                message.textContent = "Game Over - You Win"

            }else {
                message.textContent = "Game Over - You Lose"
                message.classList.add("redmessage")
            }
            
            
            
            
            

        }
        
        
        }else{return}
        


        

    });
});







