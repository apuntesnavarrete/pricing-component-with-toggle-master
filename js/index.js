//elemento html
let input = document.getElementById("myToggle");
let Card_Price = document.getElementsByClassName("card_price");

//Evento click
input.addEventListener("click", input_able);

//json precios
const price_monty = [19.99, 24.99, 39.99];
const price_annually = [199.99, 249.99, 399.99];

//funcion que inserta precios
function input_able() {
  if (input.checked == true) {
    for (const key in Card_Price) {
      Card_Price[key].innerHTML = `$${price_monty[key]} `;
    }
  } else {
    for (const key in Card_Price) {
      Card_Price[key].innerHTML = `$${price_annually[key]} `;
    }
  }
}
