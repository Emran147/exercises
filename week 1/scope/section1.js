//Section 1

const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 

/*
What will console log?  
running 
(8) finshed running 8 miles 
Will there be an error? 
yes 
Why?
 because the variable distance declared inside the scope - and he is not defined outside (global)
Will something be undefined? no 
Why? 
No, because there is no variable defined but its value is unknown 
To what scope does each variable belong? Global or local? If local, to which specifically?
run - global 
distance - local (inside the if statment ) 
i - local (inside the for loop)

*/


