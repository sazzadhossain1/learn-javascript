// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"][("GBP", "Pound Sterling")],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2));

// SLICE //
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(1, 3));

// console.log(arr.slice());

// console.log(...arr);
// console.log([...arr]);

// SPLICE; //
// let arr = ["a", "b", "c", "d", "e"];
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE; //
// let arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// arr2.reverse();
// console.log(arr2);

// console.log(...arr, " ", ...arr2);

// CONCAT //
// const letters = arr.concat(arr2);
// console.log(letters);

// console.log(...letters);
// console.log(...arr, ...arr2);

// // JOIN //
// console.log(letters.join(" == "));

///////////////////////////////////////////////////
/////////////////////////////////////
////////////////////////

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// getting last array element //
// console.log(arr[arr.length - 1]);
// console.log(arr[arr.length - 2]);
// console.log(arr[arr.length - 3]);

// console.log(...arr.slice(-1));
// console.log(...arr.slice(-2));
// console.log(...arr.slice(-3));

// getting last element with (at) method //
// console.log(arr.at(-1));
// console.log(arr.at(-2));
// console.log(arr.at(-3));

// at method with string//
// let name = "Yeasin";
// console.log(name.at(0));
// console.log(name.at(-1));
// console.log(name.at(-2));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You dposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log("============ FOREACH ============");

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} You Withdraw ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound Sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////

const checkDogs = function (dogsjulia, dogsKate) {
  const dogsjuliaCorrected = dogsjulia.slice();
  dogsjuliaCorrected.splice(0, 1);
  dogsjuliaCorrected.splice(-2);

  // dogsjuliaCorrected.slice(1, 3);
  console.log(dogsjuliaCorrected);

  const dogs = dogsjuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog numbe ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////////////////////////

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map((mov) => {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

console.log(movements);
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
  console.log(movementsUSDfor);
}

const movDescriptions = movements.map(function (mov, i) {
  `Movement ${
    i + 1
  }: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`;

  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movDescriptions);

///////////////////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////

/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////

// anisul islam sir by youtube //
//----------------------------//

// const number = [12, 22, 33, 44, 55, 66];
// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// console.log("================ FOREACH =============");
// // same kaj ti for Each er maddhome korbo //
// number.forEach(function (num, i, arr) {
//   console.log(`Number ${i}. ${num} `);
// });

// //--------------------------------//

// const numbers = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
// const removeDuplicate = new Set(numbers);
// const receveNumber = [];

// removeDuplicate.forEach(function (num) {
//   receveNumber.push(num * num);
//   // console.log(receveNumber);
// });

// console.log(receveNumber);

// ////////////////////////////////////////////////

// const newNumbe = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10];

// const duplicateNum = new Set(newNumbe);
// const plusNumber = [];
// duplicateNum.forEach(function (n, i, a) {
//   plusNumber.push((a[i] = n + 5));
// });
// console.log(plusNumber);

// ////////////////////////////////////////////////////////

// const amountNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// const revNum = new Set(amountNumber);
// const empty = [];
// revNum.forEach(function (n, i, a) {
//   empty.push((a[i] = n * n));
// });
// console.log(revNum);
// //////////////////////////////////////////

// const pls = [];
// revNum.forEach(function (n, i, a) {
//   pls.push(n + 5);
// });

// console.log(pls);

////////////////////////////////////////////////
//////////////////////////////////
////////////////////
