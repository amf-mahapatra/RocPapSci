function checkScore() {
    let compScore = parseInt( document.getElementById('Computer').innerHTML);
    let humanScore = parseInt( document.getElementById('Human').innerHTML);
    let message = document.getElementById('message');

    console.log(typeof(compScore) + " " + typeof(humanScore) );
    console.log(compScore);

    if(compScore == 0 && humanScore == 0){
        message.textContent = 'Click a button to start game';
    } else if ();
}

checkScore();