//inserisco un numero tramite promp che chiedero al utente 

let number_1 = prompt('Inserisci un numero')
let number_2 = prompt('inserisci un numero')
//controllo in console che abbia dichiarato i numeri
console.log(number_1)
console.log(number_2)

if(number_1 > number_2){
    document.getElementById('major').innerHTML = `il numero maggiore è ${number_1}`
   
} else if (number_1 < number_2){
    document.getElementById('major').innerHTML = `il numero maggiore è ${number_2}`
} else if (number_1 = number_2){
    document.getElementById('major').innerHTML = `i numeri indicati sono uguali`
}
