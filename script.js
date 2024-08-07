console.log("Script Linked");
let message = "Lets play Rock Paper Scissors! \nType your choice (it is case insensitive)."

function getComputerChoice() {
    let computerSelection = "";
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        computerSelection = "rock";
    } else if (rand === 1) {
        computerSelection = "paper";
    } else if (rand === 2) {
        computerSelection = "scissors";
    }
    
    return computerSelection;
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice) {
    const runningScore = document.querySelector(".running-score");
    //TIE
    if (humanChoice === computerChoice) {
        const announcement = document.createElement("p");
        announcement.textContent = `Its a tie! SCORE:  ${humanScore} - ${computerScore}`;
        runningScore.appendChild(announcement);
    }
    //WIN
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                humanScore++;
                const announcement = document.createElement("p");
                announcement.textContent = `You win! ${humanChoice} 
                                            beats  ${computerChoice}
                                            SCORE:  ${humanScore} - ${computerScore}`;
                runningScore.appendChild(announcement);
            } else {
                computerScore++;
                const announcement = document.createElement("p");
                announcement.textContent = `You lose! ${computerChoice} 
                                            beats  ${humanChoice}
                                            SCORE:  ${humanScore} - ${computerScore}`;
                runningScore.appendChild(announcement);
            }

    setTimeout(() => {
        if(humanScore === 5) {
            alert('YOU WIN! PLAY AGAIN?');
            runningScore.innerHTML = "";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            alert('YOU LOSE! PLAY AGAIN?');
            runningScore.innerHTML = "";
            humanScore = 0;
            computerScore = 0;
        }
    }, 100);
}


let playerSelection;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "rock-button") {
            playerSelection = "rock";
        } else if (button.id === "paper-button") {
            playerSelection = "paper";
        } else if (button.id === "scissors-button") {
            playerSelection = "scissors";
        }
        playRound(playerSelection,getComputerChoice());
    });
});
