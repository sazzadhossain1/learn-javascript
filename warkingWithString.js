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
// console.log(passengerCorect);

// Comparing Email //
const email = "hello@sazzad.io";
const loginEmail = "  Hello@sazzad.Io \n";
// console.log(loginEmail);

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);

// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// Replacing //

const priceGB = "288,97";
const priceUs = priceGB.replace("97", "55$").replace(",", ".");
// console.log(priceUs);

const annoouncement =
  "All passengers come to boarding door 23. Boarding door 23";
// console.log(annoouncement);
const replaceAnnouncement = annoouncement.replace("door", "gate");
// console.log(replaceAnnouncement);

const replaceDoors = annoouncement.replace(/door/g, "dorja");
// console.log(replaceDoors);

const replaceDoor = annoouncement.replaceAll("door", "Geat");
// console.log(replaceDoor);

// Booleans //
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Booing"));
console.log(plane.startsWith("A320"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("Air"));
console.log(plane.endsWith("A320"));
console.log(plane.endsWith("neo"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("part of the NEW Airbus family");
}

// Practice exercise //
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on board");
//   } else {
//     console.log("Welcome to the Board");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on bord");
  } else {
    console.log("Welcome to the board");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

///////////////////////////////////////////////////////
//--------------------------------------------------//
/////////////////////////////////////////////////////

// -----> Warking with staring part - 3 <---- //

// // Split and Join //

// Youtube sorces //
// const str = "Muhammad sazzad hossain tomal";
// const strArray = str.split(" ");
// console.log(strArray);

////////////////////////////////////////////////

console.log("a+very+nice+string".split("+"));
console.log("sazzad hossain".split(" "));

const [firstName, lastName] = "SaZzad TOmaL".split(" ");
console.log(firstName, lastName);
console.log(typeof firstName, typeof lastName);

// const newName = [firstName,lastName];
// console.log(newName);

const newName1 = [
  "Mr.",
  firstName[0].toUpperCase() + firstName.toLowerCase().slice(1),
  lastName[0].toUpperCase() + lastName.toLowerCase().slice(1),
].join(" ");
console.log(newName1);

const capitalizeName = function (name) {
  const names = name.split(" ");
  // console.log(names);
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // another way //
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join("------ "));
};

capitalizeName("jessica an smith davis");
capitalizeName("sazzad hoaasin tomalo");

const sazzad = "sazzad hossain tomal";
const yeasin = "sha mohammad yeasin hossain";
const jannat = "umme khadijatul jannat";

function capitalName(name) {
  const names = name.split(" ");
  // console.log(names);
  const newName = [];
  for (const n of names) {
    newName.push(n[0].toUpperCase() + n.slice(1));
  }
  const jo = newName.join(" ");
  console.log(jo);
}

capitalName(sazzad);
capitalName(yeasin);
capitalName(jannat);
