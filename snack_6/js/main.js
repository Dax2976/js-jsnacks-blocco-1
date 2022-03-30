//stampa il cubo dei primi n numeri
// dove n è un  numero indicato dall utente

let numeroinput = parseInt(prompt('dichiara un numero'))
console.log(numeroinput)

let potenza = 3
console.log(potenza)

let numeropow = Math.pow(numeroinput,potenza)
console.log(numeropow)

document.querySelector('h1').innerHTML = `Il cubo del tuo numero è : ${numeropow}`