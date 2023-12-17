const searchPriceFunc = function(){
    let inputVal = $('#nameToPrice').val()
      $.get(`/priceCheck/${inputVal}`, function(furData){
        $('body').append(`<div> ${furData.name}  - ${furData.price} </div>`)
    })
}
const buyItemFunc = function(){
    let inputVal = $('#nameToBuy').val()
      $.get(`/buy/${inputVal}`, function(furData){
        if(furData.inventory>0){
            $('body').append(`<div> ${furData.name}  - ${furData.price}  - ${furData.inventory}</div>`)      
        }
        if(furData.inventory==0){
            $('body').append(`<div> wait until we recive the new container </div>`)
        }
    })
}