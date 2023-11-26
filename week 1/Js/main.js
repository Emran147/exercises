console.log("Hello, world!")


console.log(5>2&&false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log("")
console.log((31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log(52 !== "52")
console.log((undefined || null))



let bought = true;
let USCitizen = true; 
let yearOfPurchase = 1999;
let thisyear = new Date().getFullYear() 
let yearspassed = thisyear-yearOfPurchase;
let wantsUpgrade,Satisfied,wantToMoveToUS,interestedInBuyingOne


if(yearspassed >= 4)
{
     wantsUpgrade = prompt("Do you Want To Upgrade ? ")
}
else{  Satisfied  = prompt("Do you satisfied  ? ")}


if(!USCitizen&&bought){
     wantToMoveToUS = prompt("Do you Want To Move To The US ? ")
}

if(!bought){
     interestedInBuyingOne = prompt("Do you interested in buying Tesla ? ")
}


const numbers = [1,2,3,4,5,6,7,8,9,10]

//delete the second and third elements
console.log(numbers)
numbers.splice(1,2);
console.log(numbers)


//change the fourth element to 1
numbers.splice(3, 1, 1);
console.log(numbers)


//delete the last 4 elements
numbers.splice(-4)
console.log(numbers)

//add another element 0 to the beginning of the array
numbers.splice(0, 0, 0);


//print the modified array
console.log(numbers)




//Exercise 1

 let p1 = {
    name:"jill",
    age : 25,
    city:"chicago"
  }
  let p2 = {
    name:"Robert",
    age : 25,
    city:"chicago"
  }


  if(p2.age===p1.age&&p2.city===p1.city){
    console.log('Jill wanted to date Robert') 
  }
  if(!(p2.city===p1.city)){
    console.log('Jill wanted to date Robert, but couldn’t') 
  }


//Exercise 2 



let library =
{
book :[
     {title:'FirstTitle',author:'FirstAuthor'},
     {title:'secT',author:'secA'},
     {title:'thirdT',author:'ThirdA'},
     ]

}
console.log(library.book[1].author);



//loops 

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
let minArrayLength;

if(names.length>ages.length){
     minArrayLength = ages.length()
}

else{
     minArrayLength=names.length
}

for(let i = 0; i < minArrayLength; i++){
    people.push({name:names[i],age:ages[i]})

  }
  console.log(people)





