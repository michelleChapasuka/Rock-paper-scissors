
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
        case input=='paper':
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

console.log(humanSelection);
console.log(computorSelection);








 