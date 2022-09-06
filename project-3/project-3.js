// Selecting Element //

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector("btn--new");
const btnRoll = document.querySelector("btn--roll");
const btnHold = document.querySelector("btn--hold");

// Selecting Condition //
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add("hidden");
