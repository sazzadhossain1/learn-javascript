// const airline = "TAP air portugal";
// const plane = "Bangla420";
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log(plane[4]);
// console.log(plane[5]);

// console.log("Airport"[0]);

// console.log(airline.length);
// console.log("Airport".length);

// const ar = "airPlane";
// let index = ar.indexOf("r");
// console.log(index);

// index = ar.indexOf("a");
// console.log(index);

// index = ar.indexOf("a");
// console.log(ar);

// let airIndex = airline.lastIndexOf("l");
// console.log(airIndex);

// airIndex = airline.indexOf("portugal");
// console.log(airIndex);

// console.log(airline.slice(8));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-3));
// console.log(airline.slice(1, -3));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats //
//   const s = seat.slice(-1);
//   if (s === "B" || s === "C") {
//     console.log("You got the middle seat");
//   } else {
//     console.log("You got lucky");
//   }
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("Sazzad"));
// console.log(typeof new String("Sazzad"));

// console.log(new String("Sazzad").slice(1));
// console.log(typeof new String("Sazzad").slice(1));
// console.log(typeof new String("Sazzad").slice(-1));

///////////////////////////////////////////////////////
//--------------------------------------------------//
/////////////////////////////////////////////////////

// -----> Warking with staring part - 2 <---- //

const airline = "Tap Air Portugal";

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// Fix capitalization in name //
const passenger = "saZaAd";
const passengeLower = passenger.toLowerCase();
// console.log(passengeLower);
const passengerCorect = passengeLower[0].toUpperCase() + passengeLower.slice(1);
console.log(passengerCorect);

// Comparing Email //
const email = "hello@sazzad.io";
const loginEmail = "  Hello@sazzad.Io \n";
// console.log(loginEmail);

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);

// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing //

const priceGB = "288,97";
const priceUs = priceGB.replace("97", "55$").replace(",", ".");
console.log(priceUs);

const annoouncement =
  "All passengers come to boarding door 23. Boarding door 23";
// console.log(annoouncement);
const replaceAnnouncement = annoouncement.replace("door", "gate");
console.log(replaceAnnouncement);

const replaceDoor = annoouncement.replaceAll("door", "Geat");
console.log(replaceDoor);
