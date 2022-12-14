const oneWord = function (str) {
  return str.replace(/ /g, "").toUpperCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

// Js uses callbacks all the time....//
const high5 = function () {
  console.log("Hi");
};

document.body.addEventListener("click", high5);

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Youtube video from shumit vai //

// higher order function holo ----> akti function (peramiter) hisebe onno akta function ke nibe othoba onno akta function ke return korbe.......nicher tir moto.....ati ke bola hoy higher order function.....//

// function hello() {
//   return function () {
//     console.log(`Hello World`);
//   };
// }

// hello()();

// // Example 1 without higher order function //

// // let numbers = [10, 20, 30, 40, 50];

// // let result = [];

// // for (let i = 0; i < numbers.length; i++) {
// //   const multiple = numbers[i] * 2;
// //   result.push(multiple);
// // }
// // console.log(result);

// // Example 1 with higher order function //

// let numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(function (number) {
//   return number * 4;
// });
// console.log(result);

// //---------------------------------------//

// // Example 2 withOut higher order function //

// const players = [
//   {
//     name: "sakib",
//     avg: 55.33,
//   },

//   {
//     name: "Tamim",
//     avg: 4.4,
//   },
//   {
//     name: "Mushfiq",
//     avg: 3.4,
//   },
//   {
//     name: "Mahmudullah",
//     avg: 40.55,
//   },
// ];

// // const playersWithAvgForty = [];

// // for (let i = 0; i < players.length; i++) {
// //   if (players[i].avg > 40) {
// //     playersWithAvgForty.push(players[i]);
// //   }
// // }
// // console.log(playersWithAvgForty);

// //=-------------------------------------------=//

// // Example 2 with higher order function //

// const playersWithAvgForty = players.filter((player) => player.avg >= 40);
// console.log(playersWithAvgForty);

// // Example 3 array.map() built in by me ===> higher order function //

// const languages = ["Javascript", "python", "PHP", "C"];

// function mapSazzad(arr, fn) {
//   const newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(fn(arr[i]));
//   }
//   return newArray;
// }

// const myArray = mapSazzad(languages, function (languages) {
//   return languages.length;
// });

// console.log(myArray);

// ///////////////////////////////////////////////////
// //////////////////////////////////////////////////
// /////////////////////////////////////////////////
