var validator = require('validator');
const { faker } = require('@faker-js/faker');

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail('shoobert@dylan')) //=> true


//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

console.log(validator.isMobilePhone('786-329-9958'))

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text,blacklist).toLowerCase())





const makeHuman = function(number){
    const people =[]
  //  console.log(faker.person)
    for (let index = 0; index < number; index++) {
            let personObj={
            name : faker.person.fullName(),
            companyName : faker.company.name(),
            img : faker.image.avatar(),
        }
        people.push(personObj) 
    }
    console.log(people)

}
makeHuman(3)
