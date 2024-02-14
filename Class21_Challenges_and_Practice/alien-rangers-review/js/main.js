//Arrays

//Create and array of tv shows. Loop through and print each show to the console

const shows = ['Scrubs', 'Community', 'X-Files', 'Boondocks', 'Chapelle Show']

shows.forEach((show)=>console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

const set = [4,5,32,6,97,102]
const evenSet = (arr) => {
    const evens = arr.filter((num)=>num % 2 == 0)
    return evens
}

console.log(evenSet(set))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number


const set2 = [3,6,90,12,15]
const theFinal = (arr) => {
    const sorted = arr.sort((a,b)=> a-b)
    const sum = () => sorted[1] + sorted[sorted.length -2]
    return sum()
}

console.log(theFinal(set2));