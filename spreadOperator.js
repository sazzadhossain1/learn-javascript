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
};

const newManiu = [...restaurant.mainMenu, "Gnocci"];
console.log(newManiu);
// const arr = [7, 8, 9];
// const newArray = [1, 2, ...arr];
// console.log(newArray);
// console.log(...newArray);

// join 2 array //

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
//...................................//

const str = "sazzad";
const letters = [...str]; // ---> ami jokhon str ke letters variable er vitore spread operator er maddhome copy korbo      [...str] tokhon "sazzad" likha tir protita okkhor alada alada hoye jabe jemon ----> [ 's', 'a', 'z', 'z', 'a', 'd' ]
console.log(letters);
console.log(...str);

//................................
const ingredients = [
  //   prompt("Let's amke pasta! Ingredient 1?"),
  //   prompt("Ingredient 2?"),
  //   prompt("Ingredinent 3?"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Guiseppe",
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
