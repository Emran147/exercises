let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]


//                                                     normal loop 
// let olderThan16 = []
// for(let age of ages){
//   if(age > 16){
//     olderThan16.push(age)
//   }
// }

//                                                   filter

// let olderThan16 = ages.filter(a => a > 16)


// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]


// let orangeVegetables = vegetables.filter(v => v.color=="orange")


// //                                    foreach

// orangeVegetables.forEach(ov => console.log(ov.name))



// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]

// const updateSalary = function(person){
//     if(person.goodPerformance)
//     person.salary+=300
// }

// people.forEach(updateSalary)

// people.forEach(p => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)



// ///                                     map


// let poundWeights = [142, 180, 178, 121, 132]

// let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
// console.log(kiloWeights) //prints [65, 82, 81, 55, 60]


// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

// let calmMessages = messagesFromDad.map(m => m.toLowerCase())

// calmMessages.forEach(o=>console.log(o))



// let users = [
//     {
//     "name": "Leanne Graham",
//     "address": {
//         "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
//         "geo": { "lat": "-37.3159", "lng": "81.1496" }
//     }
// }, {
//     "name": "Ervin Howell",
//     "address": {
//         "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
//         "geo": { "lat": "-43.9509", "lng": "-34.4618" }
//     }
// }
// ]

// users.map(u => { return { name: u.name, city: u.address.city } })







//                                                              Find

// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]


// const findById = id => posts.find(p => p.id === id)
// console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}


// const findCommentByID= function(postID, commentID){
//     let post = posts.find(p => p.id === postID)
//     return post.comments.find(c => c.id == commentID)
// }

// console.log(findCommentByID(1, 0))


//                           some/every 

// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]


// const isthereMarvel = movies.some(m=>m.studio=="Marvel")
// if(isthereMarvel)
// console.log(`Let’s go watch some movies`)
// else{
//     console.log(`Let’s stay home`)
// }
// const isAfter20 = movies.every(m=>m.year>2020)
// if(isAfter20){console.log(`Futuristic stuff`)}
// else{
//     console.log(`Yawn`)
// }

//                                             filter and map 

// let countries = [
//     { name: "Greece", population: 500 },
//     { name: "Namibia", population: 1200 },
//     { name: "Finland", population: 100 },
//     { name: "Switzerland", population: 300 },
//     { name: "Peru", population: 200 }
// ]

// let smallCountries =
//     countries
//         .filter(c => c.population < 500)
//         .map(c => c.name)



