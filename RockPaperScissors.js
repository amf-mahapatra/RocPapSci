
function computerPlay() {
    let pick = Math.floor(Math.random() * 3 + 1);
    let choice = "";
    if (pick === 1) {choice = "rock";}
    else if (pick === 2) {choice = "paper";}
    else {choice = "scissors";}

    console.log(`Computer chooses ${choice}`)
    return choice
}

function playerSelection() {
    let selection = prompt("Choose rock, paper, scissors").toLowerCase()

    if (["rock","paper", "scissors"].includes(selection)) {
        return selection;
    } else { console.log("invalid selection, automatic loss!");
return }
}

function playRPS_Round() {
    let playerChoice = playerSelection();
    let compChoice = computerPlay();
    let winner = "";

    if (playerChoice === compChoice) { winner = "none";}
    else if (playerChoice === "rock" && compChoice === "scissors") { winner = "player";}
    else if (playerChoice === "paper" && compChoice === "rock") { winner = "player";}
    else if (playerChoice === "scissors" && compChoice === "paper") { winner = "player";}
    else { winner = "comp";}

    console.log(`Winner this round is ${winner}!`)
    return winner;

} 