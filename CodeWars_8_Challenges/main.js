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






