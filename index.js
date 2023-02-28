let player = document.getElementById("playerLabel");
let computer = document.getElementById("computerLabel");
let result = document.getElementById("resultLabel");
let buttonChoice = document.querySelectorAll(".choiceBtns");

buttonChoice.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    player.innerHTML = `Player Choice: ${playerChoice}`;
    computerContent();
    resultDeclare();
}));

function computerContent() {
    let randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1: computerChoice = "Rock";
            break;
        case 2: computerChoice = "Paper";
            break;
        case 3: computerChoice = "Scissor";
            break;
    }
    computer.innerHTML = `Computer Choice: ${computerChoice}`;
}

function resultDeclare() {

    if (playerChoice == computerChoice) {
        resultValue = "Draw";
    }
    else if (playerChoice == "Rock") {
        (computerChoice == "Paper") ? resultValue = "You Loose!" : resultValue = "You Win!";
    }
    else if (playerChoice == "Paper") {
        (computerChoice == "Scissor") ? resultValue = "You Loose!" : resultValue = "You Win!";
    }
    else if (playerChoice == "Scissor") {
        (computerChoice == "Rock") ? resultValue = "You Loose!" : resultValue = "You Win!";
    }
    result.innerHTML = `Result: ${resultValue}`;
}

