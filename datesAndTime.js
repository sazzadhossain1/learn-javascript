const account1 = {
  owner: "Sazzad SHossain",
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
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// const accounts = [account1, account2, account3, account4];

const now = new Date();
// console.log(now);
// console.log(new Date("2022-10-22T20:56:36.869Z"));
// console.log(new Date("December 24,2015"));
// console.log(new Date("December 24,2015"));
// // console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142235380000));

// console.log(Date.now());

// future.setFullYear(2090);
// console.log(future);

// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date1 - date2) / (100 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);

const n = new Intl.DateTimeFormat("en-US").format(now);
const n1 = new Intl.DateTimeFormat("en-GB").format(now);
const n2 = new Intl.DateTimeFormat("ar-SY").format(now);
const n3 = new Intl.DateTimeFormat("bn-BD").format(now);
const n4 = new Intl.DateTimeFormat("pak-PI").format(now);
const n5 = new Intl.DateTimeFormat("hi-In-India").format(now);
console.log(n);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
//////////////////////////////////////////////////
/////////////////////////////////////
////////////////////////

// Hablu Programmer //
//-----------------//

// const myDate = new Date();
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
