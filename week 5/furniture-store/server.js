const e = require('express')
const express = require('express')
const app = express()
const path = require('path')

//app.use(express.static(path.join(__dirname,'dist')))
//app.use(express.static(path.join(__dirname,'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


app.get('/',function(req,res){
    res.send('hello brb')
})

app.get('/priceCheck/:furnitureName',function(req,res){
    let flag = 0 
    store.forEach(element => {
        if(element.name==req.params.furnitureName)
        {
            flag =1
            let newObj = {
                name : element.name,
                price : element.price
            }
            res.send(newObj) 
        }
    })
    if(flag==0){
        let newObj = {
            name : req.params.furnitureName,
            price : null
        }
        res.send(newObj) 
    }

})


app.get('/Buy/:name',function(req,res){
    let flag = 0 
    store.forEach(element => {
        if(element.name==req.params.name)
        {
            flag =1
           if(element.inventory>0) {
               element.inventory=element.inventory-1
               let newObj = {
                name : element.name,
                price : element.price,
                inventory : element.inventory
               }
               res.send(newObj) 
           }
           if(element.inventory==0){
            let newObj = {
                name : element.name,
                price : element.price,
                inventory : element.inventory
               }
               res.send(newObj) 
           }

        }
    })
    if(flag==0){
        let newObj = {
            name : req.params.name,
            price : null,
            inventory : null
        }
        res.send(newObj) 
    }

})

app.get('/sale',function(req,res){
    const { admin } = req.query;
    if(JSON.parse(admin)==true)
    {
       store.forEach(element => {
            if(element.inventory>10)
            {
                element.price = (element.price*0.5)
            }
       });
    }
    res.send(store)
})

const port = 3000

const listenFunc =function(port){
    console.log('server is running in port : ' + port)
    
}

app.listen(port , listenFunc(port))