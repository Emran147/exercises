

//ex1


// const fetch = function(){
//   let inputValue=$("#input").val()
//   $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${inputValue}`, function(books){
//     console.log(books)
//     console.log(`${books.items[0].volumeInfo.title}`) 
//   })
// }


//ex2

// const fetch = function(dataType,dataVal)
// {
    
//   if(dataType=="isbn")
//   {
//         $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${dataVal}`, function(books){
//       console.log(`${books.items[0].volumeInfo.title}`) 
      
//     })
//   }
//   else{
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=${dataVal}`, function(books){
//       console.log(`Book By :  ${books.items[0].volumeInfo.authors}`) 
//     })
//   }

// }

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")



//ex 3 


// const fetch = function(dataType,dataVal)
// {
    
//   if(dataType=="isbn")
//   {
//      $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${dataVal}`, function(books){
//        books.items.forEach( b => console.log(b.volumeInfo.title))                  
//        })
//   }
//   else{
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=${dataVal}`, function(books){
//       books.items.forEach( b => console.log(b.volumeInfo.title))                  
//       })
//   }

// }

// fetch("isbn", 9780307417138)

//users.forEach(u=>console.log(`${u.name} lives in ${u.address.city}, and owns the company ${u.company.name}`))


//ex 4

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=nGpXyhX2xMKqWEE0RKP8bz27Jqdrs88g&limit=5");
xhr.done(function(data) {
  console.log(data.data[0].url)

  $("body").append(`<iframe src="${data.data[0].url}" title="description"></iframe>`)

});



