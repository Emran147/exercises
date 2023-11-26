//    1 

// const push = function () {
//     console.log("pushing it!")
//   }
//     const pull = function () {
//     console.log("pulling it!")
//   }
//   const pushPull = funcName => funcName() 
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"
  

//2

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
// const getTime = funcName => {
//     const time = new Date()
//     funcName(time)
// }  

//   getTime(returnTime)

//3 ??????

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };

  
//   displayData(alert, logData, "I like to party")





//4

//const sumOfThreeNum = (num1,num2,num3) => num1+num2+num3



//5

// const capitalize = theString =>{
//     const firstLetter = theString.charAt(0);
//     const restOfTheString = theString.slice(1);
//     const result = firstLetter.toUpperCase() + restOfTheString.toLowerCase()
//     console.log(result)     
// }

// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia


//6

// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }
    
// const commentOnWeather = temp => " its " + determineWeather(temp)

// commentOnWeather(30)//returns "It's hot"
// commentOnWeather(22)//returns "It's cold"


//7

// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () =>{
//     document.getElementById("box").style.backgroundColor = "yellow"
//     document.getElementById("box").style.height = "150px"
//     document.getElementById("box").style.width = "150px"
//   } 
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")




