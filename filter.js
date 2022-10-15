const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposites = movements.filter((mov) => {
//   return mov > 0;
// });
// console.log(deposites);

// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawal);
// //----------------------//

// const depo = [];
// const with1 = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depo.push(mov);
//   } else {
//     with1.push(mov);
//   }
// }

// console.log(depo);
// console.log(with1);

const dep = [];
const wit = [];
const depoAndWith = movements.map(function (mov) {
  if (mov > 0) {
    dep.push(mov);
  } else {
    wit.push(mov);
  }
});
console.log(dep);
console.log(wit);
