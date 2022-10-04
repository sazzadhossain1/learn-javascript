// // const calcAverage = (a, b, c) => {
// //   return (a + b + c) / 3;
// // };
// // // const scoreDolphin = calcAverage(44, 23, 71);
// // // const scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(scoreDolphin, scoreKoalas);

// // const checkWinner = function (avgDolphin, avgKoalas) {
// //   if (avgDolphin >= 2 * avgKoalas) {
// //     console.log(`Dolphine is winner ${avgDolphin} vs. ${avgKoalas}`);
// //   } else if (avgKoalas >= 2 * avgDolphin) {
// //     console.log(`Koalas is Winner ${avgKoalas} vs. ${avgDolphin}`);
// //   } else {
// //     console.log("The match is draw ");
// //   }
// // };
// // const scoreDolphin = calcAverage(85, 54, 41);
// // const scoreKoalas = calcAverage(23, 34, 27);

// // // checkWinner(scoreDolphin, scoreKoalas);

// // const calcTip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // };
// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(bills, tips, total);
// /////////////////////////////////////////

// // const arr = [1, 2, 3];
// // arr.push(4);
// // console.log(arr);
// // const hasZero = arr.indexOf(1) > -1;
// // console.log(hasZero);
// // //////////////////////////////

// // let x = 44;
// // let y = 55;
// // x = "sazzad";
// // console.log(x);

// ///////////////////////////////////////////////////////////////
// // JS Bangladesh //
// // Array destructuring //
// // const topPlayer = [
// //   "V. kohli",
// //   "R.G. Sharma",
// //   "Babar Azam",
// //   "L.R.P.L",
// //   "F.du Plessis",
// // ];

// // // const [first, second, , , fifth] = topPlayer;
// // // console.log(first, " ", second, " ", fifth);

// // const [first, second, ...other] = topPlayer;
// // console.log(first, second, other);

// // // Object Destructuring //

// // const topPlayer1 = {
// //   name: "V.kohli",
// //   rank: 1,
// //   country: "India",
// //   rating: 869,
// //   team: {
// //     national: "IND",
// //     ipl: "RCB",
// //   },
// // };

// // const { name: newName } = topPlayer1;
// // console.log(newName);

// // // const { national, ipl } = topPlayer1.team;
// // // console.log(national, ipl);

// // const { team } = topPlayer1;
// // console.log(team);

// // const { national, ipl = "BANGLADESH" } = team;
// // console.log(national, ipl);

// // const { name, rank, ...other1 } = topPlayer1;
// // console.log(name, rank, other1);
// // //..................................//

// // // ata hocche old rulse //
// // function printDetails(players) {
// //   console.log(`${players.name} ${players.rank} ${players.country}`);
// // }

// // printDetails(topPlayer1);
// // //...............................//

// // // running rulse //

// // function printDetailsNew({ name, rank, country }) {
// //   return `${name} ${rank} ${country}`;
// // }

// // console.log(printDetailsNew(topPlayer1));

// /////////////////////////////////////////////////////////////////
// // Lear with shumit vai//
// // Destructuring Object//

// // s

// // const { id: i, name: n, age: a } = user;
// // const userId = i;
// // const userName = n;
// // const userAge = a;
// // console.log(userId, userName, userAge);
// /////////////////////////

// // Nasted Object destructuring //
// // const { education } = user;
// // const { degree } = education;
// // console.log(degree); // --> ai same kaj ti arek vabe kora jay //
// //...........................

// // const { degree } = user.education;
// // console.log(degree); // --> aro ak vabe kora jay //
// //.........................

// // const { education: { degree: d } = {} } = user;
// // console.log(d);
// ///////////////////////////////////////////

// // Array Destructuring //

// // const number = [1, 2, 3, 4, 5, 6];
// // const [, a, , , , b] = number;

// // console.log(a, b);
// //................................

// // Nasted Array Destructuring //

// // const num = [1, 2, [3, 100, 500], 4, 5, 6];

// // const [, , [, x, y], four, five, six] = num;
// // console.log(x, y, four, five, six);
// //////////////////////////////////////////

// // const numberCopy = [...number, 7, 8, 9];
// // console.log(numberCopy);

// // number.push(22, 33, 44);
// // console.log(number);
// // console.log(numberCopy);

// // const number2 = [10, 11, 12, 13];
// // const addNumber = [...numberCopy, ...number2];
// // console.log(addNumber);

// /////////////////////////////////////////////
// // --> rest paramiters  <-- //

// // function myFun(a, ...b) {
// //   // console.log(a, b);
// // }
// // myFun(1, 2, 3, 4);

// // challange by google meet ---> parinai //
// // const num = [1, 2, 3, 4, 5];

// // function number(arr, index) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr.length >= 5) {
// //       console.log(arr[i]);
// //     }
// //   }
// // }

// // number(num, 3);

// // const arr1 = [1, 1, 2, 3, 4, 5, 6];
// // const arr2 = new Set([1, 11, 22, 3, 33, 3, 11, 22]);
// // console.log(arr2);
// // for (const i of arr2) {
// //   console.log(i * 10);
// // }
// // arr2.add("Hello");
// // arr2.add("Sazzad");
// // arr2.add("Hossain");
// // arr2.add("Tomal");
// // arr2.add("Shoikot");
// // arr2.delete("Shoikot");
// // console.log(arr2);

// // for (const x of arr2) {
// //   console.log(x);
// // }

// // const convertSet = new Set(arr1);
// // console.log(convertSet);
// // console.log(arr2);

// // function brickCount(parFloor) {
// //   const perFit = 1000;
// //   const first10TotalFloor = 15;
// //   const secondTotalFloor = 12;
// //   if (parFloor <= 10) {
// //     const totalFloorFeet = parFloor * first10TotalFloor;
// //     console.log(totalFloorFeet);
// //     const totalBrick = totalFloorFeet * perFit;
// //     console.log(totalBrick);
// //   } else if (parFloor <= 40) {
// //     const first10Floor = 10 * first10TotalFloor;
// //     const total = first10Floor * perFit;

// //     const totalFloorFeet = parFloor * secondTotalFloor;
// //     const first10Minus = totalFloorFeet - first10Floor;
// //     const totalBrick = first10Minus * perFit;

// //     const totalBrickResult = total + totalBrick;

// //     console.log(totalBrickResult);
// //   }
// // }

// // brickCount(40);

// // for (let i = 1; i < 20; i++) {
// //   if (i % 3 == 0 && i % 5 == 0) {
// //     console.log("sazzad the choto vai of nasir vai");
// //   } else if (i % 3 == 0) {
// //     console.log("sazzad");
// //   } else if (i % 5 == 0) {
// //     console.log("nasir vai");
// //   } else {
// //     console.log(i);
// //   }
// // }
// //---------------------------------//
// // let userName = prompt("Enter your name");
// // let userName2 =  "Blank user name";
// // let userName3 =  userName2 ||

// // if (userName == userName || userName2 == userName2) {
// //   alert("login done");
// // } else {
// //   alert("Blank user name");
// // }

// //------------------------------------------//
// // while loop //
// // let i = 10;
// // while (i > 0) {
// //   console.log(i);
// //   i--;
// // }

// // for (let i = 0; i < 10; i++) {
// //   if (i == 5) {
// //     continue;
// //   }
// //   console.log(i);
// // }

// // let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // number1[1] = 30;
// // // console.log(number1);

// // // let num1 = number1.length;
// // // console.log(num1);

// // // number1.shift();
// // // number1.unshift(12);
// // number1.splice(4, 1);
// // console.log(number1);

// // let first = 10;
// // let second = 20;

// // let team = first;
// // first = second;

// // second = team;
// // console.log(first, second);

// // [first, second] = [second, first];
// // console.log(first, second);
// //-----------------------------------------//
// // Task - 1 //

// const number = [2, 3, 4, 5, 6, 700, 8, 9, 10];
// // for (let i = 0; i < number.length; i++) {
// //   let add = number[i] + i;
// //   console.log(add);
// // }

// // const maxNumber = Math.max(...number);
// // console.log(maxNumber);

// // let maxNumber = [0];
// let minNumber = [0];

// for (num of number) {
//   // if (num > maxNumber) {
//   //   maxNumber = num;
//   // }
//   if (num < minNumber) {
//     minNumber = num;
//   }
// }
// // console.log(maxNumber);
// console.log(minNumber);

// // const minNumber = Math.min(...number);
// // console.log(minNumber);

const arry = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9, 2];
let n = 0;
for (let i = 0; i < arry.length; i++) {
  if (arry[i] > n) {
    n = arry[i];
    console.log(n);
  }
}
