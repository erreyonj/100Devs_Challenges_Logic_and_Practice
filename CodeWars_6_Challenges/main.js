////////////
// 2/15/24
////////////

/////////////
//CHALLENGE
/////////////

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//////////////
// ATTEMPT
//////////////

// function order(words){
//     let sorted = [];
//     const hasNums = (word)=>{
//         for(let i = 0;i < word.length;i++){
//             if(!isNaN(word.charAt(i)) && !(word.charAt(i) === '')){
//                 return word.charAt(i)
//             } else if(word === ''){
//                 return ''
//             }
//         }
//     }
//     return words.split(' ').forEach((word)=>{
//         let pos = hasNums(word)
//         sorted[pos] = word
//     }) 
//     return sorted.toString()
// }


function order(words){
    let sorted = [];
    words.split(' ').forEach((word)=>{
        let pos = (word)=>{
            for(let i = 0;i < word.length;i++){
                if(!isNaN(word.charAt(i)) && !(word.charAt(i) === '')){
                    return word.charAt(i)
                } else if(word === ''){
                    return ''
                }
            }
        }
        sorted[pos(word)-1] = word
    }) 
    return sorted.toString().split(',').join(' ')
}

// console.log(order('4of Fo1r pe6ople g3ood th5e the2'))
//Success!!



////////////////
// CODE WARS 6 KATA CHALLENGE
////////////////

// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

//////////////
// ATTEMPT
//////////////

function solution(number){

    let strNum = number.toString().split('')
    let hunds = [
        'C',
        'CC',
        'CCC',
        'CD',
        'D',
        'DC',
        'DCC',
        'DCCC',
        'CM'
    ]

    let tens = [
        'X',
        'XX',
        'XXX',
        'XL',
        'L',
        'LX',
        'LXX',
        'LXXX',
        'XC',
    ]

    let ones = [
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
    ]
    
    function checkMs(arr){
        let ms = []
        if(strNum.length === 4){
            for(let i=1; i <=strNum[0]; i++){
                ms.push('M')
            }
        }
        return ms
    }

    function check100s(){
        let hund = []
        if(strNum.length >= 3){
            if(strNum.length === 4){
                hund[0] = hunds[strNum[1]-1]
            }else hund[0] = hunds[strNum[0]-1]
        }
        return hund
    }

    function check10s(){
        let ten = []
        if(strNum.length >= 2){
            if(strNum.length === 4){
                ten[0] = tens[strNum[2]-1]
            } else if (strNum.length === 3){
                ten[0] = tens[strNum[1]-1]
            } else ten[0] = tens[strNum[0]-1]
        }
        return ten
    }

    function check1s(){
        let one = []
        if(strNum.length >= 1){
            if(strNum.length === 4){
                one[0] = ones[strNum[3]-1]
            } else if (strNum.length === 3){
                one[0] = ones[strNum[2]-1]
            } else if(strNum.length === 2){
                one[0] = ones[strNum[1]-1]
            } else one[0] = ones[strNum[0]-1]
        }
        return one
    }

    let mSet = checkMs(strNum)
    let hundSet = check100s(strNum)
    let tenSet = check10s(strNum)
    let oneSet = check1s(strNum)
    const answer = `${mSet}${hundSet}${tenSet}${oneSet}`.split(',').join('')

    return answer
}

console.log(solution(3999));