//SNACK 2 
//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.


let word_1 = prompt('inserisci una parola')
let word_2 = prompt('insersci un altra parola')

console.log(word_1)
console.log(word_2)



if (word_1.length > word_2.length){
    document.querySelector('h1').innerHTML = `la parola ${word_1} è più lunga della parola ${word_2}`
    console.log(`la parola ${word_1} è più lunga`)
} else if(word_1.length < word_2.length){
    document.querySelector('h1').innerHTML = `la parola ${word_2} è più lunga della parola ${word_1}`
    console.log(`la parola ${word_2} è più lunga`)
} else if( word_1.length = word_2.length){
    document.querySelector('h1').innerHTML = `la parola ${word_1} è lunga uguale alla parola ${word_2}`
    console.log(`la parola ${word_1} è lunga uguale alla parola ${word_2}`)
}

