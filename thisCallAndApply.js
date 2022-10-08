// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Sazzad Hossain Tomal");
// lufthansa.book(1212, "Shah Mohammad Yeasin Hossain");
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };
// const books = lufthansa.book;
// console.log(books);

// // Call Method... //
// books.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// books.call(lufthansa, 239, "Mohammad Yeasin");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// books.call(swiss, 583, "Umme khadijatul Jannat");
// console.log(swiss);

// const flightData = [583, "George Cooper"];
// books.apply(swiss, flightData);
// console.log(swiss);

// books.call(swiss, ...flightData);

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Youtube video theke kora by (learn with shumit vai) //
