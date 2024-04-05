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


// console.log(twoSum(nums,6))


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



////////////////
// 2/19/24
////////////////

// DATAANNOTATION.TECH Challenges
//SOLVED

// In this exercise, you will develop a function named decode(message_file). This function should read an encoded message from a .txt file and return its decoded version as a string.

// Note that you can write your code using any language and IDE you want (Python is preferred if possible, but not mandatory).

// Your function must be able to process an input file with the following format:

// 3 love
// 6 computers
// 2 dogs
// 4 cats
// 1 I
// 5 you
// In this file, each line contains a number followed by a word. The task is to decode a hidden message based on the arrangement of these numbers into a "pyramid" structure. The numbers are placed into the pyramid in ascending order, with each line of the pyramid having one more number than the line above it. The smallest number is 1, and the numbers increase consecutively, like so:

//   1
//  2 3
// 4 5 6
// The key to decoding the message is to use the words corresponding to the numbers at the end of each pyramid line (in this example, 1, 3, and 6). You should ignore all the other words. So for the example input file above, the message words are:

// 1: I
// 3: love
// 6: computers
// and your function should return the string "I love computers".

// simple test
let message = ['3 love','6 computers','2 dogs','4 cats','1 I','5 you']

// true test case
let bigMessage = [
    "244 land",
    "203 sun",
    "190 too",
    "49 huge",
    "291 dont",
    "296 such",
    "202 noun",
    "114 student",
    "181 brown",
    "164 complete",
    "157 play",
    "87 cook",
    "183 yard",
    "236 clock",
    "161 would",
    "160 plain",
    "91 excite",
    "257 fire",
    "103 wish",
    "255 cool",
    "206 child",
    "109 past",
    "129 colony",
    "196 oil",
    "128 dog",
    "189 back",
    "24 money",
    "165 kind",
    "40 open",
    "141 finger",
    "6 touch",
    "242 are",
    "231 dad",
    "122 am",
    "74 modern",
    "169 meant",
    "258 ocean",
    "15 pitch",
    "233 suit",
    "251 town",
    "11 east",
    "69 over",
    "256 group",
    "78 good",
    "286 kind",
    "14 down",
    "51 band",
    "96 especially",
    "192 organ",
    "112 of",
    "243 fire",
    "140 out",
    "105 area",
    "107 touch",
    "32 happen",
    "45 sat",
    "23 electric",
    "46 wrote",
    "283 buy",
    "241 lot",
    "226 stop",
    "77 corn",
    "168 where",
    "297 check",
    "16 live",
    "2 best",
    "237 hold",
    "250 cause",
    "101 grand",
    "100 present",
    "130 indicate",
    "8 counter",
    "21 we",
    "66 like",
    "36 visit",
    "240 state",
    "147 morning",
    "228 true",
    "93 are",
    "184 ball",
    "217 history",
    "207 seat",
    "52 rain",
    "135 less",
    "268 glass",
    "239 tone",
    "289 song",
    "288 fair",
    "55 element",
    "272 speed",
    "299 produce",
    "152 quotient",
    "170 sand",
    "172 begin",
    "115 moment",
    "198 offer",
    "163 probable",
    "195 all",
    "90 necessary",
    "30 post",
    "89 cent",
    "260 happen",
    "106 speech",
    "259 object",
    "248 silver",
    "148 third",
    "273 crease",
    "26 wait",
    "188 triangle",
    "277 idea",
    "187 clothe",
    "178 young",
    "33 discuss",
    "191 field",
    "222 company",
    "179 capital",
    "204 compare",
    "199 chart",
    "35 possible",
    "31 written",
    "97 remember",
    "276 mile",
    "118 cold",
    "102 lady",
    "3 felt",
    "290 against",
    "232 skin",
    "76 prepare",
    "79 he",
    "274 card",
    "123 organ",
    "98 object",
    "201 our",
    "279 major",
    "41 discuss",
    "70 system",
    "205 hole",
    "92 above",
    "17 they",
    "65 produce",
    "95 straight",
    "4 level",
    "263 though",
    "82 modern",
    "85 dry",
    "27 bought",
    "43 milk",
    "252 make",
    "133 show",
    "227 middle",
    "42 center",
    "83 blood",
    "54 speak",
    "159 prove",
    "80 select",
    "247 power",
    "143 come",
    "104 brown",
    "208 experiment",
    "13 strong",
    "116 hurry",
    "19 touch",
    "224 reach",
    "84 case",
    "44 beat",
    "173 over",
    "175 dry",
    "47 hill",
    "67 company",
    "120 opposite",
    "280 work",
    "167 field",
    "246 felt",
    "139 prepare",
    "99 now",
    "262 his",
    "81 stay",
    "12 toward",
    "298 observe",
    "253 time",
    "154 stop",
    "71 possible",
    "225 card",
    "38 prepare",
    "113 current",
    "126 compare",
    "156 neighbor",
    "197 thus",
    "278 include",
    "177 copy",
    "48 bit",
    "166 stead",
    "200 does",
    "282 general",
    "144 solve",
    "110 glad",
    "275 duck",
    "281 offer",
    "219 happen",
    "56 ball",
    "223 bread",
    "287 like",
    "171 machine",
    "149 come",
    "294 any",
    "22 band",
    "292 it",
    "134 section",
    "94 close",
    "50 heavy",
    "53 produce",
    "25 got",
    "213 possible",
    "64 insect",
    "125 way",
    "261 before",
    "285 men",
    "295 bird",
    "59 ease",
    "284 trade",
    "249 winter",
    "137 am",
    "150 repeat",
    "216 first",
    "185 to",
    "138 each",
    "61 guide",
    "267 column",
    "72 single",
    "235 remember",
    "60 wild",
    "230 major",
    "63 coast",
    "229 class",
    "220 done",
    "271 jump",
    "57 sister",
    "221 feel",
    "180 check",
    "39 fire",
    "7 nine",
    "212 indicate",
    "153 parent",
    "146 whole",
    "211 her",
    "151 the",
    "10 temperature",
    "29 design",
    "270 big",
    "186 skill",
    "62 friend",
    "5 hit",
    "234 wait",
    "34 instant",
    "264 blow",
    "58 about",
    "124 chick",
    "215 answer",
    "37 man",
    "158 material",
    "155 current",
    "136 think",
    "142 print",
    "193 nor",
    "121 better",
    "20 example",
    "68 people",
    "9 drink",
    "88 gun",
    "218 together",
    "176 cost",
    "145 require",
    "245 or",
    "111 people",
    "75 planet",
    "28 ease",
    "238 ready",
    "269 enough",
    "254 sugar",
    "214 deal",
    "182 with",
    "108 us",
    "209 share",
    "119 office",
    "127 protect",
    "265 low",
    "210 thus",
    "1 farm",
    "174 oxygen",
    "73 fire",
    "86 force",
    "293 select",
    "117 paragraph",
    "266 always",
    "132 poem",
    "18 chick",
    "131 planet",
    "194 fact",
    "162 moment",
    "300 term"
]


// This train of thought gets the contents of txt file, but we can prove Decode works without this feature.
// async function logText(){
//     const response = await fetch('/244 land.txt')
//     const theBody = await response.text()
//     console.log(theBody);
//     const theLine = theBody.split('\r\n')
//     console.log(theLine);
//     return theLine
// }

// logText()
// let message2 = logText()
// console.log(message2);





/////
//Possibly useful func
///////
// function pyramidFunc(num){
//     return (num*(num+1))/2
// }

let message3 = ['4 mizu','99 oto','3 this','5 kaminari','2 mizu','1 think','6 should','8 oto','7 kaminari','10 work','11 huh?', '12 poke', '13 bleep', '148 cash', '15 I think']


// Completed rough version
function decode(arr){
    let decodedArr = []

    //need function that sorts array by number appearing in element
    // let primeSort = arr.sort((a,b)=>a.localeCompare(b))
    // console.log(primeSort);
    function trueSort(words){
        let sorted = [];
        words.forEach((word)=>{
            let pos = (word)=>{
                for(let i = 0;i < word.length;i++){
                    if(!isNaN(word.charAt(i)) && !(word.charAt(i) === '')){
                        if(!isNaN(word.charAt(i+1)) && !(word.charAt(i+1) === '')){
                            if(!isNaN(word.charAt(i+2)) && !(word.charAt(i+2) === '')){
                                return `${word[0]}${word[1]}${word[2]}`
                            } else return `${word[0]}${word[1]}`
                        } else return `${word[0]}`
                    } else return ''
                }
            }
            sorted[pos(word)-1] = word
        }) 
        // console.log(sorted);
        return sorted
        // return sorted.toString().split(',').join(' ').replaceAll(/\d/g,'')
    }

    let primeSort = trueSort(arr)
    console.log(primeSort);

    //loop that ejects 1 element from primeSorted to decodedArr then increases the number of ejected elements until all elements ejected, also sanitizes numbers from each element

    let j = 1
    while(primeSort[0]){
        // let length = primeSort.length
        // console.log(length);
        // console.log(`${j}`);
        // let j = 1
        decodedArr.push(primeSort.splice(0,j).pop().slice(2))
        // decodedArr.push(primeSort.splice(0,1))
        // console.log(peak1);
        // console.log(primeSort)
        j++
    }

    // let peak1 = primeSort.slice(0,1)
    // let peak2 = primeSort.slice(1,3)
    // let peak3 = primeSort.slice(3,6)

    

    //func that puts last element in each ejected array into new array with no numbers
    // let peak1pop = peak1.pop().slice(2)
    // let peak2pop = peak2.pop().slice(2)
    // let peak3pop = peak3.pop().slice(2)

    //print result
    // console.log(decodedArr.join(' '));
    const sani = decodedArr.join(' ')
    return sani.split(',').join(' ').replaceAll(/\d/g,'')
}
// Decode(message)




/////////////
//CLEANED ALL UNECESSARY PSUEDO CODE, LEFT COMMMENTS 
//////////////
function decode2(arr){
    let decodedArr = []
    //need function that sorts input array by the number appearing in element
    function trueSort(words){
        let sorted = [];
        words.forEach((word)=>{
            let pos = (word)=>{
                for(let i = 0;i < word.length;i++){
                    //checks if first char is num
                    if(!isNaN(word.charAt(i)) && !(word.charAt(i) === '')){
                        //checks if second char is num
                        if(!isNaN(word.charAt(i+1)) && !(word.charAt(i+1) === '')){
                            //checks if third char is num(only allows input array up to 999 elements in theory)
                            if(!isNaN(word.charAt(i+2)) && !(word.charAt(i+2) === '')){
                                return `${word[0]}${word[1]}${word[2]}`
                            } else return `${word[0]}${word[1]}`
                        } else return `${word[0]}`
                    } else return ''
                }
            }
            // pushes each word into sorted array in numerical order
            sorted[pos(word)-1] = word
        }) 
        //returns sorted array with numbers
        return sorted
    }

    let primeSort = trueSort(arr)

    //loop that ejects 1 element from primeSorted to decodedArr then increases the number of ejected elements until all elements ejected
    let j = 1
    while(primeSort[0]){
        decodedArr.push(primeSort.splice(0,j).pop().slice(2))
        j++
    }
    const sani = decodedArr.join(' ')
    //sanitizes any loose numbers, preserving order and returns string
    return sani.split(',').join(' ').replaceAll(/\d/g,'')
}

// console.log(decode2(bigMessage))



////////////////
// 3/3/24
////////////////
// Caught Covid :( Took a small break but we back at it.
// Doing most 100Devs stuff here for now. Trying to get through the remaining classes so I can just focus on 100hrs prj.


class NeflixShow{
    constructor(title,numOfSeasons,epsPerSeason,rating){
        this.title = title
        this.numOfSeasons = numOfSeasons
        this.epsPerSeason = epsPerSeason
        this.rating = rating
    }
    list(){
        console.log(`${this.title} has been added to your list!`)
    }
    unlist(){
        console.log(`${this.title} has been removed from your list!`)
    }
    userRating(bool){
        if(bool){
            console.log('Great! We\'ll send you more like this!')
        } else console.log('Okay. We won\'t suggest shows like this.')
    }
}

const waterfalls = new NeflixShow('Waterfalls',1,12,3.2)

// console.log(waterfalls.epsPerSeason)
// console.log(waterfalls.list())
// console.log(waterfalls.userRating(false))


// Class 27: APIs, Card Game
// Class 28: Professional Checklist, DnD API, Book API
// Class 29: Js review
// Class 30: Encapsulation, Abstraction
// Class 31: Inheritance, Polymorphism

class Proj{
    constructor(fileName, fileSize){
        this.fileName = fileName
        this.fileSize = fileSize
    }
    describe(){
        return `${this.fileName} is a ${this.fileType} file that is ${this.fileSize}Mb`
    }
}

class KoalaFile extends Proj{
    constructor(fileName,fileSize){
        super(fileName,fileSize)
        this.fileType = 'Koala'
    }
}

const intro = new KoalaFile('Intro',32)


////////////
// 3/6/24
////////////

// Promises..

function plus(){
    return new Promise((resolve,reject)=>{
        setTimeout(_=>{
            console.log('iz true')
            const error = true

            if(!error){
                resolve()
            } else {
                reject('this is in the err obj?')
            }

        },3000)
    })
}

function isTrue(){
    setTimeout(_=>{console.log(2*2)},1000)
}

function isFalse(obj){
    if(obj){
        return 3*7
    } return 5*4
}

// plus()
//     .then(isTrue)
//     .catch(err => console.log(err))


////////////
// 3/9/24
////////////


// From Js.info Async/Await 
///////////
// Rewrite as async/await
///////////

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404

// async function loadJson(url){
//     let response =  await fetch(url)
//     if(response.status === 200){
//         return response.json()
//         // missing following lines
//         // let json = await response.json()
//         //  return json
//     } else {
//         throw new Error(response.status)
//     }
// }

// loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert);



///////////
// Rewrite as async/await
///////////

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
}
  
// async function loadJson(url) {
//     let res = await fetch(url)
//     if (res.status == 200) {
//         let json = await res.json()
//         return json
//     } else {
//         throw new HttpError(res);
//     }
// }

  
// Ask for a user name until github returns a valid user
// async function demoGithubUser() {
//     // had to copy solution
//     let user;
//     while(true){
//         let name = prompt("Enter a name?", "iliakan")
//         try{
//             user = await loadJson(`https://api.github.com/users/${name}`)
//             break
//         } catch(err){
//             if (err instanceof HttpError && err.response.status == 404) {
//                 alert("No such user, please reenter.")
//             } else {
//                 throw err;
//             }
//         }
//     }

//     alert(`Full name: ${user.name}.`)
//     return user
// }
  
// demoGithubUser()
    // .catch(err => {
    //     if (err instanceof HttpError && err.response.status == 404) {
    //         alert("No such user, please reenter.");
    //         return demoGithubUser();
    //     } else {
    //         throw err;
    //     }
    // })

///////////
// Rewrite as async/await
///////////

// We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     return 10;
//   }
  
//   function f() {
//     // didnt over think this, it was pretty easy
//     wait().then(result => {
//         console.log(result)
//     })

//   }

//   f()


///////////////
// Scratch Pad
///////////////

