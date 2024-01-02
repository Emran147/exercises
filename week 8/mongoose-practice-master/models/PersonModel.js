const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    hair: String,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids: {
        type: [Schema.Types.ObjectId],
        ref: 'Person' // Reference to the Person model for self-referencing (if applicable)
    }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
