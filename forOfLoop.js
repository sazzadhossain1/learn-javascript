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
///////////////////////////////////////////////////

const properties = Object.keys(openingHours);
console.log(properties);

const propertiesValut = Object.values(openingHours);
console.log(propertiesValut);

let openStr = `We are open on ${properties.length} days :`;
console.log(openStr);

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open it ${open} and close at ${close}`);
}
//--------------------------------//
// shumit vai //
let name = "sazzad";
for (const x of name) {
  console.log(x);
}

const number = [10, 20, 30, 40, 50];
for (num in number) {
  console.log(num);
}

for (let arr of restaurant.starterMenu) {
  console.log(arr);
}

for (let mainArr in restaurant.mainMenu) {
  console.log(mainArr);
}

for (let obj in openingHours) {
  console.log(obj);
}

for (let obj2 in restaurant) {
  console.log(obj2);
}

const newObj = {
  name: "javascript",
  estd: 1995,
  founder: "Brendan Eich",
};

for (let x in newObj) {
  console.log(x);
}

for (let x of Object.values(newObj)) {
  console.log(x);
}

const myArray = [11, 22, 3, 44, 55];
for (const element of myArray) {
  console.log(element);
}

const myStr = "I love javascript";
for (const srt of myStr) {
  console.log(srt);
}
// (for of loop ---> value return kore and for in loop ---> index return kore)

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////
// const properties = Object.keys(openingHours);
// console.log(properties);

// const propertiesValut = Object.values(openingHours);
// console.log(propertiesValut);

// let = openStr = `we are  open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day},`;
// }
// // console.log(openStr);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [ket , value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open it ${open} and close at ${close}`);
// }
// for (day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for (day of Object.values(openingHours)) {
//   console.log(day);
// }

//////////////////////////////////////
////////////////////////////////////////
//////////////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// // console.log(..  .menu.entries());
// //-----------------------------------//

// const x = ["sazzad", "hossain", "tomal"];
// for (let y of x) {
//   console.log(y);
// }

// const number = [10, 11, 12, 13];
// for (let num of number) {
//   console.log(num);
// }

// const person = {
//   name: "Sazzad",
//   profession: "Web developer",
//   id: 1,
//   address: "dhaka",
// };

// for (let x in person) {
//   console.log(`${x} : ${person[x]}`);
// }

// for (let n of number) {
//   console.log(n);
// }

// for (let b in person) {
//   console.log(b, ":", person[b]);
// }

// for (let b in person) {
//   console.log(`${b} : ${person[b]}`);
// }

// for (let i of restaurant.starterMenu) {
//   console.log(i);
// }

// for (let y in restaurant) {
//   console.log(`${y} : ${restaurant[y]}`);
// }

// for (let o in restaurant.openingHours.thu) {
//   console.log(o, ":", restaurant.openingHours.thu[o]);
// }
