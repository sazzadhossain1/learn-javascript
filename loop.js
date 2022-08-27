// For Loops //
//======================
// for (let rep = 1; rep <= 10; rep = rep + 1) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

/////////////////////////////////////////////

const sazzadArray = [
  "sazzad",
  "hossain",
  2022 - 1996,
  "student",
  ["michael", "peter", "steven"],
  "this is more length",
];
const types = [];
for (let i = 0; i < sazzadArray.length; i = i + 1) {
  //   console.log(sazzadArray[i], typeof sazzadArray[i]);

  //   types[i] = typeof sazzadArray[i];
  types.push(typeof sazzadArray[i]);
}
// console.log(types);

//////////////////////////////////////

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i = i + 1) {
  ages.push(2022 - years[i]);
}
// console.log(ages);

////////////////////////////////////
// continue and break //

for (let i = 0; i < sazzadArray.length; i = i + 1) {
  if (typeof sazzadArray[i] != "string") continue;
  // console.log(sazzadArray[i], typeof sazzadArray[i]);
}

////////////////////////////////////////////////////////

for (let i = 0; i < sazzadArray.length; i = i + 1) {
  if (typeof sazzadArray[i] === "number") break;
  // console.log(sazzadArray[i], typeof sazzadArray[i]);
}

///////////////////////////////////////////////
// Looping Backwards and loops in loops //

const sazzad = [
  "sazzad",
  "hossain",
  2022 - 1996,
  "student",
  ["michael", "peter", "steven"],
  "this is more length",
];

for (let i = sazzad.length - 1; i >= 0; i--) {
  // console.log(sazzad[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting exercise ${exercise} -------------`);
  for (let rep = 1; rep < 6; rep++) {
    // console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
  }
}
