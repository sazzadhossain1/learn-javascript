// (conditional) operator mane (ternary) operator //

const age = 20;

const drink = age >= 18 ? "drink Wine" : "drink water"; // ---> aita hocche ternary operator //
console.log(drink);

if (age >= 18) {
  console.log("Drink Wine");
} else {
  console.log("Drink Water");
}

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);
