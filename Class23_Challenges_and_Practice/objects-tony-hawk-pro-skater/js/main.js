//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function Skater(name, sponsor, bestTrick, age){
    this.name = name
    this.sponsor = sponsor
    this.bestTrick = bestTrick
    this.age = age

    this.roll = function(){
        console.log(`${this.name} kicked off!`)
    }
    this.doTrick = function(){
        console.log(`${this.name} did a ${this.bestTrick}!!`)
    }
    this.trickLand = function(){
        const landed = Math.random()
        this.skillLv > landed ? console.log(`Nice! ${this.name} landed that last trick!`) : console.log(`Awww, ${this.name} wiped out!`) 
    }
    this.describe = function(){
        console.log(`This is ${this.name}! He\'s a ${this.age} year old skater sponsored by ${this.sponsor}. His best trick is a ${this.bestTrick}`)
    }
}

const erre = new Skater('erre','Zephyr','900',30)

console.log(erre.describe())
Skater.prototype.skillLv = .8

console.log(erre.skillLv)
erre.trickLand()
erre.trickLand()
erre.trickLand()
erre.doTrick()

