// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const blance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(blance);

//arro function//
// const blance = movements.reduce((acc, cur, i, arr) => {
//   return acc + cur;
// }, 0);

// console.log(blance);

///

// let blance2 = 0;
// for (const mov of movements) {
//   blance2 += mov;
//   console.log(blance2);
// }

// Max number//
// const max = movements.reduce(function (acc, mov) {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

///////////////////////////////////////////////////////////
///////////////////////////////////////////////
////////////////////////////

// learn with sumit vai //
//----------------------//
// const number = [1, 2, 3, 4, 5, 6];

// const sum1 = number.reduce(function (pv, cv, ci, arr) {
//   return pv + cv;
// }, 0);

// console.log(sum1);

// JS Bangladesh //
//--------------//
const numbers = [12, 25, 46, 27, 32, 2000];
const votes = ["yes", "No", "Yes", "Yes", "Yes", "No", "Absent"];

const sum = numbers.reduce(function (acc, vol) {
  return acc + vol;
});

console.log(sum);

// Find max number from array //
const max = numbers.reduce((acc, val) => {
  if (acc > val) {
    return acc;
  } else {
    return val;
  }
});

console.log(max);

// Find min number from array //
const min = numbers.reduce((acc, val) => {
  if (acc < val) {
    return acc;
  } else {
    return val;
  }
});
console.log(min);
