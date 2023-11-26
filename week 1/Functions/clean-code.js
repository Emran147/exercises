let str1 = "Hello"
let str2 = "World"

const concat = function (str1,str2) {
    console.log(str1 + ", " + str2 + "!")
}

const obj = {
    printHello: function(){ 
       console.log("Hello")
    },
    str: "Click me",
    printButton: function(){
         console.log("Button clicked!")
    }
};

const addNum = function(num1, num2) {
    console.log(`Sum is: ${ num1 + num2 }`)
}

concat();
obj.printButton();
addNum(5, 3);

const weatherObj = {
        tempInC: 24,
        weatherType: "sunny",
        printWeather: function() {
            console.log("It is " + this.weatherType + " and the temperature is " + this.temp + "°C.")
        }
};

weather.printWeather();