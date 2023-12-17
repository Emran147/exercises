const fetchBookData = function(){
    let inputVal = $('#bookInput').val()
    
    $.get(`books/${inputVal}`, function(bookdata){

        $('body').append(`<div> ${bookdata.title}  - ${bookdata.author} </div>`)

    })

}