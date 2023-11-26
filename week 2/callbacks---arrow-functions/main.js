// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()



//                                                                  ** without call back ** 

// const first = function () {
//     setTimeout(function () {
//         console.log("should be first")
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first()
// second()


//                                                                     **  call back Function  ** 


// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument


//                                                                    ** עוברים על נערך של אוביקטים ** 

// let users = []

// const getData = function (displayData) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         displayData()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + JSON.stringify(users) )
//         container = document.getElementById("container")
//         container.innerHTML = JSON.stringify(users);
    
// }

// getData(displayData)



//                                                                        ** arrow Functionns ** 


//const greet = () => {    console.log("Hello there")  }
//const greet = function() {    console.log("Hello there")  }


//                                                                       ** פונקציה מקוצרת מקבלת משתנה  **

// const greet = (name) => {    console.log("Hello there, " + name)  }
//const greet = (name) => console.log("Hello there, " + name)
//const greet = name => console.log("Hello there, " + name)
// greet("Jolene") //prints "Hello there, Jolene"



//                                                                          **spot check 7 **

//const square = num => console.log(num*num)



//                                                                            Arrow Functions with Return 

// const add = (x, y) => {
//         return x + y
//   }
//   const sum = add(1, 2) 
//   console.log(sum) //prints 3



// אם זה רק מחזיר אין צורך לרשום return 

//const add = (x, y) => x + y



const getFormalTitle = (title,name) => title+" "+name
formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle)



