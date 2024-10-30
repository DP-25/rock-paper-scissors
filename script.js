let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const div = document.querySelector('#result');
const results = document.querySelector("#round");
const score = document.querySelector("#final");
const reminder = document.querySelector("#rem");

function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3);

    if(randNum === 0){
        return 'rock';
    }
    else if(randNum === 1){
        return 'scissors';
    }
    else{
        return 'paper';
    }
}

/*function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors");
    choice = choice.toLowerCase();
    
    if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        return "Invalid input!! Pls choose between rock, paper or scissors!";
    }

    return choice;
}*/

function playRound(humanChoice){
    if(reminder.textContent !== ''){
        reminder.textContent = '';
    }
    let result;
    humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    switch(humanChoice){
        case 'rock':
            if(computerChoice === 'rock'){
                result = "The bot chose rock, it's a tie";
            }
            else if(computerChoice === 'paper'){
                result = "The bot chose paper. You lose! SMH losing to a bot!";
            }
            else{
                result = "Bot chose scissors, You won the round!"
            }
            break;
        case 'scissors':
            if(computerChoice === 'scissors'){
                result = "The bot chose scissors. It's a tie";
            }
            else if(computerChoice === 'rock'){
                result = "The bot chose rock. You lose! SMH losing to a bot!";
            }
            else{
                result = "Bot chose paper, You won the round!"
            }
            break;
        case 'paper':
            if(computerChoice === 'paper'){
                result = "The bot chose paper. It's a tie";
            }
            else if(computerChoice === 'scissors'){
                result = "The bot chose scissors. You lose! SMH losing to a bot!";
            }
            else{
                result = "Bot chose rock, You won the round!"
            }
            break;
        default:
            result = "There was something wrong, try again!";
    }

    results.textContent = "You chose: " + humanChoice + ". " + result;
    return result;

}

function playGame(human){

    let temp = playRound(human);
    if(temp.includes("You won the round")){
        humanScore++;
    }
    else if(temp.includes("You lose")){
        computerScore++;
    }
    else{
        console.log("Tie! Score is the same");
    }

    score.textContent = "The current score is: Human: " + humanScore + " Computer: " + computerScore;

    if(humanScore === 5 || computerScore === 5){
        score.textContent = "THATS ALL FOLKS! Final Score is: Human: " + humanScore + " Bot: " + computerScore;
        score.style.cssText = "font-size: 20px; font-weight:bold;";
        reminder.textContent = "Choose an option to start again!";
        reminder.style.cssText = "font-size: 18px; font-weight:bold;";
        humanScore = 0;
        computerScore = 0;
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        playGame(button.id);
    });
});