function checkScore(winner) {
    let compScore = parseInt( document.getElementById('Computer').innerHTML);
    let humanScore = parseInt( document.getElementById('Human').innerHTML);
    let humanTxt = document.getElementById('Human');
    let compTxt = document.getElementById('Computer');
    let message = document.getElementById('message');
    let Leader = "";
 

    console.log(typeof(compScore) + " " + typeof(humanScore) );
    console.log(compScore);

    if (compScore === 5 || humanScore === 5) {
        compScore = 0;
        humanScore = 0;
    };

    if (winner === "none") {
        return;
    } else if (winner === "comp") {
        compScore++;
    } else {
        humanScore++;
    };
    
    if (compScore > humanScore) {
        Leader = "Computer wins";
    } else if (compScore < humanScore) {
        Leader = "You win";
    } else {
        Leader = "Its a tie";
    };

    if (compScore === 5 || humanScore === 5) {
        message.textContent = `Game over: ${Leader}`;
    } else {
        message.textContent = `${Leader} this round`;
    };

    humanTxt.textContent = `${humanScore}`;
    compTxt.textContent = `${compScore}`
}

function computerPlay() {
    let pick = Math.floor(Math.random() * 3 + 1);
    let choice = "";
    if (pick === 1) {choice = "rock";}
    else if (pick === 2) {choice = "paper";}
    else {choice = "scissors";}

    return choice;
}

function playRPS_Round(selection) {
    let playerChoice = selection;
    let compChoice = computerPlay();
    let winner = "";

    if (playerChoice === compChoice) { winner = "none";}
    else if (playerChoice === "rock" && compChoice === "scissors") { winner = "player";}
    else if (playerChoice === "paper" && compChoice === "rock") { winner = "player";}
    else if (playerChoice === "scissors" && compChoice === "paper") { winner = "player";}
    else { winner = "comp";}

    checkScore(winner);

    console.log(`Winner this round is ${winner}!`);
    return winner;

}

document.addEventListener('click', (e) => {
    let trgId = `${e.target.id}`;

    if (trgId == 'rock' || trgId == 'paper' || trgId == 'scissors'){
        playRPS_Round(trgId);
    }
})
