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