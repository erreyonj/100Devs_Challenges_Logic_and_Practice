// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const sentence = 'Is this a question?'

function isQuestion(str){
    return str.endsWith('?') ? 'Issa Question' : 'Not a question!'
}

console.log(isQuestion(sentence))


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

const sent = 'here jr. devs are some jr. devs that should instead of calling themsleves that, should be calling themsleves jr. devs'

function realJob(str){
   return str.replaceAll('jr. devs', 'software engineers')
}

console.log(realJob(sent));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let num = Math.random()
    return num < .33 ? 'rock' : num > .66 ? 'scissors' : 'paper'
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function challenge(choice){
    let botChoice = rockPaperScissors()
    return (choice === 'rock' && botChoice === 'scissors') ||
    (choice === 'paper' && botChoice === 'rock') ||
    (choice === 'scissors' && botChoice === 'paper') ?
    console.log('You Won!') :
    (choice === botChoice) ?
    console.log('Draw!') :
    console.log('You Lost!')
}

console.log(challenge('rock'))



//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function plyGames(arr){
    arr.forEach(choice=>challenge(choice))
}

console.log(plyGames(['rock','paper','paper']));