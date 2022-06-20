//Generare una password per l'utente

/*

1- Testo iniziale
2- Chiedo all'utente il nome
3- Chiedo all'utente il cognome
4- Chiedo all'utente il suo colore preferito
5- Recupero elemento
6- Genero la password
7- Stampo tutto

*/

// 1 - Testo iniziale
const startText = 'La tua password è: '

// 2 - Nome utente
const firstName = prompt("Qual'è il tuo nome?", 'Gabriele');
console.log(firstName);

// 3 - Cognome utente
const secondName = prompt("Qual'è il tuo cognome?", 'Superina');
console.log(secondName);

// 4 - Colore preferito utente
const favColor = prompt("Qual'è il tuo colore preferito?", 'Verde');
console.log(favColor);

// 5 -Recupero elemento
const result = document.getElementById('pwd');

// 6 - Genero la password

const password = firstName + secondName + favColor + '21';

// 7 - Stampo
result.innerHTML = startText + `<strong> ${password} </strong>`;