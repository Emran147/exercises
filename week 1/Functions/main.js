//1
const isEven = function (num){  return num%2==0 ?  true:  false;  }

//2
 const printTheodd = function(arr){ 
    for (let index = 0; index < arr.length; index++) {
      if (!(isEven(arr[index]))) {
        console.log(arr[index])
      }
     }
    }


let arr = [4,6,7,13,54,65,43,22]
printTheodd(arr)


    

//3

const isExist = function(arr,num){ 
    for (let index = 0; index < arr.length; index++) {
      if (arr[index]===num) {
       return true
      }
     }
     return false
    }


let arr2 = [4,6,7,13,54,65,43,22]
let num = 6; 
console.log(isExist(arr,num))




//4
const calculator= {

    add : function(num1,num2)
    {
        return num1+num2
    },
    subtract : function(num1,num2)
    {
        return Math.abs(num1-num2)
    },

}


const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42


//5

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

 const increaseByNameLength=function(money,name){    return money*name.length }
 const makeRegal=function(name){return "His Royal Highness,"+name }    

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


