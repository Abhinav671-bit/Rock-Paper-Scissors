const scoreDiv=document.querySelector("#score");
const resultDiv=document.querySelector("#Result");



function getComputerChoice(){
    let num=Math.floor(Math.random()*(3))+1;
    if (num === 1) return "rock";
    if (num === 2) return "paper";
    return "scissor";

}

let humanScore=0, computerScore=0;

function playRound(humanChoice,computerChoice){
    let message="";
    if (humanScore === 5) {
    resultDiv.textContent = "🎉 You won the game!";
    disableButtons();
    }
    else if (computerScore === 5) {
        resultDiv.textContent = "💀 Computer won the game!";
        disableButtons();
    }
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();

    console.log("HUman:", humanChoice, "Computer: ",computerChoice);

    if(humanChoice=="rock" && computerChoice=="scissor" || humanChoice=="paper" && computerChoice=="rock" || humanChoice=="scissor" && computerChoice=="paper" ){
        humanScore+=1;
        message = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if(computerChoice=="rock" && humanChoice=="scissor" || computerChoice=="paper" && humanChoice=="rock" || computerChoice=="scissor" && humanChoice=="paper" ){
        computerScore+=1;
        message = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else message = "It's a tie!";

   scoreDiv.textContent = `Human : ${humanScore} | Computer : ${computerScore}`;
    resultDiv.textContent = message;
    if (humanScore === 5) {
    resultDiv.textContent = "🎉 You won the game!";
    }
    else if (computerScore === 5) {
        resultDiv.textContent = "💀 Computer won the game!";
    }
}

const buttons=document.querySelectorAll(".choice");
buttons.forEach((button)=>{
    button.addEventListener("click",() =>{
        const humanChoice=button.id;
        const computerChoice=getComputerChoice();

        playRound(humanChoice,computerChoice);
    });
});

function desableButtons(){
    buttons.forEach(button =>button.disbaled=true);
}

//button → event → function → logic
