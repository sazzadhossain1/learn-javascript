// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("burger"));
// console.log(ordersSet.add("Garlic Bread"));
// ordersSet.delete("Risotto");
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );

// console.log(new Set("sazz").size);

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

// let myArray = new Set();
// console.log(myArray);
// myArray.add("sazzad");
// console.log(myArray);

//////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////

// youtube chanal ---> CODE ABC //

// let arr = [2, 3, 4, 5, 66, 66, 66, 77, 4, 3, 2];
// let set = new Set(arr);
// let setTwo = set.has(2);
// console.log(setTwo);

function removeDuplicate(...arr) {
  let st = new Set(arr);
  return [...st];
}

console.log(removeDuplicate(22, 22, 22, 33, 33, 44, 44, 55, 55));
