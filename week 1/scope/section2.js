
//Section 2 


if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}

/*
What will console log?  
cowSound is not defined (error) 
Will there be an error? 
yes 
Why?
 because the variable cowSound declared inside the scope(id scope) - and he is not defined in the else or in global 
Will something be undefined? no 
Why? 
No, because there is no variable defined but its value is unknown 
To what scope does each variable belong? Global or local? If local, to which specifically?
cowSound - local (if scope)
*/