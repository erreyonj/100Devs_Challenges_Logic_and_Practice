// 2/14/24

///////////////
// CHALLENGE
///////////////

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

///////////////
// ATTEMPTS
///////////////

const digits = [1,2,3,4,5,6,7,8,9,0]
const createPhoneNumber = (nums) => {
    const stringNums = nums.map((num)=>num.toString())
    return `(${stringNums[0]}${stringNums[1]}${stringNums[2]}) ${stringNums[3]}${stringNums[4]}${stringNums[5]}-${stringNums[6]}${stringNums[7]}${stringNums[8]}${stringNums[9]}`
}

console.log(createPhoneNumber(digits));
// sucess!!

// Another Codewars, trying out regex:
function makePhNum(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
    // in this case the dots here (...) are not spread syntax, they represent three separate instances of the "any" character class. So the Regex group takes:
    // (...) a group of any three charaters matched from the numbers.join() call
    // (...) another group of any three charaters matched from the remaining numbers.join() call
    // (.*) THE group of any remaining characters from the numbers.join() call
    // then backreferences first group inside parentheses inside of thestring replacement with a space followed by backreferencing the other two groups
}

function aChicagoPhNum(numbers){
    return numbers.join('').replace(/(...)(...)/,'(773) $2-')
    // returns similar phone number with Chicago Area Code. if you could make it randomize against claimed numbers in a db you basically have a phone company generate new Ph# (by area code) function
}

const myPhNum = aChicagoPhNum(digits)
console.log(myPhNum)



///////////////
// CHALLENGE
///////////////
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


///////////////
// ATTEMPTS
///////////////

function disemvowel(str) {
    const trollBreaker = str.replaceAll(/[a*e*i*o*u*]/gi,'')
    return trollBreaker;
}

const cussing = 'lol Kiss my ass you bitch!'
console.log(disemvowel(cussing))
//success! welp. Learning regex in the previous challenge made this easy




///////////////
// CHALLENGE
///////////////

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. (7 down to -2 no?) In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap. (best players have -2)

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

///////////////
// ATTEMPTS
///////////////

const input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// function openOrSenior(data){
//     const memStatus = data.map((arr)=>{
//         if(arr[0]>54){
//             if(arr[1]>= 7){
//                 return 'Senior'
//             }
//         } 
//         else return 'Open'
//     })
//     return memStatus
// }

const getMemStatus = openOrSenior(input)
console.log(getMemStatus);
//success!

//refactor with ternary?
function openOrSenior(data){
    return data.map((arr)=>arr[0]>54 && arr[1]>= 7 ? 'Senior' : 'Open')
}
//success!!

//destructure for ease and readability, copied from CodeWars
function openOrSenior(data){
    return data.map(([age,handicap])=> (age>54 && handicap>= 7) ? 'Senior' : 'Open')
}
