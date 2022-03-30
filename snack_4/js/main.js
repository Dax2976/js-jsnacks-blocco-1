//SNACK 4
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


let invitati = ['Marco','Andrea','Belzebu','Achille','Thomas','Mariateresa']

let mionome = prompt('Come ti chiami?')
console.log(invitati)
let auth = false

for(let i = 0; i < invitati.length; i++){
    if(invitati[i] == mionome){
        auth = true
    }
}

if(auth == true){
    document.querySelector('h1').innerHTML = `Complimenti ${mionome} sei stato invitato`
} else{
    document.querySelector('h1').innerHTML = `Peccato ${mionome} non sei stato invitato`
}