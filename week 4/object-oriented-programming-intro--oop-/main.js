// class human {
//     constructor(name,id,isFriendly){
//         this.name=name;
//         this.id=id
//         this.isFriendly=isFriendly
//     }
//     greeting(){
//         console.log("hi " + this.name)
//     }
// }


// const h1 = new human('emran',123)
// const h2 = new human('emran2',132)
// h1.greeting()
// const h3 = new human('emranoshka',123,true)
// console.log(`this human name ${h3.name} and his id is ${h3.id} and he is ${h3.isFriendly} friendly`)

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const cat = new Animal("Puss", 4)
// const dog = new Animal("georgy", 4)

// console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"
// console.log(dog.name + " has " + dog.numLegs + " legs") //prints "georgy has 4 legs"


// class vichle {

//     constructor(x,y,speed){
//         this.x=x
//         this.y=y
//         this.speed=speed
//     }

//     getInfo(){
//         console.log('Cars are great')
//     }

// }



class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}

class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const cat = new Animal("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(cat) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"

//write your code here to make the tests pass

class Document { 
     
    constructor()
    {
      this.EmplyeeName =   EmplyeeName 
    
    }

}

class Employee {
    
    constructor(){
        this.name = name
    }

    work(Office){

        Office.documents.push()
    }
}


class Manager {

    constructor(){
        this.employees=[{}]
        this.name=name
    }
    hireEmployee(name){
        this.employees.push(name)
    }
    askEmployeesToWork(Office){
        Office.startWorkDay
    }
}

class Cleaner {

    constructor(){
       this.name=name
    }
    clean(){
        console.log('clean')
    }


}

class Office {
    constructor(){
       this.documents=[]
       this.Managers=[]
       this.cleaners=[]
    }
    hireCleaner(name){
        this.cleaners.push(name)
    }
    hireManager(name){
        this.Managers.push(name)
    }
    startWorkDay(){
        Employee.work()
        Cleaner.clean()
    }


}


