const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const blance = movements.reduce((acc, cur, i, arr) => {
//   return acc + cur;
// }, 0);
// console.log(blance);
//-------------------------

// arrow function //
//---------------//
// const blance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(blance);
//-------------------------------

// let blance2 = 0;
// for (const mov of movements) {
//   blance2 = blance2 + mov;
// }
// console.log(blance2);

// find max number from the array //
//-------------------------------//
// const max = movements.reduce(function (acc, value) {
//   if (acc < value) {
//     return value;
//   } else {
//     return acc;
//   }
// });
// console.log(max);
//---------------------------------//

// Find min number from the array //
//--------------------------------//

// const min = movements.reduce((acc, value) => {
//   return Math.min(acc, value);
// });
// console.log(min);

//---------------------------------//

const max = movements.reduce((acc, val) => {
  return Math.max(acc, val);
});
console.log(max);

const min = movements.reduce(function (acc, val) {
  return Math.min(acc, val);
});
console.log(min);

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
// const numbers = [12, 25, 46, 27, 32, 2000];
// const votes = ["yes", "No", "Yes", "Yes", "Yes", "No", "Absent"];

// const sum = numbers.reduce(function (acc, vol) {
//   return acc + vol;
// });

// console.log(sum);

// // Find max number from array //
// const max = numbers.reduce((acc, val) => {
//   if (acc > val) {
//     return acc;
//   } else {
//     return val;
//   }
// });

// console.log(max);

// // Find min number from array //
// const min = numbers.reduce((acc, val) => {
//   if (acc < val) {
//     return acc;
//   } else {
//     return val;
//   }
// });
// console.log(min);

// // find max number from number-array with another away //

// const max1 = numbers.reduce(function (acc, val) {
//   return Math.max(acc, val);
// });

// console.log(max1);

// // find min number from number-array with another away //

// const min1 = numbers.reduce((a, v) => Math.min(a, v));
// console.log(min1);

// //------------------------------------

const products = [
  {
    name: "Pen",
    mount: 5,
    price: 10,
  },
  {
    name: "Book",
    mount: 3,
    price: 300,
  },
  {
    name: "NoteBook",
    mount: 2,
    price: 50,
  },
];

// const totalPrice = products.reduce(function (acc, item) {
//   return acc + item.mount * item.price;
// }, 0);
// console.log(totalPrice);

const totalPrice = products.reduce((acc, val) => {
  return acc + val.mount * val.price;
}, 0);
console.log(totalPrice);
