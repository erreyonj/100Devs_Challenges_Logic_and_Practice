//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const mizu = [3,7,25,50,105]
const sumArr = (arr) => arr.reduce((acc,c)=> acc + c,0)

console.log(sumArr(mizu)); // 190

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const oto = (arr) => arr.map((e)=>e*e)
console.log(oto(mizu));

//Create a function that takes string
//Print the reverse of that string to the console

const kaminari = (str) => str.split('').reverse().join('')
console.log(kaminari('paper'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const isPalindrome = (str) => {
    let reversed = kaminari(str)
    if(reversed === str){
        return 'Thats a Palindrome bay-beeee'
    } else return 'That aint it boss'
}

console.log(isPalindrome('racecar'));
