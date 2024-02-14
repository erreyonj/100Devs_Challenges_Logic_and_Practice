//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


//Not quite right on this first line
const Ibuki = new Fighter (hp,spd,pow,name)=>{
    this.NAME = name
    this.HP = hp
    this.SPD = spd 
    this.POW = pow
    this.METER = 0
    this.HASSUPER = false
    this.punch = (target)=>{
        if (target.HP > 0){
           const DMG = this.POW
           console.log(`${this.name} punched ${target.NAME} for ${DMG} HP!`); 
           target.HP -= DMG
           if (target.HP > 0){
            console.log(`${target.NAME} has ${target.HP}left`);
           } 
           else {
            target.HP = 0 
            const meterUp = 20
            console.log(`${this.NAME} wins!`);
            this.METER += meterUp
           }
        } else{
            console.log(`${this.NAME} can\'t attack! Plyr2 WINS!`);
        }
    }
}
const ibuki = new Fighter(50,15,35, 'Ibuki')

console.log(ibuki);
