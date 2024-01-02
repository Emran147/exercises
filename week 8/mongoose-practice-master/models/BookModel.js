const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    genres: [{
        type: String
    }],
    rating: {
        type: Number
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
