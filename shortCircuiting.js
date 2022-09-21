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

console.log("----Ro----");

console.log(1 || "sazzad");
console.log("" || "sazzad");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.namGuests = 23;
const guests1 = restaurant.namGuests ? restaurant.namGuests : 12;
console.log(guests1);

const guests2 = restaurant.namGuests || 10;
console.log(guests2);

console.log("----AND----");

console.log(0 && "sazzad");
console.log(4 && "sazzad");
console.log("Hello" && 23 && null && "sazzad");

if (restaurant.orderPizza && restaurant.namGuests) {
  console.log("it's working");
} else {
  console.log("it's not working");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
