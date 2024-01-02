const express = require('express')
const router = express.Router()

const Person = require('../../models/Person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})
router.post('/person', function (req, res) {
    let p1 = new Person(req.body)
    console.log(req.body) 
    p1.save()
    .then(savedPerson => {
        res.send(savedPerson)
    })
    .catch(err => {
        res.status(500).send("Error saving person: " + err.message)
    })
})


router.put('/person/:id', function (req, res) {
    console.log(req.params)
    Person.findByIdAndUpdate(req.params.id, { age: 80 }, { new: true }).then( function (person) {
        res.send(person)
    })
})


router.delete('/apocalypse', function (req, res) {
    Person.find({})
        .then(people => {
            const deletionPromises = people.map(person => {
                return person.deleteOne();
            });

            return Promise.all(deletionPromises);
        })
        .then(deletedData => {
            console.log(deletedData)
            res.send("All data deleted from 'people' collection");
        })
        .catch(err => {
            console.error(err); // Log the error for debugging
            res.status(500).send("Error deleting data: " + err.message);
        });
});





module.exports = router