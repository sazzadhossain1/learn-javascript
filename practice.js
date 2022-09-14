// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };
// // const scoreDolphin = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphin, scoreKoalas);

// const checkWinner = function (avgDolphin, avgKoalas) {
//   if (avgDolphin >= 2 * avgKoalas) {
//     console.log(`Dolphine is winner ${avgDolphin} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphin) {
//     console.log(`Koalas is Winner ${avgKoalas} vs. ${avgDolphin}`);
//   } else {
//     console.log("The match is draw ");
//   }
// };
// const scoreDolphin = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// // checkWinner(scoreDolphin, scoreKoalas);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);
/////////////////////////////////////////

// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);
// const hasZero = arr.indexOf(1) > -1;
// console.log(hasZero);
// //////////////////////////////

// let x = 44;
// let y = 55;
// x = "sazzad";
// console.log(x);

///////////////////////////////////////////////////////////////
// JS Bangladesh //
// Array destructuring //
// const topPlayer = [
//   "V. kohli",
//   "R.G. Sharma",
//   "Babar Azam",
//   "L.R.P.L",
//   "F.du Plessis",
// ];

// // const [first, second, , , fifth] = topPlayer;
// // console.log(first, " ", second, " ", fifth);

// const [first, second, ...other] = topPlayer;
// console.log(first, second, other);

// // Object Destructuring //

// const topPlayer1 = {
//   name: "V.kohli",
//   rank: 1,
//   country: "India",
//   rating: 869,
//   team: {
//     national: "IND",
//     ipl: "RCB",
//   },
// };

// const { name: newName } = topPlayer1;
// console.log(newName);

// // const { national, ipl } = topPlayer1.team;
// // console.log(national, ipl);

// const { team } = topPlayer1;
// console.log(team);

// const { national, ipl = "BANGLADESH" } = team;
// console.log(national, ipl);

// const { name, rank, ...other1 } = topPlayer1;
// console.log(name, rank, other1);
// //..................................//

// // ata hocche old rulse //
// function printDetails(players) {
//   console.log(`${players.name} ${players.rank} ${players.country}`);
// }

// printDetails(topPlayer1);
// //...............................//

// // running rulse //

// function printDetailsNew({ name, rank, country }) {
//   return `${name} ${rank} ${country}`;
// }

// console.log(printDetailsNew(topPlayer1));

/////////////////////////////////////////////////////////////////
// Lear with shumit vai//
// Destructuring Object//

const user = {
  id: 339,
  name: "Sakib",
  age: 35,
  education: {
    degree: "Masters",
  },
};

// const { id: i, name: n, age: a } = user;
// const userId = i;
// const userName = n;
// const userAge = a;
// console.log(userId, userName, userAge);
/////////////////////////

// Nasted Object destructuring //
const { education } = user;
// const { degree } = education;
// console.log(degree); // --> ai same kaj ti arek vabe kora jay //
//...........................

// const { degree } = user.education;
// console.log(degree); // --> aro ak vabe kora jay //
//.........................

// const { education: { degree: d } = {} } = user;
// console.log(d);
///////////////////////////////////////////

// Array Destructuring //

const number = [1, 2, 3, 4, 5, 6];
const [, a, , , , b] = number;

console.log(a, b);
//................................

// Nasted Array Destructuring //

const num = [1, 2, [3, 100, 500], 4, 5, 6];

const [, , [, x, y], four, five, six] = num;
console.log(x, y, four, five, six);
