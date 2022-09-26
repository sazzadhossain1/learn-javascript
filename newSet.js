const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("burger"));
console.log(ordersSet.add("Garlic Bread"));
ordersSet.delete("Risotto");
console.log(ordersSet);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// youtube shumit vai er theke kora //
// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(ordersSet);
// console.log(ordersSet.add("alu vorta"));

// const mySet = new Set();
// mySet.add("a");
// mySet.add("b");
// mySet.add("c");

// console.log(mySet);

// const letters = new Set(["T", "o", "o", "m", "a", "l"]);

// let text = "";
// letters.forEach(function (value) {
//   text += value;
// });
// console.log(text);

// console.log(letters.values());
