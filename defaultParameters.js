"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 10,
  price = 10000 * numPassengers
) {
  // default peramiter//-----> ES5.
  //   numPassengers = numPassengers || "sazzad";
  //   price = price || 1;
  //-------------------------------------------//

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 20, 20000);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000);

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

// How Passing Arguments Works...

const flight = "LH234";
const sazzad = {
  name: "Sazzad Hossain Tomal",
  passport: 5212122121211111,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LiiIii";
  passenger.name = "Mr." + passenger.name;
  //   console.log(passenger.name);

  if (passenger.passport === 5212122121211111) {
    console.log("Checked in ");
  } else {
    console.log("Wrong Passport!");
  }
};

// checkIn(flight, sazzad);
// console.log(flight);
// console.log(sazzad);

// const flightNum = flight;
// const passenger = sazzad;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
  console.log(person);
};

newPassport(sazzad);
checkIn(flight, sazzad);
