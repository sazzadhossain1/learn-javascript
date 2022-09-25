const weekdays = ["mon", "tue", "wed", "thu", "fri", "set", "sun"];

openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: "classico Italiano",
  location: "Via angelo Tavanti 23, Firenze,Italy",
  categories: ["Italian", "pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be belivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// const days = ["mon", "tue", "wed", "thu", "fri", "set", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "Closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods //

// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");
// const users = [
//   { name: "Sazzad", email: "sazzad1@gmail.com" },
//   { name: "Hossain", email: "hossain1@gmail.com" },
//   { name: "Tomal", email: "tomal1@gmail.com" },
// ];

// console.log(users[0]?.name ?? "User array empty");
// console.log(users[1]?.name ?? "User array empty");
// console.log(users[2]?.name ?? "User array empty");

// if (users.length > 5) {
//   console.log(users[0].name);
// } else {
//   console.log("User array empty");
// }

/////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////

const days1 = ["mon", "tue", "wed", "thu", "fri", "set", "sun"];

for (const day1 of days1) {
  const openValue = restaurant.openingHours[day1]?.open ?? "Closed";
  console.log(`On ${day1}, Open at ${openValue}`);
}

// Methode //
console.log(restaurant.order?.(0, 1) ?? "Methode dose not exsit");
console.log(restaurant.orderResodo?.(0, 1) ?? "Methode dose not exsit");

const users = [
  { name: "Sazzad", email: "sazzad1@gmail.com" },
  { name: "Hossain", email: "hossain1@gmail.com" },
  { name: "Tomal", email: "tomal1@gmail.com" },
];

// console.log(users[0]?.email ?? "Emain dose not exsist");
// console.log(users[1]?.email ?? "Email dose not exsist");
// console.log(users[2]?.email ?? "Email dose not exsist");
// console.log(users[3]?.email ?? "Email dose not exsist");

if (users.length >= 4) {
  console.log(users[4]?.email);
} else {
  console.log(" User array empty");
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// if (restaurant.openingHours && restaurant.openingHours.mon.open) {
//   console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant?.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "set", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "Shop is closed";
//   console.log(`On ${day}, We open at ${open}`);
// }

// for (const day of days) {
//   const closed = restaurant.openingHours[day]?.close ?? "This shop is off";
//   console.log(`On ${day},shop is closed at ${closed}`);
// }
// //---------------------------//

// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// const users = [
//   { name: "Sazzad", email: "sazzad1@gmail.com" },
//   { name: "Hossain", email: "hossain1@gmail.com" },
//   { name: "Tomal", email: "tomal1@gmail.com" },
// ];
// console.log(users[3]?.email ?? "User array empty");

// if (users.length >= 3) {
//   console.log(users[3]?.name);
// } else {
//   console.log("User array empty");
// }
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
