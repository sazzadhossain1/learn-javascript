const restaurant = {
  name: "classico Italiano",
  location: "Via angelo Tavanti 23, Firenze,Italy",
  categories: ["Italian", "pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    set: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be belivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// let newLet = restaurant.orderSalad ?? restaurant.starterMenu;
// console.log(newLet);
restaurant.numGuestes = 0;
const guests = restaurant.numGuestes || 20;
console.log(guests); // ai operator shudhu truthy value nay //

const guestCorrect = restaurant.numGuestes ?? 10;
console.log(guestCorrect); // ai operator (0 and "") ai 2 ta operator o nay//

///////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////

// practice by youtube //
//-----------------------//
// let myName;
// if (myName !== undefined && myName !== null) {
//   console.log("defiend");
// } else {
//   console.log("undefined");
// }

// let myName = "";
// let test;
// if (myName !== undefined && myName !== null) {
//   test = "Hello";
// } else {
//   test = "By";
// }
// console.log(test);

// turnary operator //

// const ter = myName !== undefined && myName !== null ? (test = "Hello") : "By";
// console.log(ter);

// Nullish Coalescing operator //

// test = myName ?? "Buy Buy";
// console.log(test);

////////////////////////////////////////////////

// let myName;
// let yourName;
// let test;

// test = myName ?? yourName ?? "Hello World";
// console.log(test);

// let num = 10;
// let num1 = 20;

// let a = (num ?? 5) * (num1 ?? 6); // result will be show 200 //
// console.log(a);

// let ab = (num ?? 5) + (num1 ?? 6); // result will be show 30 //
// console.log(ab);

// let newNum;

// newNum = num ?? num1; // result will be show 10 //
// console.log(newNum);
