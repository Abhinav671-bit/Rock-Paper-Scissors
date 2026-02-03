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

    console.log("HUman:", humanChoice, "Computer: ",computerChoice);

    if(humanChoice=="rock" && computerChoice=="scissor" || humanChoice=="paper" && computerChoice=="rock" || humanChoice=="scissor" && computerChoice=="paper" ){
        humanScore+=1;
        console.log("You win this round!");
    }
    else if(computerChoice=="rock" && humanChoice=="scissor" || computerChoice=="paper" && humanChoice=="rock" || computerChoice=="scissor" && humanChoice=="paper" ){
        computerScore+=1;
        console.log("You lose this round");
    }
    else console.log("It's a tie");

    console.log("Score -> HUman: ",humanScore,"Computer: ",computerScore);
}

const buttons=document.querySelectorAll(".choice");
buttons.forEach((button)=>{
    button.addEventListener("click",() =>{
        const humanChoice=button.id;
        const computerChoice=getComputerChoice();

        playRound(humanChoice,computerChoice);
    });
});


//button → event → function → logic
