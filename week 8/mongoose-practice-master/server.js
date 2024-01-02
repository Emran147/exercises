/*=====================================================
Our Setup -
Feel free to ignore all of this and skip to the questions at the end
=======================================================*/
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

var request = require('request')
var mongoose = require('mongoose')
var Book = require("./models/BookModel")
var Person = require("./models/PersonModel")

mongoose.connect("mongodb://127.0.0.1:27017/mongoose-practice", {
  useNewUrlParser: true,
})
.then(()=>console.log("conneted to DB"))
.catch((err)=> console.log(err))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/*=====================================================
Create books Collection
=======================================================*/
var isbns = [9780156012195, 9780743273565, 9780435905484, 9780140275360, 9780756404741, 9780756407919, 9780140177398, 9780316769488, 9780062225672, 9780143130154, 9780307455925, 9781501143519]
var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:"

for (var i = 0; i < isbns.length; i++) {
  var apiURL = url + isbns[i];
  /*=====================================================
  the first time you run your code, uncomment the function below.
  for subsequent runs, re-comment it so that it runs only once!
  that said, there is a fail-safe to avoid duplicates below
  =======================================================*/
  loadFromAPI(apiURL)
}
console.log("done");

function loadFromAPI(apiURL) {

  request(apiURL, function(error, response, body) {

    var result = JSON.parse(body)

    if (result.totalItems && !error && response.statusCode == 200) {
      var resBook = JSON.parse(body).items[0].volumeInfo

      var book = new Book({
        title: resBook.title,
        author: resBook.authors ? resBook.authors[0] : '',
        pages: resBook.pageCount,
        genres: resBook.categories || ["Other"],
        rating: resBook.averageRating || 5
      })

      //Only save if the book doesn't exist yet
      Book.findOne({ title: book.title }).then( function(err, foundBook) {
        if (!foundBook) {
          book.save()
        }
      })
    }
  })
}


/*=====================================================
Create People Collection
=======================================================*/
var colors = ["brown", "black", "red", "yellow", "green", "grey"]
var getColor = function() {
  return colors[Math.floor(Math.random() * colors.length)]
}
var getWeight = function() {
  return getRandIntBetween(50, 120)
}
var getHeight = function() {
  return getRandIntBetween(120, 230)
}
var getSalary = function() {
  return getRandIntBetween(20000, 50000)
}
var getNumKids = function() {
  return Math.floor(Math.random() * 3)
}

var getRandIntBetween = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var getKids = function(numKids) {
  var kids = [];
  for (var i = 0; i < numKids; i++) {
    kids.push({
      hair: getColor(),
      eyes: getColor(),
      weight: getWeight(),
      height: getHeight(),
    })
  }
  return kids;
}


/*=====================================================
the below code always makes sure
you don't have over 100 people and
adds new people and their kids until you do have 100

try to understand how this code works
could you write it differently?
=======================================================*/
Person.find({}).count().then(function(err, count) {
  // the below two loops could be changed to a simple:
  // for (var i = count; i < 100; i++) {}
  if (count < 100) {
    for (var i = 0; i < 100 - count; i++) {
      var numKids = getNumKids();
      var p = new Person({
        hair: getColor(),
        eyes: getColor(),
        weight: getWeight(),
        height: getHeight(),
        salary: getSalary(),
        numKids: numKids,
        kids: getKids(numKids)
      });
      p.save();
    }
  }
})


/*=====================================================
Start the server:
=======================================================*/

app.listen(3000, function() {
  console.log("Server up and running on port 3000")
})


/*=====================================================
Exercises - now that your databases are full
and your server is running do the following:
=======================================================*/

//Important note: Once you've run the above code once, COMMENT IT OUT
//If you keep re-running this whole file, you'll keep making a ton of requests to the Books API and eventually you will get blocked.
//DON'T GET BLOCKED

/*Books
----------------------*/
//1. Find books with fewer than 500 but more than 200 pages

//2. Find books whose rating is less than 5, and sort by the author's name

//3. Find all the Fiction books, skip the first 2, and display only 3 of them


/*People
----------------------*/
//1. Find all the people who are tall (>180) AND rich (>30000)

//2. Find all the people who are tall (>180) OR rich (>30000)

//3. Find all the people who have grey hair or eyes, and are skinny (<70)

//4. Find people who have at least 1 kid with grey hair

//5. Find all the people who have at least one overweight kid, and are overweight themselves (>100)
