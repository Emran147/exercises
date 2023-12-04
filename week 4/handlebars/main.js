const items=[
    {name: "bread", price: "15"},
    {name: "meat", price: "20"},
    {name: "burger", price: "25"}
]

const render = function(){
const source = $('#store-template').html();
const template = Handlebars.compile(source)
for (const item of items) {
    const newHTML = template(item);
$('.items').append(newHTML);
}


    
}
render()