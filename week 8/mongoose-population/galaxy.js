const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/galaxy", {useNewUrlParser: true,}).catch((err)=> console.log(err))

const systemSchema = new Schema({ 
    starName: String,
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}] 
  })
  
  
const planetSchema = new Schema({ 
    name: String,
    system : {type: Schema.Types.ObjectId, ref: 'System'},
    visitors :  [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
  })

  const visitorSchema = new Schema({ 
    name: String,
    homePlanet  : {type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets  :  [{type: Schema.Types.ObjectId, ref: 'Planet'}]
  })  

const System = mongoose.model("System", systemSchema)
const Planet = mongoose.model("Planet" ,planetSchema )
const Visitor = mongoose.model("Visitor", visitorSchema)

let system1 = new System({
    starName : "starName1",
    planets : [],
})

let planet1 = new Planet({
    name : "planet1name",
    system : system1,
    visitors : [], 
})

let planet2 = new Planet({
    name : "planet2name",
    system : system1,
    visitors : [], 
})

let visitor1 = new Visitor({
    name : "Visitor1 Name ",
    homePlanet  : planet1,
    visitedPlanets : [],
})
let visitor2 = new Visitor({
    name : "Visitor2 Name ",
    homePlanet  : planet1,
    visitedPlanets : [],
})

// system1.planets.push(planet1)
// system1.planets.push(planet2)
// planet1.visitors.push(visitor1)
// planet1.visitors.push(visitor2)
// visitor1.visitedPlanets.push(planet1)
// visitor1.visitedPlanets.push(planet2)

// system1.save()
// planet1.save()
// planet2.save()
// visitor1.save()
// visitor2.save()

//Find a visitor’s list of visited planets

// Visitor.findOne({})
//     .populate('visitedPlanets homePlanet')
//     .exec()
//     .then(planet => {
//         console.log(planet)
//     })

//Find all the visitors on a planet
//Planet.findOne({}).populate('visitors').exec().then(vistiors => console.log(vistiors))

//Find all the visitors in a system (subdocuments!)
// System.findOne({})
//     .populate(
//       {
//         path: 'planets',
//         populate: {
//             path: 'visitors',
//             populate: {
//                 path: 'name',
               
//             }
//         }
//       }
//     )
//     .exec()
//     .then(system => {
//         console.log(system);
//     })