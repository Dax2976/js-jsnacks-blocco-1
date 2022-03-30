//SNACK 5
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

let numberdispari;
let numerodichiarato;


numberdispari = [ ]



for(let i = 0; i < 6; i++){
    numerodichiarato = parseInt(prompt('dichiara un numero'))
} if (numerodichiarato % 2 != 0){
    numberdispari.push(numerodichiarato)
}
console.log(numberdispari)