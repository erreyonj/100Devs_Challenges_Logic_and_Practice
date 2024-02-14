// //Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

// const brick = (arr) => {
//     let evens = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             evens.push(arr[i])
//         }   
//     } return evens 
// }

// const mizu = [1,1,4,6,13,22]

// const snare = brick(mizu)
// console.log(snare);

// const camelize = (string) => {
//     return string.split('-').map((word,index)=> index == 0 ? word : word[0].toUpperCase() + word.slice(1) ).join('')
// }

// const cameled = camelize('mizu-no-kokyu')
// console.log(cameled);

// const filterRange = (arr,a,b) => {
//     return arr.filter(item => item >= a && item <= b)
// }

// const kaminari = [1,3,5,7,9]
// const radda = filterRange(kaminari,1,4)

// console.log(radda);
// console.log(kaminari);

// const inPlace = (arr,a,b) =>{
//     for(let i = 0; i < arr.length; i++){
//         let val = arr[i]
//         if(val < a || val > b){
//             arr.splice(i,1)
//             i--
//         }
//     }
// }

// const dave = [5,3,8,1]
// inPlace(dave,1,4)

// console.log(dave)

// const shock = [5, 2, 1, -10, 8];

// const spider = shock.sort((a,b) => b - a )

// console.log( spider )