const express = require('express')
const { data } = require('jquery')
const app = express()
const path = require('path')

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

const booksdata = {
    8112 : {
        title : 'emran book man ' , 
        author : ' emran qedan '
    }  ,
    8113 : {
        title : 'the hunger games ' , 
        author : 'brtho ana' 
    }     


}

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))


app.get('/',function(req,res){
    res.send('hello brb')
})

app.get('/books',function(req,res){
    const booksInfo = {
        42 : {name : 'emrans book ' , author : 'emran'}
    }
    res.send(booksInfo)
})


app.get('/books/:bookId',function(req,res){
    const id = req.params.bookId
    const bookData = booksdata[id]
    res.send(bookData)
})



app.get('/users',function(req,res){
    const userInfo = {
        42 : {name : 'emran ' , id : '31'}
    }
    res.send(userInfo)
})

app.get('/user/:userID',function(req,res){
    res.send(users[req.params.userID])
})

app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})

app.get('/details', (request, response) => {
    const { zipcode, city, middleName } = request.query;
    if (zipcode) {
        console.log('Zipcode:', zipcode);
    }

    if (city) {
        console.log('City:', city);
    }

    if (middleName) {
        console.log('Middle Name:', middleName);
    }
    response.send(request.query)
})


const port = 3000

const listenFunc =function(port){
    console.log('server is running in port : ' + port)
    
}

app.listen(port , listenFunc(port))

