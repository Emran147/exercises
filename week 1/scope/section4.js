
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()


/*

What will console log?  
error 

Will there be an error? yes

Why? seed variable  defined inside the getSeed Func  , so we cant use it outside the getSeed scope  

Will something be undefined? Why?

the seed variable is not defined in Global 

To what scope does each variable belong? Global or local? If local, to which specifically?
getSeed-Global
plant-Global 
seed-local (inside the getSeed scope )
pot -Global 


*/