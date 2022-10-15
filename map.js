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

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italiy");
// rest.set(2, "Lisbon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get("categories"));

// const time = 21;
// const condition = rest.get(time > rest.get("open") && time < rest.get("close"));
// console.log(condition);

// const hasTrueOrFalse = rest.has("categories");
// console.log(hasTrueOrFalse);

// // const deleteElement = rest.delete(2);
// console.log(rest.delete(2));

// // rest.clear();
// // console.log(rest);
// const arr = [1, 2];
// rest.set(arr, "Test");

// console.log(rest.size);
// console.log(rest.get(arr));

//---------------------------------------------------------//

const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "You ara correct"],
  [false, "Try again"],
]);
console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app //
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}
// const answer = Number(prompt("Your answer"));
// console.log(answer);
let answer = 3;
console.log(answer);

const getAnswer = question.get(question.get("correct") === answer);
console.log(getAnswer);

// if (question.get("correct") === answer) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
console.log(...question);
// console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
///////////////////////////////////////////////
//==========================================//
/////////////////////////////////////////////

// youtube er shumit vai er theke kora //

// const fruits = new Map();

// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 300);

// console.log(fruits);

// const siz = fruits.size;
// console.log(siz);
// fruits.delete("apples");
// console.log(fruits);

// const trueAndFalse = fruits.has("bananas");
// console.log(trueAndFalse);

// const fruits1 = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// let text = "";
// for (const x of fruits1.entries()) {
//   text = text + x;
//   console.log(x);
// }

// console.log(text);

const fruits = new Map();
fruits.set("bananas", 300);
fruits.set("apple", 500);
fruits.set("orange", 1000);
// console.log(fruits);
fruits.delete("apple");
// const s = fruits.size;
// const exist = fruits.has("orange");
// const exist = fruits.has("apple");
// console.log(fruits);
console.log(fruits instanceof Map); // ====> instanceof diye atir type ti jana jabe //
///////////////////////////////////////////
//......................................//
//////////////////////////////////////////

// youtube chanel by CODE ABC //

// const map = new Map([
//   [1, "sazzad"],
//   [2, "Hossain"],
//   [3, "Tomal"],
// ]);
// map.set(5, "Web Developer");
// map.delete(5, "Web Developer");
// let m = map.has(5, "Web Developer");
// console.log(m);

// map.clear();
// console.log(map);
// map.set(1, "Yeasin");
// console.log(map);

// map.forEach((value) => console.log(value));

// const myObj = [
//   {
//     id: 1,
//     title: "title 1",
//     desc: "desc 1",
//   },
//   {
//     id: 2,
//     title: "title 2",
//     desc: "desc 2",
//   },
//   {
//     id: 3,
//     title: "title 3",
//     desc: "desc 3",
//   },
//   {
//     id: 4,
//     title: "title 4",
//     desc: "desc 4",
//   },
// ];

// const items = new Map([
//   [
//     1,
//     {
//       id: 1,
//       title: "title 1",
//       desc: "desc 1",
//     },
//   ],
//   [
//     2,
//     {
//       id: 2,
//       title: "title 2",
//       desc: "desc 2",
//     },
//   ],
//   [
//     3,
//     {
//       id: 3,
//       title: "title 3",
//       desc: "desc 3",
//     },
//   ],
//   [
//     4,
//     {
//       id: 4,
//       title: "title 4",
//       desc: "desc 4",
//     },
//   ],
// ]);

// const index = items.get(2);
// console.log(index);

/////////////////////////////////////////////////////
//------------------------------------------------//
///////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// const movementsUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }

// console.log(movementsUSDfor);

//////////////////////////////////////////////

const movementsDescriptions = movements.map(function (mov, i) {
  if (mov > 0) {
    return `Movement ${i + 1} : You Deposited ${mov}`;
  } else {
    return `Movement ${i + 1} : You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDescriptions);

const user = "Steven Thomas Williams";
const createUserNames = (usr) => {
  const userName = usr
    .split(" ")
    .map((name) => {
      return name[0];
    })
    .join("")
    .toLowerCase();
  return userName;
};
console.log(createUserNames(user));
