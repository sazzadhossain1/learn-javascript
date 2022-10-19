const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());

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

const flatMethod = emptyArray.flat().join(" ").toUpperCase();
console.log(flatMethod);
