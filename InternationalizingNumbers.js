const num = 3884764.23;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  //   useGrouping: false,
};

// console.log("US:      ", new Intl.NumberFormat("en-US").format(num));
// console.log("Germany:", new Intl.NumberFormat("de-DE").format(num));
// console.log("Syria:", new Intl.NumberFormat("ar-SY").format(num));
// // console.log(
//   navigator.languages,
//   new Intl.NumberFormat(navigator.language).format(num)
// );

//////////////////////////////////////////
////////////////////////////
///////////////////

setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  "olives",
  "spinach"
);
console.log("Waiting...");
