//Generare una password per l'utente

/*

1- Chiedo all'utente il nome
2- Chiedo all'utente il cognome
3- Chiedo all'utente il suo colore preferito
4- Recupero elemento
5- Genero la password

*/

// 1 - Nome utente
const firstName = prompt("Qual'è il tuo nome?", 'Gabriele')
console.log(firstName)

// 2 - Cognome utente
const secondName = prompt("Qual'è il tuo cognome?", 'Superina')
console.log(secondName)

// 3 - Colore preferito utente
const favColor = prompt("Qual'è il tuo colore preferito?", 'Verde')
console.log(favColor)

// 4 -Recupero elemento
const password = document.getElementById('pwd')

// 5 - Genero la password


password.innerText = "La tua password è: " + firstName + secondName + favColor + '21'