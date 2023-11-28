const computerDataIdarr =[]

$('.generator').on('click', function() {
    console.clear()
    let processorID = $(this).closest("div").attr('id');
    console.log("Processor ID: "+processorID)
    let computerDataId = $(this).closest(".computer").attr('data-id');
    console.log("Computer’s data-id: "+computerDataId)
    newobj={cmp_id: computerDataId}
    computerDataIdarr.push(newobj)
    theBusNumber = $(this).closest(".computer").find(".BUS").text()
    console.log("BUS: "+theBusNumber)
  })

  
  $('.validator').on('click', function() {
    console.clear()
    generatortext= $(this).closest(".computer").find(".generator").text()
    console.log("generator text : "+generatortext)
    mb = $(this).closest(".computer").find(".MB").text()
    console.log("MB : " + mb)
    var texts =$(this).closest(".computer").find('.QR').map(function() {
        return $(this).text(); // Get the text of each element
    }).get();
    console.log( " The QRs : "+texts)
  })




