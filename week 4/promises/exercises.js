//Ex1 
// const wordPromise = $.get("https://random-word-api.herokuapp.com/word");
// wordPromise.then((wordPromiseData) => {
//     const randomWord = wordPromiseData[0]; 
//     console.log("The word from the Words API is: " + randomWord);
//     const googleBookPromise = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${randomWord}`);
//     googleBookPromise.then((googleBooksPromiseData) => { 
//         let booksArray = googleBooksPromiseData.items || [];
//         booksArray.forEach(book => {
//             let bookName = book.volumeInfo.title;
//             if (bookName.toLowerCase().includes(randomWord.toLowerCase())) {
//                 console.log(bookName);
//             } else {
//                 console.log("The book title does not contain the word.");
//             }
//         });
//     });
// });







const getGif = function(){
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=nGpXyhX2xMKqWEE0RKP8bz27Jqdrs88g&limit=5");
}


const showGifs = function(response){
    var gifs = response.data
    gifs.forEach(function(gif) {
        var img = document.createElement("img")
        img.src = gif.images.fixed_height.url
        document.body.appendChild(img)
    })
}



const  getRandomWord = function () {
    return $.get("https://random-word-api.herokuapp.com/word");
}
const searchBooksByWord = function (word) {
    return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
}
const checkBookTitlesForWord = function (books, word) {
    books.forEach(book => {
        let bookName = book.volumeInfo.title
        if (bookName.toLowerCase().includes(word.toLowerCase())) {
            console.log(bookName)
        } else {
            console.log("The book title does not contain the word.")
        }
    });
}
getRandomWord().then(wordPromiseData => {
    const randomWord = wordPromiseData[0]
    console.log("The word from the Words API is: " + randomWord);
    searchBooksByWord(randomWord).then(googleBooksPromiseData => { 
        let booksArray = googleBooksPromiseData.items || []
        checkBookTitlesForWord(booksArray, randomWord)
       // getGif().then(data =>{showGifs(data)})
    })
})