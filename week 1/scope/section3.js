
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)


/*

What will console log?  
Served a special fish
Served a special lettuce plate
Served a special curious cheese
Finished serving all the orders: fish,lettuce plate,curious cheese

Will there be an error? no

Why? all the variables defined and used in the right area  

Will something be undefined? no

Why? because all the  variables defined 

To what scope does each variable belong? Global or local? If local, to which specifically?
allOrders - Global 
orders - local (inside the serveOrders func)
serveOrders -Global 
specialOrder - local ( for scope  )
order - local ( for scope )


*/