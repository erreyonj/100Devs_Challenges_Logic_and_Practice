//Create a mouse object that has four properties and three methods

const poke = {
    name: 'Pikachu',
    type: 'electric',
    color: 'yellow',
    attacks: 1,
    power: 'thunderbolt',

    attack: function(){
        console.log(`${this.name} use ${this.power}!!`)
    },
    pokeColor: function(){
        console.log(`${this.name} is ${this.color}`);
    },
    pokeType: function(){
        console.log(`${this.name} is an ${this.type} type`);
    }
}

poke.attack()
poke.pokeColor()
poke.pokeType()


function Pokemon(name,type,color,power){
    this.name = name
    this.type = type
    this.color = color
    this.attacks = 1
    this.power = power
    this.attack = function(){
        console.log(`${this.name} use ${this.power}!!`)
    },
    this.pokeColor = function(){
        console.log(`${this.name} is ${this.color}`)
    },
    this.pokeType = function(){
        console.log(`${this.name} is ${this.type} type`)
    }
}

const salamence = new Pokemon('Salamence','Dragon','Blue and Red','Dragon Claw')

salamence.attack()
salamence.pokeColor()
salamence.pokeType()

salamence.lv = 100

Pokemon.prototype.exp = 5000

console.log(salamence);
console.log(salamence.exp);