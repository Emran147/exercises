const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const users = ['first user ' , 'second user']
const wordCounter = {
    emran : 3 , 
    mahran : 4 , 
    test : 2
}


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

app.get('/',function(req,res){
    res.send('hello brb')
})

app.get('/users',function(req,res){
    res.send(users)
})

app.post('/users', function(req,res){
    const user = req.body
    users.push(user.name)
    console.log('succeded')
    res.end()
})

app.put('/users/:name',function(req,res){
    const name = req.params.name
    const updates = req.body
    res.end()
})


app.get('/sanity',function(req,res){
    res.send('Server is up and running')
})

app.get('/sanity/:word',function(req,res){
    if(wordCounter[req.params.word])
    {
       res.send({count : wordCounter[req.params.word]})
    }
    else{
        res.send({count : 0})
    }

    res.end()
})

app.post('/sanity', function(req,res){
    const postedObj = req.body
    console.log('succeded')
    console.log(postedObj.word)
    if(wordCounter[postedObj.word])
    {
        wordCounter[postedObj.word]++
        res.send({text : postedObj.word ,count : wordCounter[postedObj.word]})
    }
    else{
        wordCounter[postedObj.word] = 1
        res.send({text : 'added ' + postedObj.word , currentCount : wordCounter[postedObj.word]  })
        console.log(wordCounter)
    }


    res.end()
})


const port = 3000

const listenFunc =function(port){
    console.log('server is running in port : ' + port)
    
}

app.listen(port , listenFunc(port))