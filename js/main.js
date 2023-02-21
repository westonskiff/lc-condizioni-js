'use strict';

// const etaUtente = 1;
// const hasPatente = true;

// if(etaUtente >= 18) {
//     console.log(etaUtente, 'Può prendere la patente');

//     if(hasPatente === true) {
//         console.log(etaUtente, 'hai già la patente');ì
//     } else {
//         console.log('cosa aspetti a prendere la patente!');
//     }


// } else if(etaUtente <= 2) {
//     console.log(etaUtente, 'Forse non puoi nemmeno camminare');
// } else {
//     console.log(etaUtente, 'Hai un\'età compresa tra i 3 e i 17 anni');
// }

// console.log('Sono dopo la condizione');

// const userAge = 18;

// let passwordGenerator = 'inizioPassword';

// if(userAge != 18) {
//     passwordGenerator = passwordGenerator + 'soloperdiciottenni';
// }

// console.log(passwordGenerator);

// const favouriteColor = 'green';

// if(favouriteColor === 'green') {
//     console.log('il tuo colore NON è verde');
// } else {

// }

// const myAge = 18;

// if(true){
//     console.log('sto stampando questo operatore sconosciuto');
// } else {

// }

// const myNumber = 1;

// if(myNumber === 1) {

// }



/* Utente Loggato */

//const userLogged = false;

// if(false){
//     console.log('sei sicuramente vero');
// } else {
//     console.log('sei sicuramente false');
// }




const colorOne = 'red';
const colorTwo = 'blue';

// -> || operatore logico OR
// -> && operatore logico AND

// if(colorOne === 'red' || colorTwo === 'blue' || colorOne === 'yellow') {
//     console.log('colori fantastici');
// } else {
//     console.log('pessimi gusti');
// }
// // AND
// if( (true || false) && (true || false))
// if( (true) && (true))
// true

// if( (true && true && true && false) && true)
// if( (????) || (true))
// true

// const fruit = 'mela';

// switch(fruit){
//     case 'banana':
//         console.log('banana');
//     case 'pera':
//         console.log('hey pera');
//     case 'mela':
//     case 'fragola':
//         console.log('siete delle frutte amiche');
//     default:
//         console.log('hey frutta NON contemplata')
// }


// if(fruit === 'banana') {
//     console.log('hey banana');
// } else if(fruit === 'pera') {
//     console.log('hey pera');
// } else if( fruit === 'mela' || fruit === 'fragola') {
//     console.log('siete delle frutte amiche');
// } else {
//     console.log('hey frutta NON banana')
// }


// const ilGestoreDelleDate = new Date();

// console.log(ilGestoreDelleDate);

// const giornoCorrente = ilGestoreDelleDate.getDay();

// console.log('giornoCorrente', giornoCorrente);


//Chiediamo all'utente due parole in successione.
//Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

//creo una variabile1 e le assegno un valore da prompt;

const variabile1 = prompt('Inserisci la prima parola');

//creo una variabile2 e le assegno un valore da prompt;

const variabile2 = prompt('Inserisci la seconda parola');

//confronto la lunghezza della variabile1 con la lunghezza della variabile2
//SE la lunghezza della variabile 1 > lunghezza variabile2
    //stampo "la variabile 1 è più lunga della variabile2"
  //ALTRIMENTI SE la lunghezza della variabile2 > lunghezza variabile1
    //stampo "la variabile2 è più lunga della variabile1"
  //ALTRIMENTI
    //stampo "le variabili hanno la stessa lunghezza"

if(variabile1.length > variabile2.length){
    console.log(`caso1: variabile 1 > variabile 2 - ${variabile1} è più lungo di ${variabile2}`);
} else if(variabile2.length > variabile1.length) {
    console.log(`caso2: variabile 2 > variabile 1 - ${variabile2} è più lungo di ${variabile1}`);
} else {
    console.log('le parole hanno la stessa lunghezza');
}

