
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}



/*

What will console log?  
error 

Will there be an error? yes

Why? found variable  defined inside the if statment   , so we cant use it outside   

Will something be undefined? Why?

the found variable is not defined outside the if statment  

To what scope does each variable belong? Global or local? If local, to which specifically?

userExists -Global 
doesUserExist -Global 
name-local (inside the func scope)
u - local ( for scope)
found - local (if statment scope )

*/