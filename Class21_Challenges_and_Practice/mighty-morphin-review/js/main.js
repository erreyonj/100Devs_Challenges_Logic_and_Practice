// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let holiday
holiday = 'CHRISTMAS'
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

const baby = 'Kiana Elders'
console.log(baby.substring(9))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

const crack = (a,b,c,d,e) => {
    let result = 100 - a  - b - c - d - e
    if (result < 0){
        result *= -1
        return result
    } else return result
}

console.log(crack(3,7,100,1,1))


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.


const brick = (a,b,c) => {
    let arr = [a,b,c]
    const minmin = Math.min(...arr)
    const maxmax = Math.max(...arr)
    return `${minmin},${maxmax}`
}

const shard = brick(4,-25,1000)

console.log(shard)


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// const pimp = () => {
//  let half = Math.random()
//  if(half < .5){
//     return 'Heads'
//  } else return 'Tails'
// }

const pimp = () => Math.random() < .5 ? 'Heads' :  'Tails'

console.log(pimp())

console.log('to FINAL')


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

const final = (num) => {
    for(let i = 1;i <= num; i++){
        const result = pimp()
        console.log(result)
    }
}

final(12) 