// youtube er shumit vai er theke kora //

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

let text = "";
for (const x of fruits.entries()) {
  text = text + x;
  console.log(x);
}

console.log(text);
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
