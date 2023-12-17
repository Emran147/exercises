const getUsers =function(){
    $('#usersList').empty()
    $.get('/users',function(users){
        users.forEach(element => {
            $('#usersList').append(`<li>${element}</li>`)
        })
    })
}


const addUser = function(){
    const inputval = $('#userInput').val()
    $.post('/users', {name : inputval} , function(response){
        getUsers()
    } )
}


getUsers()
