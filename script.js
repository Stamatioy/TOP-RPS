console.log("Script Linked");
let message = "Lets play Rock Paper Scissors! \nType your choice (it is case insensitive)."

function getComputerChoice() {
    let c_selection = "";
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        c_selection = "rock";
    } else if (x === 1) {
        c_selection = "paper";
    } else if (x === 2) {
        c_selection = "scissors";
    }
    
    return c_selection;
}

const arr = ["rock", "paper", "scissors", null];

function getHumanChoice() {
    let h_selection = "";
    while (!arr.includes(h_selection) ) {
        h_selection = prompt(message);
        if (h_selection !== null) {
            h_selection = h_selection.toLowerCase();
        }
    }
    if(h_selection === null) {
        console.log("You pressed Cancel. Game will stop now. You can reload to play again..")
    }
    return h_selection;
    
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