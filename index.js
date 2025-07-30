function getComputerChoice(){
    let num=Math.floor(Math.random()*(3))+1;
    if (num === 1) return "rock";
    if (num === 2) return "paper";
    return "scissor";

}


let humanScore=0, computerScore=0;

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();

    if(humanChoice=="rock" && computerChoice=="scissor" || humanChoice=="paper" && computerChoice=="rock" || humanChoice=="scissor" && computerChoice=="paper" ){
        humanScore+=1;
        console.log(`You win this round! Score: Human ${humanScore} - Computer ${computerScore}`);
        return;
    }
    else if(computerChoice=="rock" && humanChoice=="scissor" || computerChoice=="paper" && humanChoice=="rock" || computerChoice=="scissor" && humanChoice=="paper" ){
        computerScore+=1;
         console.log(`Computer wins this round! Score: Human ${humanScore} - Computer ${computerScore}`);
        return;
    } else {
          console.log("It's a tie!");
        }
}

function playGame(playerSelection){

        const humanSelection =playerSelection;
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        if(humanScore===5 || computerScore===5){
    
        if(humanScore>computerScore)console.log("human won");
        else console.log("computer won");
        
        humanScore=0;
        computerScore=0;
        console.log("Game reset. Click any button to play again.");
    }
}
    
    



//playerSelection using butttons
const buttons=document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click',() => {
        const playerSelection = button.textContent;
        console.log(playerSelection) 
        playGame(playerSelection);
    })
});