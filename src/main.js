/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let carta = document.getElementById("carta");
  let numCard = document.getElementById("numero");
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let palos = ["diamond", "hearts", "clubs", "spades"];

  let numAleatorio = Math.floor(Math.random() * 13);
  let num = numeros[numAleatorio];
  let palAleatorio = Math.floor(Math.random() * 4);
  let pal = palos[palAleatorio];

  carta.classList.add("carta", pal);
  numCard.innerHTML = "<div class='numero'>" + num + "</div>";
};
