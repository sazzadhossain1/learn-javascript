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
