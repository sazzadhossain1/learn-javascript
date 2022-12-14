const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Sazzad Hossain Tomal");
lufthansa.book(1212, "Shah Mohammad Yeasin Hossain");
console.log(lufthansa.bookings);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const books = lufthansa.book;
console.log(books);

// Call Method... //
books.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

books.call(lufthansa, 239, "Mohammad Yeasin");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

books.call(swiss, 583, "Umme khadijatul Jannat");
console.log(swiss);

const flightData = [583, "George Cooper"];
books.apply(swiss, flightData);
console.log(swiss);

books.call(swiss, ...flightData);

// Bind method //
// book.call(eurowings,23, 'Sarah williams')

const bookEw = books.bind(eurowings);
const bookLH = books.bind(lufthansa);
const bookLX = books.bind(swiss);

bookEw(23, "Steven williams");

const bookEw23 = books.bind(eurowings, 23);
bookEw23("Sazzad Hossain");
bookEw23("Yeasin Hossain");
bookEw23("Anwar Hossain");

lufthansa.planes = 300;
lufthansa.BuyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.BuyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.BuyPlane.bind(lufthansa));

const addTex = (rate, value) => value + value * rate;
console.log(addTex(0.1, 200));

const addVAT = addTex.bind(null, 0, 23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTexRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTexRate(0, 23);
console.log(addVAT2(100));
console.log(addVAT2(23));

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Youtube video theke kora by (learn with shumit vai) //

// let printPlayerName = function (name) {
//   console.log(name);
// };

// printPlayerName("Sazzad Hossain Tomal");

// Implicit Binding //
//-----------------//

// let sazzad = {
//   name: "Sazzad",
//   age: 26,
//   printPlayerName: function () {
//     console.log(`Hi's name is ${this.name} and hi's age is ${this.age}`);
//   },
// };
// sazzad.printPlayerName();

// let printPlayerNameFunction = function (obj) {
//   obj.printPlayerName = function () {
//     console.log(this.name, this.age);
//   };
// };

// let sakib = {
//   name: "Sakib",
//   age: 35,
// };
// let tamim = {
//   name: "Tamim",
//   age: 30,
// };

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();

////////////////////////////////////////

// let person = function (name, age) {
//   return {
//     name: name,
//     age: age,
//     printName: function () {
//       console.log(this.name, this.age);
//     },
//     father: {
//       name: "Anwar Hossain",
//       age: 60,
//       printFatherName: function () {
//         console.log(
//           `My father name is ${this.name} and My father age is ${this.age}`
//         );
//       },
//     },
//   };
// };

// let sazzad = person("sazzad", 26);
// sazzad.printName();

// sazzad.father.printFatherName();

////////////////////////////////////////////////

// Explicit Binding //

// const printName = function (v1, v2, v3) {
//   console.log(`${this.name} is ${v1} ${v2} and ${v3}`);
// };

// let sakib = {
//   name: "Sakib Al Hasan",
//   age: 35,
// };

// let v1 = "Handsome";
// let v2 = "All-Rounder";
// let v3 = "Best Player";

// printName.call(sakib, v1, v2, v3); // ===> call method kokhon array pass korte pare na....akhon jodi amra v1 v2 and v3 ke akta array er vitore rekhe printName function er vitore argument hishebe pass korte chai tahole amader apply methode use korte hobe......karon call method array pass korte pare na......ai jonno apply method use korte hobe......

// let v = [v1, v2, v3];
// console.log(v);

// printName.apply(sakib, v);

// bind method shorashori function ke call kore na...bind ashole call er motoni kaj kore kintu function ke direct call na kore return kore day........

// let newFun = printName.bind(sakib, v1, v2, v3);
// newFun();

//////////////////////////////////////////////////////////////

// let printName = function () {
//   console.log(this.name);
// };

// let sakib = {
//   name: "sakib",
// };
// printName();
