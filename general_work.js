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
// BRILLIANT BLACK MINDS, LEETCODE
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

// const nums = [1,1,2,2]

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

// console.log(shuffle(nums,2))

 

////////////////
// 2/16/24
////////////////

///////////
// BRILLIANT BLACK MINDS, LEETCODE
////////////

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//Pseudo
// Need to compare the sum of nums[0] to nums[1...nums.length]
// if target occurs then stop, if not start same process but
// using nums[1] compared to nums[2...nums.length]
// repeat until target is matched
// this will likely give you just the elements that add to equal
// target
// you would then have to use indexOf() on nums, push those
// indices to ans = []

const nums = [3,3] //target = 6

let twoSum = function(nums, target) {
    let ans = []
    let extCounter = 0
    let extCounter2 = 0
    for(let i=0; i< nums.length; i++){
        //only checks in sequential order, how to check 0 vs 2???
        if(nums[extCounter]+nums[i+1]!== target){
            extCounter++
        } else ans.push(extCounter,i+1)
    }
    return ans
}


console.log(twoSum(nums,6))


/////// GRABBED SOLUTION ////////
// Need to study and review this
// my original was close to brute force style solution

var twoSum2 = function(nums, target) {
    const numToIndex = {};
    
    // First pass: Populate the object
    for (let i = 0; i < nums.length; i++) {
        numToIndex[nums[i]] = i;
    }
    
    // Second pass: Check for the complement
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numToIndex && numToIndex[complement] !== i) {
            return [i, numToIndex[complement]];
        }
    }
    
    return [];
};