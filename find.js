const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(function (mov) {
//   if (mov < 0) {
//     console.log(mov);
//   }
// });

// console.log(movements);
// console.log(firstWithdrawal);

const firstWithdrawal = movements.find(function (mov) {
  return mov < 0;
});
// console.log(firstWithdrawal);

//........................................

const account1 = {
  owner: "Sazzad Hossain",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  // owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// console.log(accounts);

// const account = accounts.find((acc) => {
//   return acc.owner === "Sazzad Hossain";
// });

// console.log(account);

// const account = accounts.find(function (acc) {
//   if (acc.owner) {
//     console.log(acc.owner);
//   }
// });

// practice part //
//--------------//

// const account = accounts.find((acc) => {
//   return acc.owner === "Sazzad Hossain";
// });
// console.log(account);

const account = accounts.find((acc) => {
  if (acc.owner) {
    console.log(acc.owner);
  } else {
    console.log(acc.pin);
  }
});

// console.log(account);

// const movement = movements.find((mov) => {
//   return mov < 0;
// });
// console.log(movement);

const movement = movements.find((mov) => {
  if (mov < 0) {
    console.log(`This ${mov} is small `);
  } else {
    console.log(`This ${mov} is Big`);
  }
});
// console.log(movement);
