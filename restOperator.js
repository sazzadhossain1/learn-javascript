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

//spread operator//
// const arr = [1, 2, ...[3, 4]];

// //Rest operator//
// const [a, b, , ...other] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, other);

// const [pizza, , risotto, ...otherFoodAndArr] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
//   ...arr,
// ];
// console.log(pizza, risotto, otherFoodAndArr);

// const { set, ...weekdays } = restaurant.openingHours;
// console.log(set, weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };

// add(2, 3);
// add(2, 3, 4, 5, 6);
// add(2, 33, 4, 5, 6, 77, 88);

// const x = [23, 5, 7];
// add(...x);

// function numbersAdd(...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//     console.log(sum);
//   }
// }

// const y = [10, 5, 5];
// numbersAdd(...y);
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//     console.log(sum);
//   }
// };
// const x = [23, 5, 7];
// add(...x);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    console.log(sum);
  }
};
const x = [10, 5, 5, 5, 10, 100];
add(...x);
add(10, 10);

restaurant.orderPizza("mushroom", "onion", "olives", "spinach");
restaurant.orderPizza("mushroom");

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// ati hocche (SPREAD) operator karon hocche spread operator (=) sign er right pashe royeche.....
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// ati hocche (REST) operator karon (...) REST operator ti (=) sigh er left pashe royeche....
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

///////////////////////////////////////////////////////////////
//==========================================================//

// Object er vitore (spread) and (rest) operator ke apply korbo
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
//////////////////////////////////////////////////////

// akhon amra function er vitore (rest) operator use kore dekhbo //

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// //////////////////////////////////////////////
// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");
