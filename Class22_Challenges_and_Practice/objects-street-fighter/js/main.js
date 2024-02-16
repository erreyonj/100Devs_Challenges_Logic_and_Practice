//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name,hp,atk,spd){
    this.name = name
    this.hp = hp
    this.atk = atk
    this.spd = spd
    this.lightPunch = function(target){
        console.log(`${this.name} hit ${target.name} and they lost ${this.atk/2} hp!`)
    }
    this.punch = function(target){
        console.log(`${this.name} hit ${target.name} and they lost ${this.atk} hp!`)
    }
    this.heavyPunch = function(target){
        console.log(`${this.name} hit ${target.name} and they lost ${this.atk*2} hp!`)
    }
}

const ryu = new StreetFighter('Ryu',100,20,100)
const ken = new StreetFighter('Ken',100,25,100)

ryu.lightPunch(ken)
ken.heavyPunch(ryu)
