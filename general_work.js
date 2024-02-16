////////////////
// 2/15/24
////////////////


///////////////
// Programming with Mosh OOP Stopwatch challenge
///////////////

function Stopwatch(){
    this.duration = 0
    this.currTime = 0
    this.endTime = 0
    this.maxTime = 3600000
    let isStarted = false
    this.start = function(){
        if(isStarted == false){
        isStarted = true
        this.currTime = Date.now()
        console.log('Go!')
        } else throw new Error('Stopwatch is already started!')
    }
    this.stop = function(){
        if(isStarted == false){
            throw new Error('Stopwatch hasn\'t been started!')
        } else {
            isStarted = false
            if( this.currTime !== 0){
                this.endTime = Date.now()
                this.duration += Number(((this.endTime - this.currTime)/1000).toFixed(4))
            }
        } 
    }
    this.reset = function(){
        this.duration = 0
        this.currTime = 0
        this.currTime = 0
        console.log('RESET...')
    }
}


const sw = new Stopwatch()

// function Stopwatch(){
//     this.duration = 0
//     this.maxTime = 3600000
//     this.start = function(){
//         // setInterval( _=>{},1000)
//         for(let i = this.duration;i<500;i++){
//             this.duration++
//             setInterval( _=>{},1000)
//         }
//         console.log('Go!')
//     }
//     this.stop = function(){
//         clearInterval(this.duration)
//         console.log(this.duration)
//     }
//     this.reset = function(){
//         this.duration = 0.00
//     }
// }


// sw.start()




// for(let i = 1; i <= 5; i++){
//     setTimeout(()=>{
//         this.duration++
//         console.log(this.duration);
//     },1000)
// }

///////////
// BRILLIANT BLACK MINDS
////////////

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]
 

// Constraints:
// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3


//Pseudo
//function needs to put nums[i] in new array first, then nums[i+n]
// then repeat that for n-1 times

const nums = [1,1,2,2]

const shuffle = function(nums, n) {
    let shuffled = []
    const half1 = nums.slice(0,n)
    const half2 = nums.slice(n)
    for(let i = 0; i < n; i++){
        shuffled.push(half1[i])
        shuffled.push(half2[i])
    }
    return shuffled
    

    //Way over complicated. Got easier once I wrote pseudocode
    // const badlyShuffled = nums.map((num,i)=> nums[i] = `${nums[i]},${nums[i+n]}`)
    // for(let i = 1; i <= n; i++){
    //     badlyShuffled.pop()
    // }
    // console.log(badlyShuffled);
    // badlyShuffled.map((item)=>{
    //     const singles = item.split(',').join('')
    //     console.log(singles);
    //     wellShuffled.push(singles)
    // })
    // return shuffled
    // console.log(badlyShuffled);


    //even easier
    // let shuffled = []
    // for(let i = 0; i < n; i++){
    //     shuffled.push(nums[i],nums[i+n])
    // }
    // return shuffled
}

console.log(shuffle(nums,2))

 

