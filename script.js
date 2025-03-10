
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

//

//user choice
  

// let userInput= prompt('choose your fate: *rock*,*paper*,*scissors*').toLowerCase()
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
// getUserChoice(userInput)



// playing a round 


// console.log(humanSelection);
// console.log(computorSelection);




// playRound(humanSelection,computorSelection);
function playGame(round) {
    let userScore=0
let computerScore=0
    for (let index = 1; index < round; index++) {
        userInput= prompt('choose your fate: *rock*,*paper*,*scissors*').toLowerCase()
        console.log('round',index);
        
        let humanSelection= getUserChoice(userInput)
        let computorSelection= getComputerChoice(Math.random())
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
    else re
        
        }
        playRound(humanSelection,computorSelection)
    }

}

playGame(5)



 