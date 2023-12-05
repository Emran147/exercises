class DataManger{
    constructor(){
        this.data = this.getFromDB()
    }

    getFromDB(){
        // some code that gets data from the DB
    }

    addData(data){
        // code that saves the new piece of data to the DB
    }
}

class LuxuryFeeder {

    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}


class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = feeder.getFood(this.type)
        this._consume(food)
    }
}


const bumdo = new Animal("Bumdo", "elephant")
bumdo.eat()