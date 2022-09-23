// const restaurant = {
//   name: "classico Italiano",
//   location: "Via angelo Tavanti 23, Firenze,Italy",
//   categories: ["Italian", "pizzeria", "Vegetarian", "organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     set: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
//     will be belivered to ${address} at ${time}`);
//   },
// };
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del sole,21",
//   starterIndex: 1,
// });
// const { name, location, openingHours, categories } = restaurant;
// console.log(name, location, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // // Default Values //
// const { mainMenu: menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// // //....................................//

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);
// // //...........................//

// // // Nasted Objects //
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// destructuring array //
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // ==> amra aikhane arr ke destructuring korlam.....kono variable er left side e jodi third bracate thake and = sign er pore jodi kono array er name thake tahole bujha jabe je array ke destructuring kora hoyeche r left side jei third bracate aache sheitar hocche destructruring operator.
// console.log(x, y, z);
// //.......................................//

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
// //.................................
// [main, secondary] = [secondary, main];

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // --> nasted array destructuring <-- //

// const nasted = [2, 4, [5, 6]];
// // console.log(nasted);
// // const [i, , j] = nasted;
// // console.log(i, j);

// const [i, , [j, k]] = nasted;
// console.log(i, j, k);
// //----------------------------------//

// // --> Default Value <-- //
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Oranic"],
  startMenu: ["Focaccia", "Bruuschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],
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
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  ) {
    console.log(
      `Order reveived! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole,21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del sole, 21",
  starterIndex: 1,
});

// const arr = [1, 2, 3];
// const [a, d, c] = arr;
// console.log(a, d, c);

let [first, , , second] = restaurant.categories;
console.log(first, second);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// [second, first] = [first, second];
// console.log(second, first);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [t, , [x, y]] = nested;
// console.log(t, x, y);

// const defaul = [1, 2];
// const [q = 1, u = 1, r = 1] = defaul;
// console.log(q, u, r);
///////////////////////////////////////////////////////////

// Object Destructure //

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

const { startMenu: starters = [], categories: ca = [] } = restaurant;
// console.log(starters, ca);

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b, c } = obj);
// console.log(a, b, c);

const {
  fri: { open: o, close: cl },
} = restaurant.openingHours;
// console.log(o, cl);
