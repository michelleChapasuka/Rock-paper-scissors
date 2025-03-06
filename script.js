
//computor choice

function getComputerChoice(number) {
    // let number=Math.random()
    
    if (number>0 & number<0.4){
        return 'rock'
     }
    else if(number>=0.4 & number<0.8){
        return 'paper'
    }
    else return 'scissors'
    }

getComputerChoice(Math.random())

//user choice
  let userInput= prompt('choose your fate: *rock*,*paper*,*scissors*').toLowerCase()
   

function getUserChoice(input) {
  
     switch (input) {
        case 'paper':
            return input;
        case 'rock':
            return input
        case 'scissors':
            return input;
       
            default: return ('you choice is invalid');

    }
}
getUserChoice(userInput)

let userScore=0
let computerScore=0

// playing a round 
const humanSelection= getUserChoice(userInput)
const computorSelection= getComputerChoice(Math.random())

// console.log(humanSelection);
// console.log(computorSelection);


function playRound(userChoice,computerChoice) {
    let playerChoice=userChoice.toLowerCase()
// when players have a draw
    if(playerChoice=='rock' && computerChoice=='rock'  
        ||
         playerChoice=='paper' && computerChoice=='paper' 
        || playerChoice=='scissors' && computerChoice=='scissors'){

            console.log(`Player chose: ${playerChoice}`, `computer chose: ${computerChoice}`);
            console.log('ITS A TIE');  
             
            console.log('player score:',userScore);
            console.log('computer score:',computerScore);
        }

    
    
        
//  when player wins

    else if(playerChoice=='rock' && computerChoice=='scissors' 
        ||
         playerChoice=='paper' && computerChoice=='rock' 
        || playerChoice=='scissors' && computerChoice=='paper'){

            console.log(`Player chose: ${playerChoice}`, `computer chose: ${computerChoice}`);
            console.log('YOU WIN!!', playerChoice + ' beats ' + computerChoice); 
        
            userScore++
            console.log('player score;',userScore);
            console.log('computer score:',computerScore);
        }
            
        
    // when computer loses

    else if(playerChoice=='scissors' && computerChoice=='rock'  
             ||
             playerChoice=='rock' && computerChoice=='paper' 
            || playerChoice=='paper' && computerChoice=='scissors'){

            console.log(`Player chose: ${playerChoice}`, `computer chose: ${computerChoice}`);
            console.log('you lose!! ;(', computerChoice + ' beats ' + playerChoice);
        
            computerScore++
            console.log('player score:',userScore);
            console.log('computer score:', computerScore);
        }
            
        
        
        
        
}
playRound(humanSelection,computorSelection)


function playGame(round) {
    let numofRounds=0
    while (numofRounds<5) {
    
        
        
    }
    
}
playGame(playRound())







 