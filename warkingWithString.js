// // const airline = "TAP air portugal";
// // const plane = "Bangla420";
// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);
// // console.log(plane[3]);
// // console.log(plane[4]);
// // console.log(plane[5]);

// // console.log("Airport"[0]);

// // console.log(airline.length);
// // console.log("Airport".length);

// // const ar = "airPlane";
// // let index = ar.indexOf("r");
// // console.log(index);

// // index = ar.indexOf("a");
// // console.log(index);

// // index = ar.indexOf("a");
// // console.log(ar);

// // let airIndex = airline.lastIndexOf("l");
// // console.log(airIndex);

// // airIndex = airline.indexOf("portugal");
// // console.log(airIndex);

// // console.log(airline.slice(8));
// // console.log(airline.slice(4, 7));

// // console.log(airline.slice(0, airline.indexOf(" ")));
// // console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// // console.log(airline.slice(-3));
// // console.log(airline.slice(1, -3));

// // const checkMiddleSeat = function (seat) {
// //   // B and E are middle seats //
// //   const s = seat.slice(-1);
// //   if (s === "B" || s === "C") {
// //     console.log("You got the middle seat");
// //   } else {
// //     console.log("You got lucky");
// //   }
// // };

// // checkMiddleSeat("11B");
// // checkMiddleSeat("23C");
// // checkMiddleSeat("3E");

// // console.log(new String("Sazzad"));
// // console.log(typeof new String("Sazzad"));

// // console.log(new String("Sazzad").slice(1));
// // console.log(typeof new String("Sazzad").slice(1));
// // console.log(typeof new String("Sazzad").slice(-1));

// ///////////////////////////////////////////////////////
// //--------------------------------------------------//
// /////////////////////////////////////////////////////

// // -----> Warking with staring part - 2 <---- //

// const airline = "Tap Air Portugal";

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// // Fix capitalization in name //
// const passenger = "saZaAd";
// const passengeLower = passenger.toLowerCase();
// // console.log(passengeLower);
// const passengerCorect = passengeLower[0].toUpperCase() + passengeLower.slice(1);
// // console.log(passengerCorect);

// // Comparing Email //
// const email = "hello@sazzad.io";
// const loginEmail = "  Hello@sazzad.Io \n";
// // console.log(loginEmail);

// // const lowerEmail = loginEmail.toLowerCase();
// // console.log(lowerEmail);

// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// // console.log(normalizedEmail);

// // Replacing //

// const priceGB = "288,97";
// const priceUs = priceGB.replace("97", "55$").replace(",", ".");
// // console.log(priceUs);

// const annoouncement =
//   "All passengers come to boarding door 23. Boarding door 23";
// // console.log(annoouncement);
// const replaceAnnouncement = annoouncement.replace("door", "gate");
// // console.log(replaceAnnouncement);

// const replaceDoors = annoouncement.replace(/door/g, "dorja");
// // console.log(replaceDoors);

// const replaceDoor = annoouncement.replaceAll("door", "Geat");
// // console.log(replaceDoor);

// // Booleans //
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Booing"));
// console.log(plane.startsWith("A320"));
// console.log(plane.startsWith("Air"));
// console.log(plane.endsWith("Air"));
// console.log(plane.endsWith("A320"));
// console.log(plane.endsWith("neo"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("part of the NEW Airbus family");
// }

// // Practice exercise //
// // const checkBaggage = function (items) {
// //   const baggage = items.toLowerCase();
// //   if (baggage.includes("knife") || baggage.includes("gun")) {
// //     console.log("You are not allowed on board");
// //   } else {
// //     console.log("Welcome to the Board");
// //   }
// // };

// // checkBaggage("I have a laptop, some Food and a pocket Knife");
// // checkBaggage("Socks and camera");
// // checkBaggage("Got some snacks and a gun for protection");

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on bord");
//   } else {
//     console.log("Welcome to the board");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// ///////////////////////////////////////////////////////
// //--------------------------------------------------//
// /////////////////////////////////////////////////////

// // -----> Warking with staring part - 3 <---- //

// // // Split and Join //

// // Youtube sorces //
// // const str = "Muhammad sazzad hossain tomal";
// // const strArray = str.split(" ");
// // console.log(strArray);

// ////////////////////////////////////////////////

// console.log("a+very+nice+string".split("+"));
// console.log("sazzad hossain".split(" "));

// const [firstName, lastName] = "SaZzad TOmaL".split(" ");
// console.log(firstName, lastName);
// console.log(typeof firstName, typeof lastName);

// // const newName = [firstName,lastName];
// // console.log(newName);

// const newName1 = [
//   "Mr.",
//   firstName[0].toUpperCase() + firstName.toLowerCase().slice(1),
//   lastName[0].toUpperCase() + lastName.toLowerCase().slice(1),
// ].join(" ");
// console.log(newName1);

// // const capitalizeName = function (name) {
// //   const names = name.split(" ");
// //   // console.log(names);
// //   const namesUpper = [];
// //   for (const n of names) {
// //     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
// //     // another way //
// //     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
// //   }
// //   console.log(namesUpper.join("------ "));
// // };

// // capitalizeName("jessica an smith davis");
// // capitalizeName("sazzad hoaasin tomalo");

// const sazzad = "sazzad hossain tomal";
// const yeasin = "sha mohammad yeasin hossain";
// const jannat = "umme khadijatul jannat";

// function capitalName(name) {
//   const names = name.split(" ");
//   // console.log(names);
//   const newName = [];
//   for (const n of names) {
//     newName.push(n[0].toUpperCase() + n.slice(1));
//     // newName.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   const jo = newName.join(" ");
//   console.log(jo);
// }

// capitalName(sazzad);
// capitalName(yeasin);
// capitalName(jannat);

// //////////////////////////////////////////////////
// /////////////////////////////////
// /////////////////////////////////////////////////

// // // padStart() //

// // // youtube sorce
// // const str = "String";
// // const str2 = str.padStart(20, "s");
// // console.log(str2);
// // console.log(str2.length);
// ///////////////////////////////////////////////////////

// const message = "Go to gate 23!";
// console.log(message.padStart(20, "+").padEnd(30, "="));
// console.log("sazzad".padStart(16, "=").padEnd(20, "="));

// const maskCrediteCard = function (number) {
//   const str = number + "";
//   // console.log(typeof str);
//   const last = str.slice(-3);
//   // console.log(last);
//   const returnToTheConsole = last.padStart(str.length, "*");
//   console.log(returnToTheConsole);
// };

// maskCrediteCard(+8801735440814);
// maskCrediteCard(+8801915686124);
// maskCrediteCard("01720286993");

// const number = 8801735440814;
// const number1 = 8801915686124;
// const number2 = "01915678754";

// const hiddenNumber = function (num) {
//   // console.log(num);
//   const convertToString = num + "";
//   // console.log(convertToString);
//   const slc = convertToString.slice(-3);

//   const padStartVar = slc.padStart(convertToString.length, "*");
//   console.log(padStartVar);
// };

// hiddenNumber(number);
// hiddenNumber(number1);
// hiddenNumber(number2);

// const numberFunction = function (num) {
//   const str = num + "";
//   const sliceNumber = str.slice(-3);
//   const padVar = sliceNumber.padStart(str.length, "*");
//   return padVar;
// };

// console.log(numberFunction(number));
// console.log(numberFunction(number1));
// console.log(numberFunction(number2));

// //////////////////////////////////////////////////////
// ///////////////////////////////////////////
// /////////////////////////////////////////////////////

// // Repeat method //

// const message2 = "Bad waether... All Departues Delayed.....>>>";
// console.log(message2.repeat(5));

// const planesInline = function (n) {
//   console.log(`There are ${n} planes in line ${">".repeat(n)}`);
// };

// planesInline(5);
// planesInline(3);
// planesInline(12);

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// String Method Practice //
const flights =
  "_Delayed_Departure;fao93766109;tx121212121;11:25+_Arrival;bru09121212121;fao2121212121212121;11:25 +_Delayed_Arraival;hel4545454545454;fao434343434;12:05 +_Departure; fao34343434343;lis4343434343; 12:30";

// console.log(flights.split("+"));

//------------------------------------------------------//
// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "**" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(
//     36,
//     "---"
//   );
//   console.log(output);
// }
//==========================================//

for (const flight of flights.split("+")) {
  console.log(flight);

  const [type, from, to, time] = flight.split(";");
  console.log(type, from, to, time);
}
