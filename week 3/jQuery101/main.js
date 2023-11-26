
// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//     return document.getElementById(elementId)
//         }
//     }  

//  console.log(myQuery("#test"))


//  const sayHi = function(){
//     console.log("Hi!")
//   }
  
//   const $ = sayHi
  
//   $() //prints "Hi!"



//                                        שינוי דרך הj    Query 
  
// $("h4")
// $("h4").css("color", "red")


// $("h1").css("background-color", "blue")
// $(".red-div").css("background-color", "red")
// $("li:first-child").css("background-color", "green")
// $("li:last-child").css("background-color", "pink")
// $("#brown-div").css("background-color", "brown")

//                                                                       הוספת שם קלאס לאלמינט קיים  

// $("#b1").addClass("box")
// $("#b2").addClass("box")
// אחרי זה אנחנו יכולים לעצב ב סיאסאסא את ה בוקס 


//                                                                                קליטת ערך 
//$('#my-input').val()
//$("#my-input").val("Terabyte")

//                                                                    שמירת תכונות אלימנט דרך אוביקט דאתא 
// const color = $("div").data().color  
// console.log(color) //prints #2980b9

// const barcode = $("#check").data().barcode
// const expiredate =  $("#check").data().expiredate
// console.log(`the item with barcode ${barcode} expire on ${expiredate}`) 



//                                                                   שימוש בפונקציות הספריה             spot check 6 

// const hoverEvent = function(){
//     $("#spotcheck6").css("background-color", "blue")
// }  
// $('#spotcheck6').hover(hoverEvent)

//spot check 7 

// const clicked = function () {
//     result = $('#my-input').val()
//     alert(result)
//   }
  
//   $('button').click(clicked)

// $("#b1").hover(function () {
//     console.log($(this))
// })

//spot check 8 

// $(".box").hover(function(){
//     $(this).css("background-color", "blue")
// })


///                 Creating & Adding/Removing

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// $("body").append(elem)
// console.log(elem)

 
//            add anything to existing elements
// this is should be in htl - > <div class="fruits"></div>
// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')


//spot check 9                                 שליפת הטקסט שבתוך האלימנט 

// $(".feedme").on("click", function(){
//     let divCopy = `<div class=feedme> ${$(this).text()} </div>`
//     const elem = $(divCopy)       
//     $("body").append(elem)
//   })

//spot check 10         עבודה עם אובגיקט 


// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" }
// ]


// for(let name of names){
//   $("body").append(`<div>${name.first} - ${name.last}</div>`)
// }

//            Removing 

// $("p").remove()
// $("p").remove(".brown")

// 22. Spot Check 11

// $("#spotcheck11").hover(function(){
//    $(this).remove()
// })

// spot check 11 יצור אלמנטים בנים דרך כפתור 
//my sol
// const  clicked = function (){
//   $('#blogs').append(`<div id="blogs"> ${$(this).text()} </div>`)
// }
// $('button').click(clicked)

//sit sol
// $("button").on("click", function(){
//   $("#blogs").append("<div class='blog'>Cool blog</div>")
// })
// $("#blogs").on("click", ".blog", function(){
//   $(".blog").text("blargh") 
// })

// const addDiv = function() {
//   $("body").append("<div class=box></div>");
// };

// $("button").on("click", function() {
//   addDiv();
// });

// $("body").on("click", ".box", function() {
//   alert("hi");
// });