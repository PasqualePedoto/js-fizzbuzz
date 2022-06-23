/*
Ci viene chiesto di implementare un algoritmo in grado di mostrare i numero da 1 a 100
in console con alcune variazioni: 
    -Se il numero è divisibile per 3 allora la stampa del numero verrà
        sostituita dalla scritta Fizz
    -Se il numero è divisibile per 5 allora la stampa del numero verrà
        sostituita dalla scritta Buzz
    -Se il numero è divisibile sia per 3 che per 5 allora la stampa del numero verrà
        sostituita dalla scritta FizzBuzz
*/

/* 
    *** BONUS 1 *** 
   
   1) Nel primo step manipoliamo l'header e il main fornendo una struttura 
    servendoci delle classi di Bootstrap

*/

// Bersagliamo header e il main servendoci degli ID 

const header = document.getElementById('header');
const mainContent = document.getElementById('main-content');

// * Assegnamo sia all'header che al main un contenitore Bootstrap
// * Creaiamo in primis il blocco container che verrà poi successivamente assegnato

const container = '<div id="container" class="container"></div>';
header.innerHTML = container;
mainContent.innerHTML = container;

// * Assegnamo il titolo al header

const websiteTitle = '<h1 id="title" class="m-5 text-center text-white">FizzBuzz</h1>';
const isHeaderContainer = document.querySelector('header #container');
isHeaderContainer.innerHTML = websiteTitle;

// * Ora riempiamo il Main Content con un insieme di blocchi che verranno riempiti 
// * con le varie scritte

// * Il servendoci dell'operatore modulo verifichiamo se un numero è divisibile 
// * o meno per 3 e 5

const isMainContainer = document.querySelector('main #container');

let oneHundredBlock = document.createElement('div');
oneHundredBlock.classList.add('d-flex', 'flex-wrap');

for (let i = 1; i <= 100; i++) {
    const element = document.createElement('div');
    element.classList.add('block');
    let sentence = i;

    if (((i % 3) == 0) && ((i % 5) == 0)) {
        sentence = 'FizzBuzz';
        element.append(sentence);
        console.log('ho preso FizzBuzz');
    } else if ((i % 3) == 0) {
        sentence = 'Fizz';
        element.append(sentence);
        console.log('ho preso Fizz');
    } else if ((i % 5) == 0) {
        sentence = 'Buzz';
        element.append(sentence);
        console.log('ho preso Buzz');
    } else {
        element.append(sentence);
    }

    oneHundredBlock.appendChild(element);
}

isMainContainer.appendChild(oneHundredBlock);


