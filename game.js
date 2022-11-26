

//Random generate value
function getComputerChoice(){
    //generate random number 
    const computerRandom = Math.floor(Math.random()*3);
    let computerChoice = '' ;

    //0->rock , 1->paper , 2->scissor
    

    if(computerRandom == 0){
        computerChoice = 'rock';
    }
    else if(computerRandom == 1){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissor' ;
    }
    document.querySelector('.computerChoice').textContent = 'Computer plays: '+computerChoice;
    return computerChoice ; 
}


const result = document.querySelector('.result');
const points = document.querySelector('.points');




//function to play one raound
function playRound(playerSelection, computerSelection){
    
     
    if((playerSelection == 'rock' && computerSelection == 'rock')||(playerSelection == 'paper' && computerSelection == 'paper')||(playerSelection == 'scissor' && computerSelection == 'scissor')){
        
        result.textContent = 'Equal!';
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerPoint+=1;
        
        result.textContent = 'You Lose , because Paper beats Rock! :(';
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissor'){
        playerPoint+=1;
       
        result.textContent = 'You Win , because Rock beats Scissor! :)';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerPoint+=1
        
        result.textContent = 'You Win , because Paper beats Rock! :)';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor'){
        computerPoint+=1;
        
        result.textContent = 'You Lose , because Scissor beats Paper! :(';
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock'){
        computerPoint+=1;
        
        result.textContent = 'You Lose , because Rock beats Scissor! :(';
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        playerPoint+=1;
        
        result.textContent = 'You Win , because Scissor beats Paper! :)';
    }
    else{
       
        result.textContent = 'Something is not right with your code! :( ' ; 
    }
    
    points.textContent = `Player is ${playerPoint} point and Computer is ${computerPoint} point !`;
    if(computerPoint >= 5 ){
        document.querySelector('.computerChoice').textContent = '';
        points.textContent = '';
        result.textContent = 'Computer is winner!';
    }
     else if (playerPoint >= 5){
        document.querySelector('.computerChoice').textContent = '';
        points.textContent = '';
        result.textContent = 'Player is winner !';
    
    }
}

//points counter
let computerPoint = 0 ;
let playerPoint = 0 ;





//selecting buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');

//set playerSelection equal to button value
rockBtn.addEventListener('click' , ()=>{
    playRound('rock',getComputerChoice());
});

paperBtn.addEventListener('click', ()=>{
    playRound('paper',getComputerChoice());
});
scissorBtn.addEventListener('click',()=>{
    playRound('scissor',getComputerChoice());
});
