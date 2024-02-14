//MAKE IT COUNT


//Create an array of movie titles. Loop through the array and each element to the h2.
const h2 = document.querySelector('h2')

const movies = [
    'Inception',
    'Tenet',
    'Memento',
    'Interstellar',
    'The Prestige',
    'Dark Knight Trilogy'
]

const h2Movies = () => {
    h2.innerText = movies
}

// h2Movies();


//Create an array of numbers. Loop through the array and three to each number and replace the old number.

const nums = [3,8,3,0,2,6,7]
const newNums = nums.map((num) => num + 3)
console.log(newNums);


//Find the average of all the numbers from question three
const avg = () => {
    const numsSum = nums.reduce((acc,num) => acc + num ,0)
    return numsSum / nums.length
}

console.log(avg());
