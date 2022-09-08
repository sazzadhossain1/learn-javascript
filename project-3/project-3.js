// // Selecting Element //

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Selecting Condition //
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Create Roll Dice Function //
btnRoll.addEventListener("click", function () {
  // generating a random dice roll //
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display the dice photo with dynamicaly//
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //-------------------------------------

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  }
});

//----------------------------------------------------

// const sorce0Ele = document.querySelector("#score--0");
// const sorce1Ele = document.getElementById("score--1");
// const current0El = document.getElementById("current--0");
// const current1El = document.getElementById("current--1");

// const diceEl = document.querySelector(".dice");
// const btnNew = document.querySelector(".btn--new");
// const btnroll = document.querySelector(".btn--roll");
// const btnHold = document.querySelector(".btn--hold");

// // selecting condition //

// sorce0Ele.textContent = 0;
// sorce1Ele.textContent = 0;
// diceEl.classList.add("hidden");

// let currentScore = 0;

// btnroll.addEventListener("click", function () {
//   const dice = Math.trunc(Math.random() * 6) + 1;
//   diceEl.classList.remove("hidden");
//   diceEl.src = `dice-${dice}.png`;

//   //----------------------------//

//   if (dice !== 1) {
//     currentScore += dice;

//     current0El.textContent = currentScore;
//   }
// });
