//Exercise 1
// const person = {
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//        this.hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }  
  
//   person.feed() //should alert "I'm no longer hungry"


  // //Exercise 2
  // const pump = function (obj) {
  //     console.log(`You put  ${obj.maxLitters-obj.liters}    liters in  ${ obj.name}`);
  //     obj.liters=obj.maxLitters;
  
  // }
  //   const garage = {
  //   car1: {
  //     name: 'Audi',
  //     liters: 3,
  //     maxLitters :5,
  //     fillTank(){pump(this)}
  //   },
  //   car2: {
  //       name: 'Mercedes',
  //       liters: 1,
  //       maxLitters:31,
  //       fillTank(){pump(this)}   
  //   }
  // };
  //   garage.car1.fillTank();
  // console.log('Audi should have 5 liters: ',  garage.car1.liters);
  // garage.car2.fillTank();
  // console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//Exercise 3
// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
  
//   const airplane = {
//     fly: function (fuel) {
//       if (fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };
  
//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly(0));


  //Exercise 4


// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins:function(num){
//         this.coinCount-=num
//     }
//   }; 
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

  


  //Exercise 5
// const revealSecret = function () {
//     return this.secret;
//   };
// const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     let result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };
  
// const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };
  
// const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };
// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);

 

  //Exercise 6 without extension2 


// const coffeeShop = {
//     beans: 40,
//     money : 50,
//       drinkRequirements: {
//       latte: 10,
//       americano: 5,
//       doubleShot: 15,
//       frenchPress: 12
//     },
//     makeDrink : function (drinkType) { 
//             if(isExist(drinkType)&&beansAvailability(drinkType)){alert("have fun ")}
//             else if(!isExist(drinkType)){alert("Sorry, we don't make filtered")}
//             else if(!beansAvailability(drinkType)){alert("Sorry, we're all out of beans")}
//         },
//     buyBeans :  function (numBeans) {       
//     this.beans+=numBeans
//     this.money-=(numBeans*1)   
//     }


// }
// const isExist = function(drinkType){
//     if ( coffeeShop.drinkRequirements[drinkType]!=undefined)
//     return true 
//     else return false
//   }


// const beansAvailability = function(drinkType)
//   {
//     if ( coffeeShop.drinkRequirements[drinkType]<coffeeShop.beans)
//       {
//         coffeeShop.beans-=coffeeShop.drinkRequirements[drinkType]
//         return true    
//     }
//     else return false
//   }

// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
// console.log(coffeeShop.money)
// coffeeShop.buyBeans(40)
// console.log(coffeeShop.money)

// const coffeeShop = {
//     beans: 40,
//     money : 50,
//       drinkRequirements: {
//       latte: {beanReq:11 , price : 5},
//       americano: {beanReq:5 , price : 2},
//       doubleShot: {beanReq:15 , price : 14},
//       frenchPress: {beanReq:12 , price : 11},
//     },
//     makeDrink : function (drinkType) { 
//             if(isExist(drinkType)&&beansAvailability(drinkType)){alert("have fun ")}
//             else if(!isExist(drinkType)){alert("Sorry, we don't make filtered")}
//             else if(!beansAvailability(drinkType)){alert("Sorry, we're all out of beans")}
//         },
//     buyBeans :  function (numBeans) {       
//     this.beans+=numBeans
//     this.money-=(numBeans*1)   
//     }


// }

// const isExist = function(drinkType){
//     if ( coffeeShop.drinkRequirements[drinkType]!=undefined)
//     return true 
//     else return false
//   }


// const beansAvailability = function(drinkType)
//   {
//     drinkType=drinkType
//     if ( coffeeShop.drinkRequirements[drinkType.beanReq] < coffeeShop.beans)
//       {
//         coffeeShop.beans-=coffeeShop.drinkRequirements[drinkType.beanReq] 
//         return true    
//     }
//     else return false
//   }

// console.log(coffeeShop.drinkRequirements.latte.beanReq)  

// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
