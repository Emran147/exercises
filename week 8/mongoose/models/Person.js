const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)

module.exports = Person