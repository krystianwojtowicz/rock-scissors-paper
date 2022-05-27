const gameSummary = {
    wins: 0,
    losses: 0,
    draws: 0,
}

let playerValue;

function computerPlay() {
    const possibilities = ['rock', 'paper', 'scissors'];
    possibility = possibilities[Math.floor(Math.random() * possibilities.length)];
    return possibility;

}

function playerPlay() {
    playerValue = this.dataset.option;
}

function checkResult(computerSelection, playerValue) {
    if (playerValue === computerSelection) {
        return 'draw';
    } else if ((playerValue === "paper" && computerSelection === "rock") || (playerValue === "rock" && computerSelection === 'scissors') || (playerValue === 'scissors' && computerSelection === "paper")) {
        return 'win';
    } else {
        return 'lose';
    }
}

function showResult(playerValue, computerSelection, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = playerValue;
    document.querySelector('[data-summary="ai-choice"]').textContent = computerSelection;
    if (result === 'win') {
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!!!!"
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        if (gameSummary.wins == '5') {
            alert('Wygrałeś')
        }
    } else if (result === 'lose') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał :("
        if (gameSummary.losses == '5') {
            alert('Komputer wygrał')
        }
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis :\\"
    }
}

function playRound() {
    if (!playerValue) {
        return alert("wybierz dłoń!!!!");
    }
    const computerSelection = computerPlay();
    const result = checkResult(playerValue, computerSelection);
    showResult(playerValue, computerSelection, result);

}


let buttons = [...document.querySelectorAll('.button')];
buttons.forEach(button => {
    button.addEventListener('click', playerPlay)

});
document.querySelector('.start').addEventListener('click', playRound)