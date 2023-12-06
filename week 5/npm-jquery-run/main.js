$(".testDiv").on( "click", function() {
    console.log('iam here')
    $('.testDiv').css( "background-color", "green");

  } )


 const getPromise=  $.get('https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people')

 getPromise.then(data=>{console.log(data)})