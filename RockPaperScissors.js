
function computerPlay() {
    let pick = Math.floor(Math.random() * 3 + 1);
    let choice = "";
    if (pick === 1) {choice = "rock";}
    else if (pick === 2) {choice = "paper";}
    else {choice = "scissors";}

    return choice;
}

function playerSelection(selection) {

    if (["rock","paper", "scissors"].includes(selection)) {
        return selection;
    } else { console.log("invalid selection, automatic loss!");
return }
}

function playRPS_Round(selection) {
    let playerChoice = playerSelection(selection);
    let compChoice = computerPlay();
    let winner = "";

    if (playerChoice === compChoice) { winner = "none";}
    else if (playerChoice === "rock" && compChoice === "scissors") { winner = "player";}
    else if (playerChoice === "paper" && compChoice === "rock") { winner = "player";}
    else if (playerChoice === "scissors" && compChoice === "paper") { winner = "player";}
    else { winner = "comp";}

    console.log(`Winner this round is ${winner}!`);
    return winner;

} 

/* below method from - https://www.fwait.com/how-to-detect-which-button-is-clicked-in-javascript/ */

/*document.addEventListener('click', (e) => {
    let element = e.target;
    if (element.id === 'game') {
        console.log('Playing game');
        game();
    }
}, {once: true});*/

function UserChoice() {
    document.addEventListener('click', (e) => {
        let element = e.target;
        if (element.class === 'playBtn') {
            let outP = `${element.id}`
            return outP;
        }
    }, {once: true});
}


/*const rockBtn = document.querySelector('#Rock');
rockBtn.addEventListener('click', () => playRPS_Round('rock'));

const paperBtn = document.querySelector('#Paper');
paperBtn.addEventListener('click', () => playRPS_Round('paper'));

const scisBtn = document.querySelector('#Scissors');
scisBtn.addEventListener('click', () => playRPS_Round('scissors')); */


function game() {
    let playerScore = 0;
    let compScore = 0;
    let msg = "";
    let roundW = ""
    
    while (playerScore < 5 && compScore < 5 ) {
        console.log('Make a choice');
        let selection = document.addEventListener('click', (e) => {`${e.target.id}`}, {once: true});
        console.log(`selection is: ${selection}`);
        roundW = playRPS_Round(selection);

        if (roundW === "player") {
           playerScore += 1;
        } else if ( roundW === "comp") {
            compScore += 1;
            console.log(compScore)
        } else {console.log("tie");}
    }

    if (playerScore === compScore) {msg = "the game is a tie";}
    else if (playerScore > compScore) {msg = "congratulations, you won!";}
    else {msg = "sorry, you lost."}

    console.log(`Game over! ${msg} the score was you = ${playerScore} computer = ${compScore}`);
}

game();