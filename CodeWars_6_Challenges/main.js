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

console.log(order('4of Fo1r pe6ople g3ood th5e the2'))
//Success!!