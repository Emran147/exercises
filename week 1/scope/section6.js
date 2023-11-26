
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}





/*

What will console log?  
error 

Will there be an error? yes

Why?  Assignment to constant variable. 
  

Will something be undefined? Why? no 


To what scope does each variable belong? Global or local? If local, to which specifically?

isEnough Global 
makeEnough Global 
i - local (for scope )



*/