const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/myDB", {useNewUrlParser: true,}).catch((err)=> console.log(err))


const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address : {
      city : String,
      street: String,
      apartment : Number
    }
  })

  const Person = mongoose.model('person', personSchema)

  let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) 
  let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
  let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
  let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
  let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })
  

//   let allTheShooberts = [p1, p2, p3, p4, p5]
//   allTheShooberts.forEach(s => s.save())



// let peoplePromise = Person.find({})

// peoplePromise.then(function (people) {
//     console.log(people)
// })
// .catch((err)=>console.log(err))


// Person.findByIdAndUpdate("659167bc7049864375604bd2", { age: 70 }, { new: true }).then( function (person) {
//     console.log(person)
// })


Person.findByIdAndRemove("659167bc7049864375604bd2")

