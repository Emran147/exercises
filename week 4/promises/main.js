// const getRandomWord = function () {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
//     setTimeout(() => {
//         return words[Math.floor(Math.random() * words.length)]
//     }, 1000);
// }

// console.log(getRandomWord());


// const getRandomWord = function (callback) {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
//     setTimeout(() => {
//         callback(words[Math.floor(Math.random() * words.length)])
//     }, 1000);
// }


// getRandomWord((randomWord)=> {
//     console.log(randomWord);
// })

// const getRandomWord = function (callback) {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
//     setTimeout(() => {
//         callback(words[Math.floor(Math.random() * words.length)])
//     }, 1000);
// }

// const getSynonyms = function(word, callback) {
//     let thesauraus = {
//         'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
//         'Astute': ['Sharp', 'Poignant', 'Clever'],
//         'Azure': ['Blue', 'Cyan', 'Sky-blue'],
//         'Bright': ['Luminous', 'Brilliant'],
//         'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
//         'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
//         'Erode': ['Destroy', 'Wear out', 'Tarnish'],
//         'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
//         'Phonic': ['Soundful'],
//         'Ploy': ['Plan', 'Ruse'],
//         'Polaroid': ['Photograph'],
//         'Yap': ['Bark', 'Blab', 'Chatter'],
//         'Yonder': ['There', 'Away', 'Far', 'Afar']
//     }

//     setTimeout(()=>{
//         callback(thesauraus[word])
//     }, 1000)
// }

// const getSentiment = function(word, callback) {
//     let wordSentiment = {
//         'Definitive': 1,
//         'Sharp': 1,
//         'Blue': 0,
//         'Luminous': 1,
//         'Plethora': 1,
//         'Slick': -1,
//         'Destroy': -1,
//         'Bother': -1,
//         'Soundful': 0,
//         'Plan': 0,
//         'Photograph': 0,
//         'Bark': -1,
//         'There': -1
//     }
//     setTimeout(()=>{
//         callback(JSON.stringify(wordSentiment[word]))
//     }, 1000) 
// }

// const getSentimentDescription = function(sentiment){
//     return sentiment == "1" ? "Positive" : sentiment == "-1" ? "Negative" : "Neutral"
// }

// function getData() {
//     return new Promise((resolve, reject) => {
//       fetch('https://example.com/data')
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           throw new Error('Request failed');
//         })
//         .then(data => {
//           resolve(data);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }


<<<<<<< HEAD
// class APIManager {
//     fetch() {
//         return $.get('/data')
//     }
// }

// class Renderer {
//     render(dataPromise) {
//         dataPromise.then(function (data) {
//             $("#body").append(`<div>${data}</div>`)
//         })
//     }
// }

// const apiManager = new APIManager()
// const renderer = new Renderer()

// let initialDataPromise = apiManager.fetch()
// renderer.render(initialDataPromise) //initial page load

// $(".some-thing").on("click", function () {
//     let newDataPromise = apiManager.fetch()
//     renderer.render(newDataPromise)
// })


=======
class APIManager {
    fetch() {
        return $.get('/data')
    }
}

class Renderer {
    render(dataPromise) {
        dataPromise.then(function (data) {
            $("#body").append(`<div>${data}</div>`)
        })
    }
}

const apiManager = new APIManager()
const renderer = new Renderer()

let initialDataPromise = apiManager.fetch()
renderer.render(initialDataPromise) //initial page load

$(".some-thing").on("click", function () {
    let newDataPromise = apiManager.fetch()
    renderer.render(newDataPromise)
})
>>>>>>> b92e2013ffcb2268815f8e6de00c5c345b31b6bb


