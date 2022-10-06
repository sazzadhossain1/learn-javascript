const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Sazzad Hossain Tomal");
lufthansa.book(239, "Sazzad Tomal");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "Ew",
  booking: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, "Sarah williams");

// Call Method //
book.call(eurowings, 23, "Sarah williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  booking: [],
};

book.call(swiss, 583, "Mary cooper");
console.log(swiss);
