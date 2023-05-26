//JS RESET
console.log('JS OK')
/*
0. Prendiamo un elemento nel DOM
1. Chiedere all'utente il numero di kilometri che vuole percorrere
2. Chiedere all'utente l'età del passeggero 
3. Calcolare il prezzo del biglietto e salvarlo in una variabile 
4. Se l'utente ha anni da 0 a 18 (compresi), sottrarre -20% al prezzo biglietto
5. Se l'utente ha anni da 65 a max (compresi), sottrarre -40% al prezzo biglietto
6. Stampare il prezzo finale sull'elemento del DOM
*/

//0. Prendiamo un elemento nel DOM
const element = document.getElementById('target')

//1. Chiedere all'utente il numero di kilometri che vuole percorrere
const userKm = parseInt(prompt('Scegli i km che vuoi percorrere', '10', 500));
console.log('km utente ' + userKm);

//2. Chiedere all'utente il numero dei suoi anni
const userAge = parseInt(prompt("Quanti anni hai?", 33).trim());
console.log('età utente ' + userAge);

//3. Calcolare il prezzo del biglietto e salvarlo in una variabile 
const priceMoltiplicator = 0.21;

let price = priceMoltiplicator * userKm;
console.log(priceMoltiplicator, price);

//4. Se l'utente ha anni da 0 a 18 (compresi), sottrarre -20% al prezzo biglietto
//  5. Se l'utente ha anni da 65 a max (compresi), sottrarre -40% al prezzo biglietto
const youngPeople = price * 0.2;
const oldPeople = price * 0.4;

console.log(youngPeople, oldPeople);

if (userAge < 18){
    price += - youngPeople;
} else if (userAge > 64) {
    price += - oldPeople;
}

console.log(price);

//6. Stampare il prezzo finale sull'elemento del DOM
document.getElementById('target').innerText = "Il prezzo del biglietto è" + ' ' + price;

