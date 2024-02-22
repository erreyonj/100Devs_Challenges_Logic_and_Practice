//Create a dog object that has four properties and three methods

const dog = {}
dog.name = 'Tuna'
dog.color = 'tan'
dog.age = 3
dog.breed = 'chihuahua'
dog.bark = function(){
    console.log('woof!');
}
dog.eat = function(){
    console.log('munch, munch, nom, nom, nom!');
}
dog.sleep = function(){
    console.log('zzzzzzz...zzzzzzzz....');
}

// dog.sleep()

function Doggy(name, color, age, breed){
    this.name = name
    this.color = color
    this.age = age
    this.breed = breed
    this.bark = function(){
        console.log('woof!')
    }
    this.eat = function(){
        console.log('nom...nom...nom!')
    }
    this.sleep = function(){
        console.log('zzz..zzzz...zzzzz')
    }
}