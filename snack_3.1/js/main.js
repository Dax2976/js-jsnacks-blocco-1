// SNACK 3.1
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.



let somma, numero_utente

let i = 1

somma = 0

while(i <= 10){
    numero_utente = parseInt(prompt(`inserisci il ${i} numero`))
    somma = somma + numero_utente
    i++
}

console.log(`la somma totale dei tuoi numeri è ${somma}`)