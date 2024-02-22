//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let someNums = [4,23,11,9,10]
const theSum = (arr) => {
    return arr.reduce((acc,c)=>acc+c,0)
}

console.log(theSum(someNums))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const sqrd = (arr) => {
    return arr.map((num)=>num*num)
}

console.log(sqrd(someNums));

//Create a function that takes string
//Print the reverse of that string to the console

const revString = (str) => {
    return str.split('').reverse().join('')
}

console.log(revString('Demon Slayer'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const isPali = (str) => {
    const reversed = revString(str)
    return str === reversed ? 'Dats a Palindrome bay-beeee!!' : 'That ain\'t it boss'
}

console.log(isPali('racecar'));