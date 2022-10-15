const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposites = movements.filter((mov) => {
  return mov > 0;
});
console.log(deposites);

const withdrawal = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawal);
