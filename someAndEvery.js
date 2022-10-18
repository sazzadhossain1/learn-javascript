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
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);
// console.log(movements.includes(200));

// console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));
console.log(account4.movements.every((m) => m > 0));
////////////////////////////////////////////////////////
//=======================================
/////////////////////////////////////////////
//============================
//////////////////////////////////

// Practice by youtube channel from Js Bangladesh

// const numbers = [12, 25, 45, 27, 32];
// const names = ["dog", "cats", "bats", "rats", "bird"];

// const students = [
//   { name: "Rahim", number: 70, subject: "Math" },
//   { name: "karim", number: 85, subject: "Math" },
//   { name: "Ram", number: 30, subject: "English" },
//   { name: "Shyam", number: 80, subject: "Bangla" },
//   { name: "Jodu", number: 75, subject: "Bangla" },
//   { name: "Modhu", number: 40, subject: "Bangla" },
// ];

// const lessThen20 = numbers.every(function (num) {
//   return num < 20;
// });
// console.log(lessThen20); // ---> aikhane condition deya hoyeche (num jodi 20 er chaite kom hoy).kintu numbers array te shudhu 12 bade baki shob gula e 20 er chaite boro...aikhane result ashbe (false) karon amra aikhane (every) method use korechi...aikhane result tokhoni (true) ashto jokhon protita number e 20 er chite kom hoto.....(akhon jodi amra result true ante chai tahole amader (soem) method use korte hobe).

// // jemon //

// const someMethod = numbers.some((num) => num < 20);
// console.log(someMethod); // ---> aikhane jei condition use kora hoyeche,tarporeo result ashbe (true).tar karon aikhane amra (some) methos use korechi.(some method) mane hocche condition er jekono akta (true) holei result hobe true...
// //--------------------------------------------------------------

// // Every Method
// const namesEveryMethod = names.every((nam) => nam.length === 3);
// console.log(namesEveryMethod);

// const namesEveryMethod1 = names.every(
//   (nam) => nam.length === 3 || nam.length === 4
// );
// console.log(namesEveryMethod1);

// // Some Method
// const namesSomeMethod = names.some((nam) => nam.length === 3);
// console.log(namesSomeMethod);
// //-----------------------------------------------------------

// // Every Method
// const studentsInformation = students.every((stu) => stu.name === "Rahim");
// console.log(studentsInformation);

// const sIM = students.every((std) => std.number < 100);
// console.log(sIM);

// const std = students.every((student) => student.number === 33);
// console.log(std);

// // Some Method
// const studentSome = students.some((stu) => stu.name === "Rahim");
// console.log(studentSome);

// const studentSome1 = students.some((stu) => stu.number <= 33);
// console.log(studentSome1);
// //----------------------------------------------------------------

// const hasFail = students.some(function (fail) {
//   return fail.number < 33;
// });
// console.log(hasFail);
