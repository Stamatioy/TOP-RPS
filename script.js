console.log("Script Linked");
let message = "Lets play Rock Paper Scissors! \nType your choice (it is case insensitive)."

function getComputerChoice() {
    let computerSelection = "";
    let random = Math.floor(Math.random() * 3);
    if (rand === 0) {
        computerSelection = "rock";
    } else if (random === 1) {
        computerSelection = "paper";
    } else if (random === 2) {
        computerSelection = "scissors";
    }
    
    return computerSelection;
}

const arr = ["rock", "paper", "scissors", null];

function getHumanChoice() {
    let humanSelection = "";
    while (!arr.includes(humanSelection) ) {
        humanSelection = prompt(message);
        if (humanSelection !== null) {
            humanSelection = humanSelection.toLowerCase();
        }
    }
    if(humanSelection === null) {
        console.log("You pressed Cancel. Game will stop now. You can reload to play again..")
    }
    return humanSelection;
    
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice) {
        //Cancel
        if (humanChoice === null) {
            return -1;
        }
        //TIE
        if (humanChoice === computerChoice) {
            console.log(`Its a tie!`);
        }
        //WIN
        else if((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")) {
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats  ${computerChoice}`);
                } else {
                    computerScore++;
                    console.log(`You lose! ${computerChoice} beats  ${humanChoice}`);
                }
    
    }
    for (let i = 0; i<5; i++) {
        let check_cancel = playRound(getHumanChoice(), getComputerChoice());
        if (check_cancel === -1)
            return 0;
        console.log(`SCORE: ${humanScore} - ${computerScore}`)
    }
    if(humanScore > computerScore) {
        console.log("YOU WON!");
    } else if (humanScore < computerScore){
        console.log("YOU LOST!");
    } else {
        console.log("TIE!");
    }
}

playGame();