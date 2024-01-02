const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/population-test", {useNewUrlParser: true,}).catch((err)=> console.log(err))


const bookSchema = new Schema({ 
  title: String,
  author: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}] //reference to an array of Review documents
})

const reviewSchema = new Schema({ 
  book: {type: Schema.Types.ObjectId, ref: 'Book'}, //reference to a Book document
  reviewText: String,
  critic: {type: Schema.Types.ObjectId, ref: 'Critic'} //reference to a Critic document
})

const criticSchema = new Schema({ 
  name: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}], //reference to an array of Review documents
})


const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)


let b1 = new Book({
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  reviews: []
})

let c1 = new Critic({
  name: "William Jeffery",
  reviews: []
})

let r1 = new Review({
  book: b1,
  critic: c1,
  reviewText: "good Book"
})
let r2 = new Review({
  book: b1,
  critic: c1,
  reviewText: "bad  Book"
})
let r3 = new Review({
  book: b1,
  critic: c1,
  reviewText: "very good   Book"
})


// b1.reviews.push(r1)
// c1.reviews.push(r1)
// b1.reviews.push(r2)
// c1.reviews.push(r2)
// b1.reviews.push(r3)
// c1.reviews.push(r3)

// b1.save()
// c1.save()
// r1.save()
// r2.save()
// r3.save()

// let books =Book.find({})

// books.then(function(booksData){
//   console.log(booksData)
// })

// let reviews = Review.find({})
// reviews.then(function(reviews){
// console.log(reviews)
// })


// Book.findOne({})
//     .populate(
//       {
//         path: 'reviews',
//         populate: {
//             path: 'critic'
//         }
//       }
//     )
//     .exec()
//     .then(book => {
//         console.log(book.reviews);
//     })

// Review.findOne({})
//     .populate('book critic')    
//     .exec()
//     .then(review => {
//         console.log(review);
//     })

// Critic.findOne({}).populate('reviews')
//   .then(critic => {
//     console.log(critic.reviews);
//   })

  // Book.findOne({}).populate('reviews')
  // .then(Book => {
  //   console.log(Book.reviews);
  // })

