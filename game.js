

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

    return computerChoice ; 
}





//function to play one raound
function playRound(playerSelection, computerSelection){
    
     
    if((playerSelection == 'rock' && computerSelection == 'rock')||(playerSelection == 'paper' && computerSelection == 'paper')||(playerSelection == 'scissor' && computerSelection == 'scissor')){
        console.log('Equal!');
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerPoint+=1;
        console.log('You Lose , because Paper beats Rock!');
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissor'){
        playerPoint+=1;
        console.log('You Win , because Rock beats Scissor!');
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerPoint+=1
        console.log('You Win , because Paper beats Rock!');
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor'){
        computerPoint+=1;
        console.log('You Lose , because Scissor beats Paper!');
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock'){
        computerPoint+=1;
        console.log('You Lose , because Rock beats Scissor!');
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        playerPoint+=1;
        console.log( 'You Win , because Scissor beats Paper!');
    }
    else{
        console.log( 'Something is not right with your code! :( ');
    }
    
    console.log(`Computer is ${computerPoint} point and Player is ${playerPoint} point ! `);
   
}

//points counter
let computerPoint = 0 ;
let playerPoint = 0 ;


//play 5 rounds
function game(){
    

    for(let i = 0 ;i<5;i++){
       
        const computerSelection = getComputerChoice();
        
        let playerChoice = prompt('User input:');
        const playerSelection = playerChoice.toLowerCase();
        console.log(computerSelection);

        playRound(playerSelection , computerSelection);
        
    }
    

}

game();



