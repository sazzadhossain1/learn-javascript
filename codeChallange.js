//code challenge # 1 //
//------------------//
// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / (johnHeight * johnHeight);

// let markHeightBMI = markBMI > johnBMI;
// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHeightBMI);

// let markMass1 = 95;
// let markHeight1 = 1.88;

// let johnMass1 = 85;
// let johnHeight1 = 1.76;

// let markBMI1 = markMass1 / markHeight1 ** 2;
// let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// let markHeightBMI1 = markBMI1 > johnBMI1;
// console.log(markBMI1, johnBMI1, markHeightBMI1);
///////////////////////////////////////////////////////

// Code challange # 2 //
//...................//

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / (johnHeight * johnHeight);

let markHeightBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHeightBMI);

let higherBMI = markBMI > johnBMI || johnBMI < markBMI;
// console.log(higherBMI);

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("john's BMI is higher than Mark's!");
// }
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is ${markBMI} higher than John's!${johnBMI}`);
// } else {
//   console.log(`john's BMI is ${johnBMI} higher than Mark's!${markBMI}`);
// }
////////////////////////////////////////////////////////////////

// Code challange # 3 //
//...................//

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

// console.log(dolphinsScore, koalasScore);

// if (dolphinsScore > koalasScore) {
//   console.log("Dolphin is winner");
// } else if (koalasScore > dolphinsScore) {
//   console.log("Koalas is winner");
// } else if (dolphinsScore === koalasScore) {
//   console.log("Match is draw");
// }

// const dolphinsScore1 = (97 + 112 + 101) / 3;
// const koalasScore1 = (109 + 95 + 106) / 3;

// if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
//   console.log("Dolphin is winner");
// } else if (koalasScore1 > dolphinsScore1 && koalasScore1 >= 100) {
//   console.log("koalas is winner");
// } else if (
//   dolphinsScore1 === koalasScore1 &&
//   dolphinsScore1 >= 100 &&
//   koalasScore1 >= 100
// ) {
//   console.log("Match is draw");
// } else {
//   console.log("No one is winner");
// }
/////////////////////////////////////////////////////////////

// Code challange # 4 //
//...................//
const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
// `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

///////////////////////////////////////

// Code challange # 5 //
//...................//
// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };
// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoalas);

// const checkWinner = function (avgDolphin, avgKoalas) {
//   const dolphinsWin = calcAverage(avgDolphin);
//   const koalasWin = calcAverage(avgKoalas);
//   if (dolphinsWin > koalasWin) {
//     console.log("Dolphins Win");
//   } else {
//     console.log("Koalas Wwwin");
//   }
// };
// checkWinner();
//-----------------------------------------

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoalas);

const checkWinner = function (avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    // console.log(`Dolphin Win  ${avgDolphin} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    // console.log(`Koalas Win  ${avgDolphin} vs. ${avgKoalas}`);
  } else {
    // console.log("Ignore draws this time");
  }
};
checkWinner(scoreDolphin, scoreKoalas);

scoreDolphin = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphin, scoreKoalas);
/////////////////////////////////////////

// Code challange # 6 //
//...................//
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// Fundamentals part - 2 /---> Coding challange --- 3 //
// ................................................. //

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "john smith",
//   mass: 92,
//   height: 1.95,
//   calBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calBMI();
// console.log(mark.bmi);
// john.calBMI();
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI ${mark.bmi} is higher then ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI ${mark.bmi} is higher then ${john.fullName}'s BMI (${john.bmi})`
//   );
// }

// Fundamentals part - 2 /---> Coding challange --- 4 //
// ................................................. //

// cons

//////////////////////////////////////////////////////////

// Developer Skills & Editor Setup ---> coding challange ---- 1//

// 09 Data Structures, Modern Operators and Strings //
// coding challange - 1 //

// const game = {
//   team1: "Bavern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],

//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "weigl",
//       "Witesel",
//       "Hazard",
//       "Brandt",
//       "sancho",
//       "Gotze",
//     ],
//   ],

//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// // console.log(players1, players2);

// const [gk, ...fieldPlayer] = players1;
// console.log(gk, fieldPlayer);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const playersFinal = [...players1, "Thiago", "Coutinho", "Periscic"];
// console.log(playersFinal);

// //---------------------------//

// // const { team1, x, team2 } = game.odds;
// // console.log(team1, x, team2);

// //same think in another way //
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// //----------------------------//

// const printGoals = function (...players) {
//   console.log(`${players.length} goasl were scored`);
// };

// printGoals("Devies", "Muller", "Lewandowski", "kimmich");
// printGoals("Davies", "Muller");
// printGoals(...game.scored);

// //----------------------------//

// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");

// // team1: 1.33,
// // x: 3.25,
// // team2: 6.5,

////////////////////////////////////////////////////

// 09 Data Structures, Modern Operators and Strings //
// coding challange - 2 //

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
// for (const [i, loopingPlayers] of game.scored.entries()) {
//   console.log(`Gool : ${i} ${loopingPlayers}`);
// }

// 2.
// const odds = Object.values(game.odds);
// let avg = 0;
// for (const odd of odds) {
//   avg += odd;
//   avg /= odds.length;
//   console.log(avg);
// }

// 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   // console.log(team, odd);
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd fo ${teamStr} ${odd}`);
// }
//-----------------------------

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "Draw" : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
//-----------------------------

// for (const [odd, team] of Object.entries(game.odds)) {
//   console.log(odd);
//   const teamStr = odd === "x" ? "Draw" : `Victory ${game[odd]}`;
//   console.log(`Odd of ${teamStr} ${team}`);
// }
//-----------------------------

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "Draw" : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

const number = [11, 11, 11, 22, 22, 22, 33, 33, 3];
const unq = new Set(number);
// console.log(unq);

////////////////////////////////////////////////////////////////
//...........................................................//
//////////////////////////////////////////////////////////////

// 09 Data Structures, Modern Operators and Strings //
// coding challange - 3 //

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// // First - 1 //
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // Second - 2 //
// gameEvents.delete(64);
// console.log(gameEvents);

// // third - 3 bonous part //
// const time = [...gameEvents.keys()];
// console.log(time);

// const index = time.indexOf(92);
// console.log(index);

// // Third - 3 //

// const minutes = `An event happend, on average, every ${
//   time[9] / gameEvents.size
// }`;
// console.log(minutes);

// // Forth - 4 //
// for (const [keys, values] of gameEvents) {
//   if (keys <= 45) {
//     console.log("First", `${keys}:${values}`);
//   } else {
//     console.log("Second", `${keys}:${values}`);
//   }
// }
///////////////////////////////////////////////////
//////////////////////////
//////////////////////////////////////////////

// const events = new Set(gameEvents.values());
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// const time = [...gameEvents.keys()];
// console.log(time);

// const index = time.indexOf(92);
// console.log(index);

// const minutes = `An event happened, on
// average, every ${time[9] / gameEvents.size}`;
// console.log(minutes);

// for (const [keys, values] of gameEvents) {
//   if (keys <= 45) {
//     console.log("First", `${keys} : ${values}`);
//   } else {
//     console.log("Second", `${keys} : ${values}`);
//   }
// }
///////////////////////////////////////////////////////
// //-----------------------------------/;
///////////////////////////////////////////////////////
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //--------------------------------/;

// gameEvents.delete(64);
// console.log(gameEvents);
// //==================================/;

// const time = [...gameEvents.keys()];
// console.log(time);

// const index = time.indexOf(92);
// console.log(index);

// const minutes = `An event happend, on average, every ${
//   time[9] / gameEvents.size
// }`;
// console.log(minutes);
// //================================/;
// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log("First", `${key} : ${value}`);
//   } else {
//     console.log("Scond", `${key} : ${value}`);
//   }
// }

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()];
console.log(time);

const index = time.indexOf(92);
console.log(index);

const minutes = `An event happened, on 
average, every ${time[9] / gameEvents.size}`;
console.log(minutes);

// for (const [keys, values] of gameEvents) {
//   if (keys <= 45) {
//     console.log("First", `${keys} : ${values}`);
//   } else {
//     console.log("Second", `${keys} : ${values}`);
//   }
// }

// turnary operator in loop //
// for (const [keys, values] of gameEvents) {
//   const half = keys <= 45 ? "First" : "Second";
//   console.log(`[${half} HALF] ${keys} : ${values}`);
// }

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// 09 Data Structures, Modern Operators and Strings //
// coding challange - 4 //

// document.querySelector(".btn").addEventListener("click", function () {
//   const text = document.querySelector(".text").value;
//   const rows = text.split(" \n");
//   // console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     // console.log(row, first, second);

//     const output = `${first} ${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"*".repeat(i + 1)}`);
//   }
// });

// const text = "sazzad hossain tomal";
// const textSp = text.split(" ");
// console.log(textSp);
//////////////////////////////////////////////////

// A Closer Look at Functions //
// Coding Challange --- 1 //

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],

//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // Get the answer //
//     let answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join("\n")}\n Write option number`
//       )
//     );
//     console.log(answer);

//     // Register Answer //
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer++];
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// // poll.registerNewAnswer();
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//---------------------------------------------------------//

// A Closer Look at Functions //
// Coding Challange --- 2 //

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector(".poll").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

//**-----------------------------------------------
// -------------------------------------------------
// ------------------------------------------------ */

// Working With Arrays //
// Coding Challange -- 1

const checkDogs = function (dogOne, dogTwo) {
  const dogOneSlice = dogOne.slice();
  dogOneSlice.splice(0, 1);
  dogOneSlice.splice(-2);
  const dog = dogOneSlice.concat(dogTwo);
  console.log(dog);
  console.log("==================");
  dog.forEach(function (dg, i) {
    if (dg > 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dg} years odl`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [11, 22, 13, 13, 14]);

console.log("********************************");
// Working With Arrays //
// Coding Challange -- 2 and 3

const calcAverageHumanAge2 = function (ages) {
  const humanAge = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAge.filter((age) => age >= 18);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
};

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => (acc + age) / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
//-------------------------------------//

//----------------/---------------------------//

console.log("=======================================");

// Working With Arrays //
// Coding Challange -- 4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating to ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "tittle"
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
const checkEtingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(checkEtingOkay);
// 7.
console.log(dogs.filter(checkEtingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

//-----------------------------------------------//
console.log("--------------xxxxxx------------");
//----------------------------------------------//

// Object Oriented Programming (OOP) //
// Coding Challange --- 1//

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Object Oriented Programming (OOP) //
// Coding Challange --- 2//

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  brake = function () {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

// Object Oriented Programming (OOP) //
// Coding Challange --- 3//
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

const tasla = new EV("Tesla", 120, 23);
console.log(tasla);
tasla.chargeBattery(90);
console.log(tasla);
tasla.brake();
tasla.accelerate();
