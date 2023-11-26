

////ex1+2

// const showValue = function(){
//     const dynamicH1 = `<h1> ${ $('#my-input').val()}</h1>`
//     const elem = $(dynamicH1)
//     $("body").append(elem)
// }
// $("button").on("click", showValue)
//  $("body").on("click", "h1", function() {
//     $(this).remove()
//  });


////ex3


//  const firstDiv = "<div class='box' id='first'></div>"
//  const elem = $(firstDiv)
//  $("body").append(elem)
//  const secondDiv = "<div class='box' id='second'> </div>"
//  const elem2 = $(secondDiv)
//  $("body").append(elem2)

//  $("#first").mouseenter(function(){
//    elem2.css("background-color", "orange")
// })
// $("#second").mouseenter(function(){
//     elem.css("background-color", "orange")
//  })
//  $("#first").mouseout(function(){
//     elem2.css("background-color", "#8e44ad")
//  })
//  $("#second").mouseout(function(){
//      elem.css("background-color", "#8e44ad")
//   })



//Exercise 4

// const clicked = function () {
//    if($(this).data().instock==true) 
//    {
//       let divCopy = `<h1> ${$(this).text()} </h1>`
//     $("body").append(divCopy)
//    }
//   } 
//  $('.item').click(clicked)


// //Exercise 5
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]

//   for(let fruit of fruits){
//   $("#basket").append(`<div style="color:${fruit.color}">${fruit.name}</div>`)
  
// }


