function getComputerChoice(){
    let num=Math.floor(Math.random()*(3))+1;
    if (num === 1) return "rock";
    if (num === 2) return "paper";
    return "scissor";

}
// console.log(getComputerChoice());

function getHumanChoice(){
    let choice=prompt("What's your choice?");
    return choice;
}
// console.log(getHumanChoice());

let humanScore=0, computerScore=0;

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();

    if(humanChoice=="rock" && computerChoice=="scissor" || humanChoice=="paper" && computerChoice=="rock" || humanChoice=="scissor" && computerChoice=="paper" ){
        humanScore+=1;
        return;
    }
    if(computerChoice=="rock" && humanChoice=="scissor" || computerChoice=="paper" && humanChoice=="rock" || computerChoice=="scissor" && humanChoice=="paper" ){
        computerScore+=1;
        return;
    }
}
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// console.log(humanScore);

function playGame(){
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        
    }
    console.log("HumanScore: "+humanScore +" ComputerScore: "+computerScore);
    if(computerScore>humanScore){
        console.log("You lose");
    }
    else if(humanScore>computerScore){
        console.log("You win!");
    }
    else{
        console.log("It's a tie!");
    }
}
console.log(playGame());