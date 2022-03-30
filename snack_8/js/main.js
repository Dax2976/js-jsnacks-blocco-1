//chiedi un numero di 4 cifre al utente 
//calcola la somma del intero numero


let numberUtente = parseInt(prompt('Digita un numero di 4 cifre'))
console.log(numberUtente)

numbers = numberUtente.toString()

let n1 = parseInt(numbers[0])
console.log(n1)
let n2 = parseInt(numbers[1])
console.log(n2) 
let n3 = parseInt(numbers[2])
console.log(n3)
let n4 = parseInt(numbers[3])
console.log(n4)

somma = (n1 + n2 + n3 + n4)

console.log(somma)


