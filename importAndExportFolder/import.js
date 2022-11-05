// import { addToCard, totalPrice, totalQuantity } from "./export.js";

// change import variable name
// import {
//   addToCard,
//   totalPrice as price,
//   totalQuantity as quantity,
// } from "./export.js";

// import all data from export
import * as exportAll from "./export.js";
//...........................................

// console.log("Importing module");
// addToCard("bread", 5);

// console.log(totalPrice, totalQuantity);
// console.log(price, quantity);

//...........................................

exportAll.addToCard("bread", 5);
console.log(exportAll.totalPrice);

//Import default
//..............
import add, { cart } from "./export.js";

add("Dog", 1);
add("Bread", 5);
add("Apple", 4);

console.log(cart);

///////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////

// learn with sumit vai
//.........................

// import { pi, a } from "./export.js";
// console.log(pi, a);

// Import with another way
// import fromExport, { pi } from "./export.js";
// // console.log(fromExport);
// // console.log(pi);

// // Function Import
// import { myFunction } from "./export.js";
// // Call myFunction
// console.log(myFunction());
