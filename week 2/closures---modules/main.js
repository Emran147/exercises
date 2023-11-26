
// //ex1

// const StringFormatter = function(){
// const capitalizeFirst = function (inputString) {
//     return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
//   }
  
//   const  toSkewerCase = function (inputString) {
//     return inputString.replace(/ /g, '-');
//   }
//   return {
//     capitalizeFirst : capitalizeFirst,
//     toSkewerCase : toSkewerCase , 
//   }

// }

// const formatter = StringFormatter()
// console.log(formatter.capitalizeFirst("dorothy") )
// console.log(formatter.toSkewerCase("blue box"))



//ex2 

// const Bank = function (){
//   let money = 500 ;
// const depositCash = function(mount){
//   money+=mount
// }
// const checkBalance = function(){
//   console.log(money)
// }
// return {
// deposit : depositCash,
// showBalance : checkBalance, 
// }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance()


//ex3 


const SongsManager = function(){
const songs = {}
const addSong = function( songName , songURL ){
  const index = songURL.indexOf('=')
  songURL=songURL.substring(index + 1)
  songs[songName]= songURL;
}
const getSong = function(songName){
 console.log(songs[songName])
}
return {
  getSong : getSong , 
  addSong : addSong , 
}

}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
