//JS RESET
console.log('JS OK')
/*
0. Prendiamo un elemento nel DOM
1. Chiedere all'utente il numero di kilometri che vuole percorrere
2. Calcolare il prezzo del biglietto e salvarlo in una variabile 
3. Chiedere all'utente l'età del passeggero 
4. Se l'utente ha anni da 0 a 18 (compresi), sottrarre -20% al prezzo biglietto
5. Se l'utente ha anni da 65 a max (compresi), sottrarre -40% al prezzo biglietto
6. Stampare il prezzo finale sull'elemento del DOM
*/

//0. Prendiamo un elemento nel DOM
const element = document.getElementById('target')

//1. Chiedere all'utente il numero di kilometri che vuole percorrere
const userKm = parseInt(prompt('Scegli i km che vuoi percorrere', '10', 500));

console.log('km utente ' + userKm);

//2. Calcolare il prezzo del biglietto e salvarlo in una variabile 