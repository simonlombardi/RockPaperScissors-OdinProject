const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button")
const container = document.querySelector(".text-container")
let computerChoice = "";
let userChoice = "";
let result = "";

function getComputerChoice(){
    const randomNumer = Math.floor(Math.random() * 3)
    switch(randomNumer){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function round(userChoice,computerChoice){
    if (userChoice == "rock" && computerChoice == "paper"){
        result = "Computer wins!";
    }
    else if (userChoice == "rock" && computerChoice == "scissors"){
        result = "You win!";
    }
    else if (userChoice == "paper" && computerChoice == "rock"){
        result = "You win!";
    }
    else if (userChoice == "paper" && computerChoice == "scissors"){
        result = "Computer wins!";
    }
    else if (userChoice == "scissors" && computerChoice == "rock"){
        result = "Computer wins!";
    }
    else if (userChoice == "scissors" && computerChoice == "paper"){
        result = "You win!";
    }
    else{
        result = "It's a tie!";
    }
    return result;
}

function endOfTheGame(round){
    const textResult = document.getElementById("result")
    textResult.textContent = `User: ${userChoice} - Computer: ${computerChoice}.
    Result: ${result}`;
}

buttons.forEach(button => button.addEventListener("click", (e) => {
    getComputerChoice()
    userChoice = e.target.value;
    round(userChoice,computerChoice);
    endOfTheGame(round);
}))
