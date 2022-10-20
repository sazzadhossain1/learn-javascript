//String
// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());

// // Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.sort((a, b) => b - a);
// console.log(movements);
//-----------------------------

// Sorting by another way
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });
// console.log(movements);
//----------------------------------------------
// My won practice //
const letter = [
  "a",
  "d",
  "c",
  "b",
  "g",
  "f",
  "h",
  "j",
  "i",
  "e",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "y",
  "x",
  "q",
  "s",
  "w",
  "u",
  "v",
  "z",
  "t",
  "a",
  "l",
  "s",
  "m",
  "o",
  "b",
  "y",
];

// remove duplicate number using filter function
const emptyArray = [];
function removeDuplicagtes(letterArray) {
  return emptyArray.push(
    letterArray.filter((le, i) => letterArray.indexOf(le) === i)
  );
}
removeDuplicagtes(letter);
console.log(emptyArray);

const flatMethod = emptyArray.flat();
const sortElement = flatMethod.sort().join(" ").toUpperCase();
console.log(sortElement);
