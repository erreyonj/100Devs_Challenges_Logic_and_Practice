// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let myDrink = ' House Margarita '
myDrink = myDrink.trim()
console.log(myDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

const stringMeBaby = 'mizu oto kaminari, bear'
function isApple(string){
    return string.includes('apple') ? 'Has apple' : 'Apple is not there'
}

// console.log(isApple(stringMeBaby))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let result = Math.random()
    return result > .33 ? 
    result > .66 ? 'scissors' :
    'paper' : 'rock'
}

// console.log(rockPaperScissors())


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function didYouWin(choice){
    const botAnswer = rockPaperScissors()
    if(choice == 'rock' && botAnswer == 'scissors' || 
    choice == 'paper' && botAnswer == 'rock'||
    choice == 'scissors' && botAnswer == 'paper'){
        console.log('You Won!');
    } else if (choice === botAnswer){
        console.log('Draw!');
    } else console.log('You Lost!');
}

// console.log(didYouWin('scissors'));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

const choices = ['rock','rock','rock,','scissors','paper','rock']

function playGames(arr){
    arr.forEach(choice=>didYouWin(choice))
}

playGames(choices)