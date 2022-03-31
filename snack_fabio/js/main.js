
const shoppingListElement = document.querySelector(`.shopping .list`)

const shopping_list = ['pane','gelato','pizza','latte']

let counter = 0

while( counter < shopping_list.length){
    
    const product = shopping_list[counter]

    const li = document.createElement('li')

    li.append(product)

    shoppingListElement.append(li)


    counter++
}


document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
    const newProduct = document.getElementById('product').value
    const product = shopping_list[counter]

    if(newProduct.length > 3){
        const li = document.createElement('li')

        li.append(newProduct)
    
        shoppingListElement.append(li)
    }
    // const li = document.createElement('li')

    // li.append(newProduct)

    // shoppingListElement.append(li)

    document.getElementById('product').value = ''

})

// for( let = i; counter < shopping_list.length; i++){
    
    
//     const product = shopping_list[i]

//     const li = document.createElement('li')

//     li.append(product)

//     shoppingListElement.append(li)

// }