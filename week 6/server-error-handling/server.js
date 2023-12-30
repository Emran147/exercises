const users = [
    { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
    { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
    { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
    { username: "marc", name: "Marco", country: "Greece", age: 63 },
    { username: "kev", name: "Kevin", country: "Italy", age: 31 }
]
app.get('/users', function (req, res) {
    res.send(users)
})

app.delete('/users/:username', function (req, res) {
    let username = req.params.username
    let userIndex = users.findIndex(user => user.username === username)
    users.splice(userIndex, 1)
    res.status(204).end()
})