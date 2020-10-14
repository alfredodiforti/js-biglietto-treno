//JAVASCRIPT
//generalità
var chilometri = prompt('quanti chilometri devi effettuare?');
var età = prompt('quanti anni hai?');
//prezzo di listino
var prezzokm = 0.21;
var costolistino = chilometri * prezzokm;
//sconti speciali
var scontoUnder18 = (((chilometri * prezzokm) / 100) * 20);
var scontoOver65 = (((chilometri * prezzokm) / 100) * 40);
//prezzi finali
var prezzoU18 = costolistino - scontoUnder18;
var prezzoO65 = costolistino - scontoOver65;
//variabili
if (età < 18) {
document.getElementById('total').innerHTML = prezzoU18 + '€';
}
else if (età >= 65) {
  document.getElementById('total').innerHTML = prezzoO65 + '€';
}
else if (età > 17 && età < 65) {
  document.getElementById('total').innerHTML = costolistino + '€';
}
