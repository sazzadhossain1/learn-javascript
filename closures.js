// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// Example - 1 //

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example - 2 //

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////

// Another some example from (Lear With Shumit vai) youtube chanel //
//---------------------------------------------------------//

// let a;
function myFunction() {
  let a = 4;
  return a * a;
}

console.log(myFunction());

//....................................//

// let counter = 0; // Global variable // ai variable ke jekono jayga theke access kora jabe //
// function add() {
//   // return counter++;
//   counter++;
// }

// console.log(add());
// console.log(add());
// console.log(add());

// add();
// add();
// add();
// add();
// add();

// akhon ami ai function ke call na kore o counter er man barate parbo karon (counter) variable ti holo global variable // ami jodi akhon (counter++) kore dei othoba (counter = 5) dei tahole (counter) er man change hoye jabe.....// jemon --->
// counter++;
// console.log(counter); //-----> ai khane counter er man dekhabe (6) tar karon function ke (5) times call kora hoyeche abong (counter) ke (++) kora hoyeche....////

// ami jodi function ke call kora charai function er baire theke (counter) variable er man change korte pari tahole to amar function ke r kono dorkar nai,,,,,tai (counter) variable ke function er vitor theke likhte hobe....tahole (counter) variable block scope hoye jabe...tokhon (counter) variable ke r baire theke change kora jabe na.....

//-----------------------------------------//

// function add() {
//   let counter = 0;
//   counter++;
//   return counter;
// }

// console.log(add());
// console.log(add());
// console.log(add());

// console.log(add());
// console.log(add());
// console.log(add());

// akhon amra ai function ke joto bar call kori toto bari result (1) hobe // ---> ( 1 2 3 ) aivabe kore man barbe na// karon jotobar function ke call kora hocche totobar e (counter) theke start hocche // aknon ai problem theke bachar upay holo (Nested Function) mane function er vitore aarek ta fucntion use korte hobe //

//--------------------------------------//
//NESTED FUNCTION//

function temporary() {
  let counter = 0;

  return function () {
    counter++;
  };
}

const add = temporary();

console.dir(add);
add();
// console.dir(add);
add();
// console.dir(add);
add();
