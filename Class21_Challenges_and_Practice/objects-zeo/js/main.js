//Create a stopwatch object that has four properties and three methods

// const zeo = {
//     charcount: 5,
//     episodes: 50,
//     genre: 'Power Rangers',
//     audience: 'Kids',

//     describe(){
//         return `Zeo is a ${this.genre} show that has ${this.episodes} episodes, ${this.charcount} characters, and is generally for ${this.audience}`
//     },
//     arclength(){
//         let arcs = this.episodes / 10
//         return `This season of ${this.genre} has ${arcs} story arcs`
//     },
//     favRanger(color){
//         const simpColor = color.toLowerCase()
//         if(simpColor === 'red'){
//             return `So your favorite Ranger is Rocky!`
//         } else if(simpColor === 'blue'){
//             return `So your favorite Ranger is Billy!`
//         } else if(simpColor === 'yellow'){
//             return `So your favorite Ranger is Aiesha!`
//         } else if(simpColor === 'pink'){
//             return `So your favorite Ranger is Kimberly!`
//         } else if(simpColor === 'green'){
//             return `So your favorite Ranger is Tommy!`
//         } else return 'Are you sure that\'s a Ranger Color?'
//     }
// }

// console.log(zeo.describe());
// console.log(zeo.arclength())
// console.log(zeo.favRanger('Redd'));


// const stopwatch = {
//     color: 'black',
//     shape: 'round',
//     initTime: 0.00,
//     currTime: 0.00,
//     brand: 'Godspeed Watches',

//     add30(){
//         this.currTime = this.initTime + 30.00
//         return this.currTime
//     },
//     splitTime(){
//         return this.currTime / 2
//     },

//     reset(){
//         this.currTime = 0.00
//         this.initTime = 0.00
//     }

// }

// console.log(stopwatch.currTime)
// console.log(stopwatch.add30())
// console.log(stopwatch.initTime)
// console.log(stopwatch.currTime)
// stopwatch.reset()
// console.log(stopwatch.currTime);


// const arr = [55,100,-30,1,.6]
// const negSort = (arr) => arr.sort((a,b)=>b-a)

// console.log(negSort(arr));


// const arr = ['HTML','JavaScript','CSS']
// const copySorted = (arr) => {
//     let newsh = arr.slice().sort()
//     return newsh
// }


// const sorted = copySorted(arr)
// console.log(sorted)
// console.log(arr)


const calc = new Calculator('',)
// calc.calculate = (string) => {
//     console.log(string.split(' + '))
// }

calc.calculate('1 + 2')

// console.log(calc)