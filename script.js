console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors");
    choice = choice.toLowerCase();
    
    if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        return "Invalid input!! Pls choose between rock, paper or scissors!";
    }

    return choice;
}

function playRound(humanChoice, computerChoice){
    let result;
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

    console.log(result);
    return result;

}

function playGame(){
    let rounds = 5;
    console.log("Welcome to the RPS ROYAL RUMBLE!");

    for(let curr = 0; curr < rounds; curr++){
        const hum = getHumanChoice();
        const bot = getComputerChoice();
        let temp = playRound(hum, bot);
        if(temp.includes("You won the round")){
            humanScore++;
        }
        else if(temp.includes("You lose")){
            computerScore++;
        }
        else{
            console.log("Tie! Score is the same");
        }

        console.log("The current score is: Human: " + humanScore + " Coomputer: " + computerScore)

    }

    console.log("THATS ALL FOLKS! Final Score is: Human: " + humanScore + " Bot: " + computerScore);
    humanScore = 0;
    computerScore = 0;
}

playGame();