//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


const paper = (arr) => {
    let a = 1
    arr.forEach(item => a *= item)
    return a
}

const mizu = [3,1,7]

const folded = paper(mizu)
console.log(folded)


const arrDiff = (a,b) => {
    return a.filter((item)=> !b.includes(item))
}

const kaminari = [1,1,1,1,1,3,3,5,7,9]
const oto = [1,3,5,4,2]

console.log(arrDiff(kaminari,oto));